const fs = require('fs');

let html = fs.readFileSync('d:/lem_chai/menu.html', 'utf8');

const replacements = [
    { search: '<div class="w-full h-32 bg-masala/10 rounded-xl mb-4 flex items-center justify-center text-5xl">🥟</div>', replace: '<img src="gallery/Lem_Chaai_Steamed_Momos.png" alt="Steamed Momos" class="w-full h-40 object-cover rounded-xl mb-4 shadow-sm border border-masala/10">' },
    
    { search: '<div class="w-full h-32 bg-masala/10 rounded-xl mb-4 flex items-center justify-center text-5xl">🥘</div>', replace: '<img src="gallery/gravymosmos.png" alt="Gravy Momos" class="w-full h-40 object-cover rounded-xl mb-4 shadow-sm border border-masala/10">' },
    
    { search: '<div class="w-full h-32 bg-masala/10 rounded-xl mb-4 flex items-center justify-center text-5xl">🥡</div>', replace: '<img src="gallery/chicken_fried_momos.webp" alt="Fried Momos" class="w-full h-40 object-cover rounded-xl mb-4 shadow-sm border border-masala/10">' },
    
    { search: '<div class="w-full h-32 bg-masala/10 rounded-xl mb-4 flex items-center justify-center text-5xl">🔥</div>', replace: '<img src="gallery/kurkure-momos-main.jpg" alt="Kurkure Momos" class="w-full h-40 object-cover rounded-xl mb-4 shadow-sm border border-masala/10">' },
    
    { search: '<div class="w-full h-24 bg-terracotta/10 rounded-xl mb-6 flex items-center justify-center text-4xl">🍟</div>', replace: '<img src="gallery/Fresh_Ingredients.png" alt="Starters & Fries" class="w-full h-40 object-cover rounded-xl mb-6 shadow-sm border border-masala/10">' },
    
    { search: '<div class="w-full h-24 bg-terracotta/10 rounded-xl mb-6 flex items-center justify-center text-4xl">🍔</div>', replace: '<img src="gallery/menu_burger_1776338384163.png" alt="Burgers & Rolls" class="w-full h-40 object-cover rounded-xl mb-6 shadow-sm border border-masala/10">' },
    
    { search: '<div class="w-full h-24 bg-terracotta/10 rounded-xl mb-6 flex items-center justify-center text-4xl">🍕</div>', replace: '<img src="gallery/menu_pizza_1776338420506.png" alt="Pizza & Pasta" class="w-full h-40 object-cover rounded-xl mb-6 shadow-sm border border-masala/10">' },

    { search: '<div class="w-full h-24 bg-terracotta/10 rounded-xl mb-6 flex items-center justify-center text-4xl">🍚</div>', replace: '<img src="gallery/Delicious Parathas with Raita.png" alt="Rice Special" class="w-full h-40 object-cover rounded-xl mb-6 shadow-sm border border-masala/10">' },

    { search: '<div class="w-full h-24 bg-terracotta/10 rounded-xl mb-6 flex items-center justify-center text-4xl">🍜</div>', replace: '<img src="gallery/menu_noodles_1776338435672.png" alt="Noodles" class="w-full h-40 object-cover rounded-xl mb-6 shadow-sm border border-masala/10">' },

    { search: '<div class="w-full h-24 bg-terracotta/10 rounded-xl mb-6 flex items-center justify-center text-4xl">🍲</div>', replace: '<img src="gallery/Lem_Chaai_Maggie.png" alt="Maggie" class="w-full h-40 object-cover rounded-xl mb-6 shadow-sm border border-masala/10">' }
];

replacements.forEach(r => {
    html = html.replace(r.search, r.replace);
});

fs.writeFileSync('d:/lem_chai/menu.html', html, 'utf8');
console.log('Replaced emoji placeholders with real images');
