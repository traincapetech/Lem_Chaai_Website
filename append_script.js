const fs = require('fs');

const jsContent = `
/* =========================================
   CART & WHATSAPP INTEGRATION LOGIC
========================================= */

let cart = JSON.parse(localStorage.getItem('lemchaai_cart')) || [];

// DOM Elements
const floatingCartBtn = document.getElementById('floating-cart-btn');
const cartBadge = document.getElementById('cart-badge');
const cartSidebar = document.getElementById('cart-sidebar');
const cartSidebarOverlay = document.getElementById('cart-sidebar-overlay');
const closeCartBtn = document.getElementById('close-cart-btn');
const emptyCartMsg = document.getElementById('empty-cart-msg');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');
const whatsappCheckoutBtn = document.getElementById('whatsapp-checkout-btn');

const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

const optionsModal = document.getElementById('options-modal');
const optionsModalOverlay = document.getElementById('options-modal-overlay');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalItemName = document.getElementById('modal-item-name');
const sizeOptionsContainer = document.getElementById('size-options-container');
const singlePriceContainer = document.getElementById('single-price-container');
const qtyDisplay = document.getElementById('qty-display');
const qtyPlus = document.getElementById('qty-plus');
const qtyMinus = document.getElementById('qty-minus');
const modalTotalBtnPrice = document.getElementById('modal-total-btn-price');
const confirmAddBtn = document.getElementById('add-to-cart-confirm');

let currentItem = null;
let currentQty = 1;
let currentPrice = 0;

// Initialize Cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if(cartBadge) cartBadge.innerText = totalItems;
    
    if(floatingCartBtn) {
        if (totalItems > 0) {
            floatingCartBtn.classList.remove('hidden');
        } else {
            floatingCartBtn.classList.add('hidden');
        }
    }

    // Render Sidebar Items
    if(cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        let totalAmt = 0;
        
        if (cart.length === 0) {
            if(emptyCartMsg) {
                const msg = document.createElement('div');
                msg.className = "text-center text-dark/50 italic mt-10";
                msg.innerText = "Your cart is empty.";
                cartItemsContainer.appendChild(msg);
            }
        } else {
            cart.forEach((item, index) => {
                totalAmt += item.price * item.quantity;
                
                const itemEl = document.createElement('div');
                itemEl.className = 'flex justify-between items-center bg-cardbg border border-masala/10 p-3 rounded-xl shadow-sm';
                itemEl.innerHTML = \`
                    <div class="flex-1 pr-2">
                        <h4 class="font-bold text-dark text-sm">\${item.name}</h4>
                        \${item.size ? \`<span class="text-xs text-masala/70 font-semibold uppercase">\${item.size}</span>\` : ''}
                        <div class="text-xs text-terracotta font-bold mt-1">₹\${item.price}</div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex items-center bg-cream rounded-md border border-masala/20">
                            <button class="w-6 h-6 flex items-center justify-center text-terracotta hover:bg-terracotta hover:text-cream transition-colors rounded-l-md" onclick="updateItemQuantity(\${index}, -1)"><i class="fa-solid fa-minus text-[10px]"></i></button>
                            <span class="w-6 text-center font-bold text-sm text-dark">\${item.quantity}</span>
                            <button class="w-6 h-6 flex items-center justify-center text-terracotta hover:bg-terracotta hover:text-cream transition-colors rounded-r-md" onclick="updateItemQuantity(\${index}, 1)"><i class="fa-solid fa-plus text-[10px]"></i></button>
                        </div>
                    </div>
                \`;
                cartItemsContainer.appendChild(itemEl);
            });
        }
        
        if(cartTotalPrice) cartTotalPrice.innerText = '₹' + totalAmt;
    }
}

window.updateItemQuantity = function(index, delta) {
    if (cart[index].quantity + delta <= 0) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity += delta;
    }
    saveCart();
};

function saveCart() {
    localStorage.setItem('lemchaai_cart', JSON.stringify(cart));
    updateCartUI();
}

// Side Bar Toggles
if (floatingCartBtn && cartSidebar && cartSidebarOverlay) {
    floatingCartBtn.addEventListener('click', () => {
        cartSidebarOverlay.classList.remove('hidden');
        setTimeout(() => cartSidebarOverlay.classList.remove('opacity-0'), 10);
        cartSidebar.classList.remove('translate-x-full');
    });

    const closeCart = () => {
        cartSidebar.classList.add('translate-x-full');
        cartSidebarOverlay.classList.add('opacity-0');
        setTimeout(() => cartSidebarOverlay.classList.add('hidden'), 300);
    };

    closeCartBtn.addEventListener('click', closeCart);
    cartSidebarOverlay.addEventListener('click', closeCart);
}

// Modal Logic
function openOptionsModal(itemData) {
    currentItem = itemData;
    currentQty = 1;
    qtyDisplay.innerText = currentQty;
    
    modalItemName.innerText = itemData.name;
    
    // Safety check: is it single or multiple price?
    if (itemData.priceSingle) {
        sizeOptionsContainer.classList.add('hidden');
        singlePriceContainer.classList.remove('hidden');
        currentPrice = parseInt(itemData.priceSingle);
        singlePriceContainer.innerText = '₹' + currentPrice;
    } else {
        sizeOptionsContainer.classList.remove('hidden');
        singlePriceContainer.classList.add('hidden');
        
        const halfPrice = itemData.priceHalf;
        const fullPrice = itemData.priceFull;
        
        document.getElementById('modal-price-half').innerText = '₹' + halfPrice;
        document.getElementById('modal-price-full').innerText = '₹' + fullPrice;
        
        // Set dynamic labels if they exist (Vada Pav)
        const labelHalfEl = document.getElementById('modal-label-half');
        const labelFullEl = document.getElementById('modal-label-full');
        const inputHalf = document.querySelector('input[name="item_size"][value="Half"]');
        const inputFull = document.querySelector('input[name="item_size"][value="Full"]');
        
        if(itemData.labelHalf) {
            labelHalfEl.innerText = itemData.labelHalf;
            labelFullEl.innerText = itemData.labelFull;
        } else {
            labelHalfEl.innerText = 'Half';
            labelFullEl.innerText = 'Full';
        }
        
        // Reset selection
        inputHalf.checked = true;
        currentPrice = parseInt(itemData.priceHalf);
        
        // Setup listener explicitly
        [inputHalf, inputFull].forEach(radio => {
            radio.onchange = (e) => {
                if (e.target.value === 'Full') currentPrice = parseInt(itemData.priceFull);
                else currentPrice = parseInt(itemData.priceHalf);
                updateModalTotal();
            };
        });
    }
    
    updateModalTotal();
    
    optionsModalOverlay.classList.remove('hidden');
    setTimeout(() => {
        optionsModalOverlay.classList.remove('opacity-0');
        optionsModal.classList.remove('scale-95');
    }, 10);
}

function closeOptionsModal() {
    optionsModalOverlay.classList.add('opacity-0');
    optionsModal.classList.add('scale-95');
    setTimeout(() => optionsModalOverlay.classList.add('hidden'), 300);
}

function updateModalTotal() {
    if(modalTotalBtnPrice) {
        modalTotalBtnPrice.innerText = '₹' + (currentPrice * currentQty);
    }
}

if (qtyPlus && qtyMinus && confirmAddBtn && closeModalBtn) {
    qtyPlus.addEventListener('click', () => { currentQty++; qtyDisplay.innerText = currentQty; updateModalTotal(); });
    qtyMinus.addEventListener('click', () => { if(currentQty > 1) currentQty--; qtyDisplay.innerText = currentQty; updateModalTotal(); });
    closeModalBtn.addEventListener('click', closeOptionsModal);
    optionsModalOverlay.addEventListener('click', (e) => {
        if(e.target === optionsModalOverlay) closeOptionsModal();
    });
    
    confirmAddBtn.addEventListener('click', () => {
        let size = null;
        if (!currentItem.priceSingle) {
             const isFullChecked = document.querySelector('input[name="item_size"][value="Full"]').checked;
             // determine string to save based on custom label
             if(isFullChecked) {
                 size = currentItem.labelFull ? currentItem.labelFull : "Full";
             } else {
                 size = currentItem.labelHalf ? currentItem.labelHalf : "Half";
             }
        }
        
        const existingItemIndex = cart.findIndex(i => i.name === currentItem.name && i.size === size);
        
        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += currentQty;
        } else {
            cart.push({
                name: currentItem.name,
                size: size,
                price: currentPrice,
                quantity: currentQty
            });
        }
        
        saveCart();
        closeOptionsModal();
        
        if (floatingCartBtn) floatingCartBtn.click();
    });
}

// Bind + Add buttons
if(addToCartBtns) {
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            openOptionsModal(btn.dataset);
        });
    });
}

// WhatsApp Checkout
if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.addEventListener('click', () => {
        if(cart.length === 0) return;
        
        let message = "Hello LemChaai! I would like to place an order:\\n\\n";
        let total = 0;
        
        cart.forEach(item => {
            const sizeStr = item.size ? \` (\${item.size})\` : "";
            const itemTotal = item.price * item.quantity;
            message += \`▪ \${item.quantity}x \${item.name}\${sizeStr} - ₹\${itemTotal}\\n\`;
            total += itemTotal;
        });
        
        message += \`\\nTotal Amount: ₹\${total}\\n\\nPlease confirm my order.\`;
        
        const waUrl = \`https://wa.me/919953975300?text=\${encodeURIComponent(message)}\`;
        window.open(waUrl, '_blank');
        
        // Optional: clear cart after ordering? 
        // cart = [];
        // saveCart();
    });
}

// Init
updateCartUI();
`;

let currentScript = fs.readFileSync('d:/lem_chai/script.js', 'utf8');

// simple idempotency check
if (!currentScript.includes('CART & WHATSAPP INTEGRATION LOGIC')) {
    fs.appendFileSync('d:/lem_chai/script.js', '\n' + jsContent);
    console.log('Successfully appended cart script');
} else {
    console.log('Script already contains cart logic');
}
