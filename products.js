// Centralized Single Source of Truth for Product Data

const productsData = [
    // ==========================================
    // 1. STREET BITES
    // ==========================================
    
    // Momos
    { id: "m1", name: "Veg Momos", category: "Street Bites", subCategory: "Momos", price: "80 / 150", image: "gallery/Lem_Chaai_Steamed_Momos.png", isPopular: true },
    { id: "m2", name: "Paneer Momos", category: "Street Bites", subCategory: "Momos", price: "100 / 180", image: "gallery/products/paneer_steamed_momos_dark.png", isPopular: false },
    { id: "m3", name: "Spl. Sooji Momos", category: "Street Bites", subCategory: "Momos", price: "120 / 200", image: "gallery/products/sooji_momos_dark.png", isPopular: false },
    { id: "m4", name: "Veg Gravy Momos", category: "Street Bites", subCategory: "Momos", price: "140 / 230", image: "gallery/gravymosmos.png", isPopular: false },
    { id: "m5", name: "Paneer Gravy Momos", category: "Street Bites", subCategory: "Momos", price: "160 / 260", image: "gallery/gravymosmos.png", isPopular: true },
    { id: "m6", name: "Veg Fried Momos", category: "Street Bites", subCategory: "Momos", price: "100 / 180", image: "gallery/products/veg_fried_momos_dark.png", isPopular: false },
    { id: "m7", name: "Paneer Fried Momos", category: "Street Bites", subCategory: "Momos", price: "120 / 200", image: "gallery/Lem_Chaai_Steamed_Momos.png", isPopular: false },
    { id: "m8", name: "Veg Kurkure Momos", category: "Street Bites", subCategory: "Momos", price: "120 / 200", image: "gallery/kurkure-momos-main.jpg", isPopular: true },
    { id: "m9", name: "Paneer Kurkure Momos", category: "Street Bites", subCategory: "Momos", price: "140 / 220", image: "gallery/kurkure-momos-main.jpg", isPopular: false },

    // Rolls
    { id: "r1", name: "Veg Spring Roll", category: "Street Bites", subCategory: "Rolls", price: "120", image: "gallery/rolls_snack.png", isPopular: true },
    { id: "r2", name: "Veg Kurkure Roll", category: "Street Bites", subCategory: "Rolls", price: "150", image: "gallery/rolls_snack.png", isPopular: false },

    // Fries & Snacks
    { id: "f1", name: "French Fries", category: "Street Bites", subCategory: "Fries", price: "70 / 150", image: "gallery/products/fries_dark.png", isPopular: true },
    { id: "f2", name: "Peri Peri Fries", category: "Street Bites", subCategory: "Fries", price: "90 / 170", image: "gallery/products/fries_dark.png", isPopular: false },
    { id: "f3", name: "Chilli Potato", category: "Street Bites", subCategory: "Fries", price: "70 / 150", image: "gallery/products/fries_dark.png", isPopular: true },
    { id: "f4", name: "Honey Chilli Potato", category: "Street Bites", subCategory: "Fries", price: "90 / 170", image: "gallery/products/fries_dark.png", isPopular: false },

    // Fast Food / Street Snacks
    { id: "vp1", name: "Vada Pav (2pcs)", category: "Street Bites", subCategory: "Snacks", price: "99.00", image: "gallery/vada_pav_chai_dark_1776840366304.png", isPopular: true },
    { id: "lc1", name: "Litti Chokha (2pcs)", category: "Street Bites", subCategory: "Snacks", price: "99.00", image: "gallery/vada_pav_chai_dark_1776840366304.png", isPopular: false },

    // ==========================================
    // 2. MAIN MEALS
    // ==========================================

    // Starters (Moved to Main Meals as requested)
    { id: "st1", name: "Veg Manchurian", category: "Main Meals", subCategory: "Starters", price: "159.00", image: "gallery/products/veg_manchurian_dark.png", isPopular: true },
    { id: "st2", name: "Chilly Paneer", category: "Main Meals", subCategory: "Starters", price: "179.00", image: "gallery/products/chilli_paneer_dark.png", isPopular: true },
    { id: "st3", name: "Veg Poha", category: "Main Meals", subCategory: "Starters", price: "90 / 160", image: "gallery/products/veg_poha_dark.png", isPopular: false },
    { id: "st4", name: "Mastani Soya Chaap", category: "Main Meals", subCategory: "Starters", price: "129.00", image: "gallery/products/veg_manchurian_dark.png", isPopular: false },
    { id: "st5", name: "Crispy Corn", category: "Main Meals", subCategory: "Starters", price: "89.00", image: "gallery/products/fries_dark.png", isPopular: true },
    { id: "st6", name: "Baby Corn", category: "Main Meals", subCategory: "Starters", price: "99.00", image: "gallery/products/fries_dark.png", isPopular: false },
    { id: "st7", name: "Chilly Mashroom", category: "Main Meals", subCategory: "Starters", price: "179.00", image: "gallery/products/chilli_paneer_dark.png", isPopular: false },

    // Burger
    { id: "b1", name: "Veg Burger", category: "Main Meals", subCategory: "Burger", price: "80", image: "gallery/menu_burger_1776338384163.png", isPopular: true },
    { id: "b2", name: "Paneer / Cheese Burger", category: "Main Meals", subCategory: "Burger", price: "100", image: "gallery/menu_burger_1776338384163.png", isPopular: false },
    { id: "b3", name: "Paneer & Cheese Burger", category: "Main Meals", subCategory: "Burger", price: "130", image: "gallery/menu_burger_1776338384163.png", isPopular: false },
    { id: "b4", name: "Classic Veg Burger", category: "Main Meals", subCategory: "Burger", price: "65", image: "gallery/menu_burger_1776338384163.png", isPopular: false },
    { id: "b5", name: "Cheese Burger", category: "Main Meals", subCategory: "Burger", price: "85", image: "gallery/menu_burger_1776338384163.png", isPopular: false },

    // Sandwich
    { id: "sw1", name: "Veg Sandwich", category: "Main Meals", subCategory: "Sandwich", price: "90", image: "gallery/street_sandwiches.png", isPopular: true },
    { id: "sw2", name: "Cheese / Paneer Sandwich", category: "Main Meals", subCategory: "Sandwich", price: "120", image: "gallery/street_sandwiches.png", isPopular: false },
    { id: "sw3", name: "Cheese & Paneer Sandwich", category: "Main Meals", subCategory: "Sandwich", price: "130", image: "gallery/street_sandwiches.png", isPopular: false },

    // Pizza
    { id: "pz1", name: "Veg Classic Pizza", category: "Main Meals", subCategory: "Pizza", price: "130", image: "gallery/menu_pizza_1776338420506.png", isPopular: false },
    { id: "pz2", name: "Sweet Corn Pizza", category: "Main Meals", subCategory: "Pizza", price: "140", image: "gallery/menu_pizza_1776338420506.png", isPopular: false },
    { id: "pz3", name: "Margherita Pizza", category: "Main Meals", subCategory: "Pizza", price: "150", image: "gallery/menu_pizza_1776338420506.png", isPopular: true },
    { id: "pz4", name: "Paneer Cheese Pizza", category: "Main Meals", subCategory: "Pizza", price: "160", image: "gallery/menu_pizza_1776338420506.png", isPopular: false },
    { id: "pz5", name: "Veg Supreme Pizza", category: "Main Meals", subCategory: "Pizza", price: "220", image: "gallery/menu_pizza_1776338420506.png", isPopular: true },

    // Pasta
    { id: "ps1", name: "Red Sauce Pasta", category: "Main Meals", subCategory: "Pasta", price: "140 / 230", image: "gallery/menu_pasta_1776338403741.png", isPopular: true },
    { id: "ps2", name: "White Sauce Pasta", category: "Main Meals", subCategory: "Pasta", price: "160 / 260", image: "gallery/menu_pasta_1776338403741.png", isPopular: true },
    { id: "ps3", name: "Mix Sauce Pasta", category: "Main Meals", subCategory: "Pasta", price: "170 / 280", image: "gallery/menu_pasta_1776338403741.png", isPopular: false },

    // Rice
    { id: "ri1", name: "Veg Fried Rice", category: "Main Meals", subCategory: "Rice", price: "100 / 180", image: "gallery/products/fried_rice_dark.png", isPopular: true },
    { id: "ri2", name: "Chilly Garlic Fried Rice", category: "Main Meals", subCategory: "Rice", price: "120 / 200", image: "gallery/products/fried_rice_dark.png", isPopular: false },
    { id: "ri3", name: "Paneer Fried Rice", category: "Main Meals", subCategory: "Rice", price: "130 / 220", image: "gallery/products/fried_rice_dark.png", isPopular: false },
    { id: "ri4", name: "Hakka Fried Rice", category: "Main Meals", subCategory: "Rice", price: "130 / 220", image: "gallery/products/fried_rice_dark.png", isPopular: true },
    { id: "ri5", name: "Singapuri Fried Rice", category: "Main Meals", subCategory: "Rice", price: "160 / 240", image: "gallery/products/fried_rice_dark.png", isPopular: false },

    // Noodles
    { id: "n1", name: "Veg Noodles", category: "Main Meals", subCategory: "Noodles", price: "100 / 150", image: "gallery/menu_noodles_1776338435672.png", isPopular: true },
    { id: "n2", name: "Garlic Noodles", category: "Main Meals", subCategory: "Noodles", price: "120 / 200", image: "gallery/menu_noodles_1776338435672.png", isPopular: false },
    { id: "n3", name: "Paneer Noodles", category: "Main Meals", subCategory: "Noodles", price: "140 / 220", image: "gallery/menu_noodles_1776338435672.png", isPopular: false },
    { id: "n4", name: "Hakka Noodles", category: "Main Meals", subCategory: "Noodles", price: "140 / 220", image: "gallery/menu_noodles_1776338435672.png", isPopular: true },
    { id: "n5", name: "Singapuri Noodles", category: "Main Meals", subCategory: "Noodles", price: "160 / 240", image: "gallery/menu_noodles_1776338435672.png", isPopular: false },
    { id: "n6", name: "Chilli Garlic Noodles", category: "Main Meals", subCategory: "Noodles", price: "130", image: "gallery/menu_noodles_1776338435672.png", isPopular: false },

    // Maggi
    { id: "mg1", name: "Plain Maggie", category: "Main Meals", subCategory: "Maggi", price: "70", image: "gallery/Lem_Chaai_Maggie.png", isPopular: true },
    { id: "mg2", name: "Veg Masala Maggie", category: "Main Meals", subCategory: "Maggi", price: "90", image: "gallery/Lem_Chaai_Maggie.png", isPopular: false },
    { id: "mg3", name: "Veg Butter Maggie", category: "Main Meals", subCategory: "Maggi", price: "100", image: "gallery/Lem_Chaai_Maggie.png", isPopular: false },
    { id: "mg4", name: "Paneer Masala Maggie", category: "Main Meals", subCategory: "Maggi", price: "120", image: "gallery/Lem_Chaai_Maggie.png", isPopular: false },
    { id: "mg5", name: "Masala Maggi", category: "Main Meals", subCategory: "Maggi", price: "60", image: "gallery/Lem_Chaai_Maggie.png", isPopular: true },
    { id: "mg6", name: "Cheese Corn Maggi", category: "Main Meals", subCategory: "Maggi", price: "90", image: "gallery/Lem_Chaai_Maggie.png", isPopular: false },

    // ==========================================
    // 3. BEVERAGES & DESSERTS
    // ==========================================

    // Tea
    { id: "bv1", name: "Masala Chai", category: "Beverages & Desserts", subCategory: "Tea", price: "20", image: "gallery/lemon_masala_chai.png", isPopular: true },
    
    // Coffee
    { id: "bv2", name: "Cold Coffee", category: "Beverages & Desserts", subCategory: "Coffee", price: "89.00", image: "gallery/summer_coolers.png", isPopular: true },
    { id: "bv3", name: "Black Coffee", category: "Beverages & Desserts", subCategory: "Coffee", price: "49.00", image: "gallery/summer_coolers.png", isPopular: false },
    { id: "bv4", name: "Hot Coffee", category: "Beverages & Desserts", subCategory: "Coffee", price: "59.00", image: "gallery/summer_coolers.png", isPopular: true },
    { id: "bv5", name: "Classic Cold Coffee", category: "Beverages & Desserts", subCategory: "Coffee", price: "129.00", image: "gallery/summer_coolers.png", isPopular: false },
    { id: "bv6", name: "Cappuccino", category: "Beverages & Desserts", subCategory: "Coffee", price: "129.00", image: "gallery/summer_coolers.png", isPopular: false },
    { id: "bv7", name: "Latte", category: "Beverages & Desserts", subCategory: "Coffee", price: "139.00", image: "gallery/summer_coolers.png", isPopular: false },

    // Coolers
    { id: "bv8", name: "Lime & Mint Mojito", category: "Beverages & Desserts", subCategory: "Coolers", price: "89.00", image: "gallery/summer_coolers.png", isPopular: true },
    { id: "bv9", name: "Watermelon Mojito", category: "Beverages & Desserts", subCategory: "Coolers", price: "89.00", image: "gallery/summer_coolers.png", isPopular: false },
    { id: "bv10", name: "Blueberry Mojito", category: "Beverages & Desserts", subCategory: "Coolers", price: "89.00", image: "gallery/summer_coolers.png", isPopular: false },
    { id: "bv11", name: "Classic Lemonade", category: "Beverages & Desserts", subCategory: "Coolers", price: "99.00", image: "gallery/summer_coolers.png", isPopular: false },
    { id: "bv12", name: "Green Apple Mojito", category: "Beverages & Desserts", subCategory: "Coolers", price: "129.00", image: "gallery/summer_coolers.png", isPopular: false },

    // Milkshakes
    { id: "bv13", name: "Vanilla Shake", category: "Beverages & Desserts", subCategory: "Shakes", price: "89.00", image: "gallery/summer_coolers.png", isPopular: false },
    { id: "bv14", name: "Strawberry Shake", category: "Beverages & Desserts", subCategory: "Shakes", price: "89.00", image: "gallery/summer_coolers.png", isPopular: false },
    { id: "bv15", name: "Chocolate Shake", category: "Beverages & Desserts", subCategory: "Shakes", price: "89.00", image: "gallery/summer_coolers.png", isPopular: true },
    { id: "bv16", name: "Butter Scotch Shake", category: "Beverages & Desserts", subCategory: "Shakes", price: "99.00", image: "gallery/summer_coolers.png", isPopular: false },
    { id: "bv17", name: "Mix Berry Shake", category: "Beverages & Desserts", subCategory: "Shakes", price: "149.00", image: "gallery/summer_coolers.png", isPopular: false },
    { id: "bv18", name: "Choco Brownie", category: "Beverages & Desserts", subCategory: "Shakes", price: "149.00", image: "gallery/summer_coolers.png", isPopular: true },

    // Desserts
    { id: "ds1", name: "Vanilla Ice Cream", category: "Beverages & Desserts", subCategory: "Desserts", price: "49.00", image: "gallery/sweet_moments_cake_1776841936961.png", isPopular: false },
    { id: "ds2", name: "Strawberry Ice Cream", category: "Beverages & Desserts", subCategory: "Desserts", price: "49.00", image: "gallery/sweet_moments_cake_1776841936961.png", isPopular: false },
    { id: "ds3", name: "Butter Scotch Ice Cream", category: "Beverages & Desserts", subCategory: "Desserts", price: "59.00", image: "gallery/sweet_moments_cake_1776841936961.png", isPopular: false },

    // Cold Drinks
    { id: "cd1", name: "Coke (Glass)", category: "Beverages & Desserts", subCategory: "Cold Drinks", price: "39.00", image: "gallery/summer_coolers.png", isPopular: true },
    { id: "cd2", name: "Sprite (Glass)", category: "Beverages & Desserts", subCategory: "Cold Drinks", price: "39.00", image: "gallery/summer_coolers.png", isPopular: false },
    { id: "cd3", name: "Fanta (Glass)", category: "Beverages & Desserts", subCategory: "Cold Drinks", price: "39.00", image: "gallery/summer_coolers.png", isPopular: false },
    { id: "cd4", name: "Thumbs Up (Glass)", category: "Beverages & Desserts", subCategory: "Cold Drinks", price: "39.00", image: "gallery/summer_coolers.png", isPopular: false },
    { id: "cd5", name: "Water Bottle", category: "Beverages & Desserts", subCategory: "Cold Drinks", price: "MRP", image: "gallery/summer_coolers.png", isPopular: false }
];

// Fallback global binding for vanilla environments
if (typeof window !== 'undefined') {
    window.productsData = productsData;
}
