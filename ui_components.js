// ui_components.js
// Centralized UI components for reusable rendering

/**
 * Creates a reusable product card HTML string
 * @param {Object} product - The product object from productsData
 * @param {Boolean} animate - Whether to apply fade-in animation
 * @returns {String} HTML string of the product card
 */
function createProductCard(product, animate = true) {
    const animationClass = animate ? 'fade-in-up visible' : '';
    const imageHtml = product.image 
        ? `<img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">` 
        : `<i class="fa-solid fa-utensils text-4xl text-masala/20"></i>`;

    return `
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-masala/10 flex gap-4 group hover:shadow-md transition-shadow min-w-[280px] snap-center flex-shrink-0 ${animationClass}">
            <div class="w-28 h-28 md:w-24 md:h-24 rounded-xl overflow-hidden bg-masala/5 flex-shrink-0 flex items-center justify-center">
                ${imageHtml}
            </div>
            <div class="flex flex-col justify-between flex-grow py-1">
                <div>
                    <span class="text-[10px] font-bold text-terracotta uppercase tracking-wider mb-1 block">${product.subCategory}</span>
                    <h3 class="font-bold text-base md:text-lg text-dark line-clamp-2 leading-tight">${product.name}</h3>
                    <span class="font-bold text-masala text-sm md:text-md mt-1 md:mt-2 block">₹${product.price}</span>
                </div>
                <div class="text-right mt-2">
                    ${product.price.includes('/') 
                        ? `<button class="add-to-cart-btn bg-terracotta/10 hover:bg-terracotta text-terracotta hover:text-cream px-5 md:px-6 py-1.5 md:py-2 rounded-lg text-sm font-bold transition-colors shadow-sm inline-flex items-center gap-1 md:gap-2" data-name="${product.name}" data-price-half="${product.price.split('/')[0].trim()}" data-price-full="${product.price.split('/')[1].trim()}">`
                        : `<button class="add-to-cart-btn bg-terracotta/10 hover:bg-terracotta text-terracotta hover:text-cream px-5 md:px-6 py-1.5 md:py-2 rounded-lg text-sm font-bold transition-colors shadow-sm inline-flex items-center gap-1 md:gap-2" data-name="${product.name}" data-price-single="${product.price}">`
                    }
                        Add <i class="fa-solid fa-plus text-[10px]"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Creates a horizontally scrollable slider section HTML string
 * @param {String} categoryName - Name of the category (e.g., "Street Bites")
 * @param {Array} products - Array of product objects to render
 * @param {String} targetRoute - Route for the "View All" button
 * @returns {String} HTML string of the product slider section
 */
function createProductSlider(categoryName, products, targetRoute) {
    if (!products || products.length === 0) return '';

    const cardsHtml = products.map(product => createProductCard(product, false)).join('');

    return `
        <section class="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-up visible relative group">
            <div class="flex justify-between items-end mb-4 border-b border-masala/10 pb-2">
                <h2 class="font-serif text-2xl font-bold text-dark">${categoryName}</h2>
                <div class="flex items-center gap-4">
                    <div class="slider-controls hidden md:flex gap-2">
                        <button class="slider-btn-prev bg-white hover:bg-terracotta hover:text-cream text-dark w-8 h-8 rounded-full shadow-sm flex items-center justify-center transition-colors border border-masala/10"><i class="fa-solid fa-chevron-left text-xs"></i></button>
                        <button class="slider-btn-next bg-white hover:bg-terracotta hover:text-cream text-dark w-8 h-8 rounded-full shadow-sm flex items-center justify-center transition-colors border border-masala/10"><i class="fa-solid fa-chevron-right text-xs"></i></button>
                    </div>
                    <a href="category.html?c=${encodeURIComponent(targetRoute)}" class="text-sm font-bold text-terracotta hover:text-masala transition-colors">View All <i class="fa-solid fa-chevron-right text-xs"></i></a>
                </div>
            </div>
            <div class="slider-container flex gap-5 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
                ${cardsHtml}
            </div>
        </section>
    `;
}

// Global exposure for non-module environments
if (typeof window !== 'undefined') {
    window.createProductCard = createProductCard;
    window.createProductSlider = createProductSlider;
}
