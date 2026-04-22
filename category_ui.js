document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('category-grid');
    const emptyState = document.getElementById('empty-state');
    const titleEl = document.getElementById('category-title');
    
    if (!grid || !window.productsData) return;

    // Get category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryQuery = urlParams.get('c');

    if (!categoryQuery) {
        titleEl.textContent = "All Menu Items";
        renderProducts(window.productsData);
        return;
    }

    // Set Title
    titleEl.textContent = categoryQuery;

    // Filter Products
    const filteredProducts = window.productsData.filter(p => p.category.toLowerCase() === categoryQuery.toLowerCase());

    if (filteredProducts.length === 0) {
        grid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
    } else {
        renderProducts(filteredProducts);
    }

    function renderProducts(productsToRender) {
        let html = '';
        if (typeof createProductCard === 'function') {
            productsToRender.forEach(product => {
                html += createProductCard(product);
            });
        }

        grid.innerHTML = html;

        // Re-bind modal events for dynamically added buttons
        const dynamicAddBtns = grid.querySelectorAll('.add-to-cart-btn');
        dynamicAddBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (typeof openOptionsModal === 'function') {
                    openOptionsModal(btn.dataset);
                } else if (typeof addToCart === 'function') {
                    // Fallback if modal function doesn't exist
                    addToCart(btn.dataset);
                }
            });
        });
    }
});
