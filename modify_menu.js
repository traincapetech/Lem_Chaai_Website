const fs = require('fs');

const menuPath = 'd:/lem_chai/menu.html';
let html = fs.readFileSync(menuPath, 'utf8');

// Regex to capture the full list item
const regex = /<li class="(.*?)"><span(.*?)>(.*?)<\/span> <span class="font-bold text-masala(.*?)>(.*?)<\/span><\/li>/g;

html = html.replace(regex, (match, liClass, spanAttrs, nameHtml, priceClassEnd, priceText) => {
    // Extract plain text name (remove nested tags like the Vada Pav tiny text)
    let rawName = nameHtml.replace(/<[^>]*>?/gm, '').trim();
    
    // Some names have " (H/F)" or we removed them. Let's make sure it's clean for data-name.
    let cleanName = rawName.replace(/\s*\(H\/F\)|\s*\(M\)/g, '');
    
    let btnHtml = '';
    
    // Check if priceText contains a slash (e.g. 80 / 150)
    if (priceText.includes('/')) {
        let parts = priceText.split('/');
        let half = parts[0].trim();
        let full = parts[1].trim();
        // Vada Pav is 80 / 150 but labels are 1Pc / 2Pcs instead of H/F. We can handle later via JS.
        // I will just store data-price-half and data-price-full.
        btnHtml = `<button class="add-to-cart-btn bg-terracotta/10 text-terracotta hover:bg-terracotta hover:text-cream w-6 h-6 rounded flex flex-shrink-0 items-center justify-center transition-colors shadow-sm border border-terracotta/20" data-name="${cleanName}" data-price-half="${half}" data-price-full="${full}"><i class="fa-solid fa-plus text-xs"></i></button>`;
    } else {
        // Single price e.g. 80/-
        let price = priceText.replace('/-', '').trim();
        btnHtml = `<button class="add-to-cart-btn bg-terracotta/10 text-terracotta hover:bg-terracotta hover:text-cream w-6 h-6 rounded flex flex-shrink-0 items-center justify-center transition-colors shadow-sm border border-terracotta/20" data-name="${cleanName}" data-price-single="${price}"><i class="fa-solid fa-plus text-xs"></i></button>`;
    }
    
    // Convert the price display to text-right fixed width if it's multiple prices, else keep normal
    let newPriceSpan = priceText.includes('/') ? `<span class="font-bold text-masala w-16 text-right"${priceClassEnd}>${priceText}</span>` : `<span class="font-bold text-masala"${priceClassEnd}>${priceText}</span>`;
    
    // Make sure li has items-center if it doesn't already
    let newLiClass = liClass.includes('items-center') ? liClass : liClass + ' items-center';
    
    return `<li class="${newLiClass}"><span${spanAttrs}>${nameHtml}</span> <div class="flex items-center gap-3">${newPriceSpan} ${btnHtml}</div></li>`;
});

// Also inject the Floating Cart Button, Options Modal, and Sidebar right before </body>
const cartHtml = `
    <!-- Floating Cart Button -->
    <button id="floating-cart-btn" class="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-masala hover:bg-terracotta text-cream p-4 rounded-full shadow-2xl transition-transform hover:-translate-y-2 z-40 hidden group">
        <i class="fa-solid fa-cart-shopping text-2xl"></i>
        <span id="cart-badge" class="absolute -top-2 -right-2 bg-cream text-terracotta font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-md border-2 border-masala border-opacity-50">0</span>
    </button>

    <!-- Cart Sidebar -->
    <div id="cart-sidebar-overlay" class="fixed inset-0 bg-dark/50 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-300"></div>
    <div id="cart-sidebar" class="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl translate-x-full transition-transform duration-300 flex flex-col">
        <div class="p-6 border-b border-masala/20 flex justify-between items-center bg-cardbg">
            <h2 class="font-serif text-2xl font-bold text-terracotta"><i class="fa-solid fa-basket-shopping mr-2"></i> Your Order</h2>
            <button id="close-cart-btn" class="text-dark/50 hover:text-terracotta text-2xl transition-colors"><i class="fa-solid fa-xmark"></i></button>
        </div>
        
        <div id="cart-items-container" class="flex-grow overflow-y-auto p-6 space-y-4">
            <!-- Cart Items will be injected here via JS -->
            <div class="text-center text-dark/50 italic mt-10" id="empty-cart-msg">Your cart is empty.</div>
        </div>
        
        <div class="border-t border-masala/20 bg-cardbg p-6 space-y-4">
            <div class="flex justify-between items-center font-bold text-lg text-dark">
                <span>Total Amount:</span>
                <span id="cart-total-price" class="text-masala">₹0</span>
            </div>
            <button id="whatsapp-checkout-btn" class="w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white p-4 rounded-xl font-bold text-lg transition-transform shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3">
                <i class="fa-brands fa-whatsapp text-2xl"></i> Checkout via WhatsApp
            </button>
        </div>
    </div>

    <!-- Options Modal -->
    <div id="options-modal-overlay" class="fixed inset-0 bg-dark/50 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-4">
        <div id="options-modal" class="bg-cardbg w-full max-w-sm rounded-[32px] shadow-2xl border border-terracotta/20 overflow-hidden transform scale-95 transition-transform duration-300">
            <div class="bg-terracotta/10 p-6 flex justify-between items-start border-b border-masala/10">
                <div>
                    <h3 id="modal-item-name" class="font-sans font-bold text-xl text-dark mb-1">Item Name</h3>
                    <p class="text-xs text-masala/70 font-semibold tracking-wider uppercase">Customize Order</p>
                </div>
                <button id="close-modal-btn" class="text-dark/50 hover:text-terracotta bg-cream w-8 h-8 rounded-full shadow-sm flex items-center justify-center transition-colors"><i class="fa-solid fa-xmark"></i></button>
            </div>
            
            <div class="p-6 space-y-6">
                <!-- Size Options -->
                <div id="size-options-container" class="space-y-3">
                    <label class="block text-sm font-bold text-dark mb-2">Select Size</label>
                    <div class="flex gap-4">
                        <label class="flex-1 cursor-pointer group">
                            <input type="radio" name="item_size" value="Half" class="peer hidden" checked>
                            <div class="border-2 border-masala/20 rounded-xl p-3 text-center peer-checked:border-terracotta peer-checked:bg-terracotta/5 transition-all">
                                <span class="block font-bold text-dark group-hover:text-terracotta" id="modal-label-half">Half</span>
                                <span class="block text-sm text-masala font-semibold" id="modal-price-half">₹80</span>
                            </div>
                        </label>
                        <label class="flex-1 cursor-pointer group">
                            <input type="radio" name="item_size" value="Full" class="peer hidden">
                            <div class="border-2 border-masala/20 rounded-xl p-3 text-center peer-checked:border-terracotta peer-checked:bg-terracotta/5 transition-all">
                                <span class="block font-bold text-dark group-hover:text-terracotta" id="modal-label-full">Full</span>
                                <span class="block text-sm text-masala font-semibold" id="modal-price-full">₹150</span>
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Single Price Display -->
                <div id="single-price-container" class="hidden font-bold text-lg text-masala text-center p-3 border-2 border-terracotta/20 bg-terracotta/5 rounded-xl">
                    ₹0
                </div>

                <!-- Quantity Options -->
                <div>
                    <label class="block text-sm font-bold text-dark mb-3">Quantity</label>
                    <div class="flex items-center justify-between bg-cream border border-masala/20 rounded-xl p-2 max-w-[150px] mx-auto shadow-inner">
                        <button id="qty-minus" class="w-10 h-10 rounded-lg hover:bg-terracotta/10 text-terracotta flex items-center justify-center transition-colors font-bold text-xl"><i class="fa-solid fa-minus text-sm"></i></button>
                        <span id="qty-display" class="font-bold text-dark text-lg w-10 text-center">1</span>
                        <button id="qty-plus" class="w-10 h-10 rounded-lg bg-terracotta/10 hover:bg-terracotta text-terracotta hover:text-cream flex items-center justify-center transition-colors font-bold text-xl"><i class="fa-solid fa-plus text-sm"></i></button>
                    </div>
                </div>
                
                <button id="add-to-cart-confirm" class="w-full bg-masala hover:bg-terracotta text-cream p-4 rounded-xl font-bold transition-transform shadow-lg hover:-translate-y-1">
                    Add to Order <span id="modal-total-btn-price" class="ml-2 bg-cream/20 px-2 py-1 rounded text-sm">₹0</span>
                </button>
            </div>
        </div>
    </div>
`;

if(!html.includes('id="floating-cart-btn"')) {
    html = html.replace('</body>', cartHtml + '\n</body>');
}

fs.writeFileSync(menuPath, html, 'utf8');
console.log('Successfully injected Add buttons and cart modal markup in menu.html');
