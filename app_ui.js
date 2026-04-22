// Data Structure for the Dynamic UI
const categories = [
    { id: 'momos', name: 'Momos', image: 'gallery/Lem_Chaai_Steamed_Momos.png' },
    { id: 'noodles', name: 'Noodles', image: 'gallery/menu_noodles_1776338435672.png' },
    { id: 'maggi', name: 'Maggi', image: 'gallery/Lem_Chaai_Maggie.png' },
    { id: 'pizza', name: 'Pizza', image: 'gallery/menu_pizza_1776338420506.png' },
    { id: 'burger', name: 'Burger', image: 'gallery/menu_burger_1776338384163.png' },
    { id: 'beverages', name: 'Beverages', image: 'gallery/summer_coolers.png' }
];

const combos = [
    {
        id: 'c1',
        name: 'Burger + Cold Drink',
        description: 'Classic Veg Burger with a refreshing 250ml Cola.',
        price: '89',
        image: 'gallery/burger_combo_dark_1776840349016.png'
    },
    {
        id: 'c2',
        name: 'Vada Pav + Milk Tea',
        description: 'Mumbai style Vada Pav with our signature Masala Chai.',
        price: '79',
        image: 'gallery/vada_pav_chai_dark_1776840366304.png'
    },
    {
        id: 'c3',
        name: 'Pizza + Fries + Coke',
        description: 'Weekend Special Veg Combo.',
        price: '199',
        image: 'gallery/products/pizza_combo_dark.png'
    }
];



document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-app-container');
    if (!container) return;

    let html = '';

    // 2. Pick by Category
    html += `
        <section class="py-8 md:py-12 bg-cardbg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-up visible border-y border-masala/5">
            <h2 class="font-serif text-2xl md:text-4xl font-bold text-dark mb-8 text-center">What's on your mind?</h2>
            <div class="flex gap-6 md:gap-0 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 md:justify-between">
                ${categories.map(cat => `
                    <div class="flex flex-col items-center gap-3 md:gap-5 min-w-[80px] md:min-w-[120px] cursor-pointer group">
                        <div class="w-20 h-20 md:w-36 md:h-36 rounded-full bg-white shadow-md border border-masala/10 overflow-hidden group-hover:shadow-xl group-hover:border-terracotta/40 transition-all p-1 md:p-2">
                            <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500">
                        </div>
                        <span class="text-sm md:text-xl font-medium md:font-bold text-dark group-hover:text-terracotta transition-colors">${cat.name}</span>
                    </div>
                `).join('')}
            </div>
        </section>
    `;

    // 3. Category Sliders
    const mainCategories = ['Street Bites', 'Main Meals', 'Beverages & Desserts'];
    
    mainCategories.forEach(catName => {
        // Filter from our new single source of truth using main category
        const catProducts = window.productsData.filter(p => p.category === catName).slice(0, 5); // Limit to 5
        
        // Use our reusable slider component
        if (typeof createProductSlider === 'function') {
            html += createProductSlider(catName, catProducts, catName);
        }
    });

    container.innerHTML = html;

    // Re-bind modal events for dynamically added buttons
    const dynamicAddBtns = container.querySelectorAll('.add-to-cart-btn');
    dynamicAddBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (typeof openOptionsModal === 'function') {
                openOptionsModal(btn.dataset);
            }
        });
    });
    // Setup slider arrows instead of drag-to-scroll
    const sections = container.querySelectorAll('section.relative.group');
    
    const checkOverflow = () => {
        sections.forEach(section => {
            const slider = section.querySelector('.slider-container');
            const controls = section.querySelector('.slider-controls');
            if(slider && controls) {
                // Remove hidden class completely from logic so we can just toggle display
                if (slider.scrollWidth > slider.clientWidth) {
                    controls.style.display = 'flex';
                } else {
                    controls.style.display = 'none';
                }
            }
        });
    };

    sections.forEach(section => {
        const slider = section.querySelector('.slider-container');
        const prevBtn = section.querySelector('.slider-btn-prev');
        const nextBtn = section.querySelector('.slider-btn-next');
        
        if(slider && prevBtn && nextBtn) {
            nextBtn.addEventListener('click', () => {
                slider.scrollBy({ left: 300, behavior: 'smooth' });
            });
            prevBtn.addEventListener('click', () => {
                slider.scrollBy({ left: -300, behavior: 'smooth' });
            });
        }
    });

    // Check on load and resize
    // Add slight delay on load to ensure fonts/images render
    setTimeout(checkOverflow, 100);
    window.addEventListener('resize', checkOverflow);
});
