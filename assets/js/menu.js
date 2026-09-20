const menuData = [
  {
    id: 1,
    name: "Caffe Latte Art",
    category: "coffee",
    price: 28000,
    image: "assets/images/menu/COFFEE/Latte-Art.jpeg",
    description: "Espresso lembut dipadukan dengan susu steam hangat dan seni latte yang indah.",
    available: true,
    featured: true
  },
  {
    id: 2,
    name: "Kopi Susu Hangat",
    category: "coffee",
    price: 20000,
    image: "assets/images/menu/COFFEE/Kopi-Susu-Hangat.jpeg",
    description: "Perpaduan kopi pilihan dengan krimer manis yang menghangatkan suasana.",
    available: true,
    featured: false
  },
  {
    id: 3,
    name: "Americano Hangat",
    category: "coffee",
    price: 18000,
    image: "assets/images/menu/COFFEE/Kopi-Hangat.jpeg",
    description: "Kopi hitam murni dari biji kopi pilihan untuk cita rasa autentik.",
    available: true,
    featured: false
  },
  {
    id: 4,
    name: "Es Kopi Susu Aren",
    category: "coffee",
    price: 22000,
    image: "assets/images/menu/COFFEE/Es-Kopi-Lapis-dalam.jpeg",
    description: "Es kopi susu dengan perpaduan gula aren asli yang manis legit.",
    available: true,
    featured: false
  },
  {
    id: 5,
    name: "Es Teh Jeruk Mint",
    category: "non-coffee",
    price: 18000,
    image: "assets/images/menu/NON-COFFEE/Es-Teh-Jeruk-Mint.jpeg",
    description: "Kesegaran teh dingin dipadu perasan jeruk asli dan sensasi mint.",
    available: true,
    featured: false
  },
  {
    id: 6,
    name: "Lemon Mint Squash",
    category: "non-coffee",
    price: 20000,
    image: "assets/images/menu/NON-COFFEE/Lemon-Mint.jpeg",
    description: "Minuman segar paduan sari lemon asam manis dan daun mint.",
    available: true,
    featured: false
  },
  {
    id: 7,
    name: "Matcha Latte",
    category: "non-coffee",
    price: 28000,
    image: "assets/images/menu/NON-COFFEE/Matcha-Latte.jpeg",
    description: "Teh hijau Jepang premium yang dicampur dengan susu segar creamy.",
    available: true,
    featured: true
  },
  {
    id: 8,
    name: "Iced Mocha Cokelat",
    category: "non-coffee",
    price: 30000,
    image: "assets/images/menu/NON-COFFEE/Mocha-Cokelat.jpeg",
    description: "Paduan cokelat premium dan espresso ringan yang memanjakan lidah.",
    available: true,
    featured: false
  },
  {
    id: 9,
    name: "Strawberry Delight",
    category: "non-coffee",
    price: 25000,
    image: "assets/images/menu/NON-COFFEE/Stroberi.jpeg",
    description: "Minuman manis segar dengan paduan ekstrak buah stroberi asli dan susu.",
    available: true,
    featured: true
  },
  {
    id: 10,
    name: "Grilled Cheese Sandwich",
    category: "food",
    price: 32000,
    image: "assets/images/menu/FOOD/Classic-Grilled-Cheese-Sandwich.jpeg",
    description: "Roti panggang mentega gurih dengan isian lelehan keju lumer yang nikmat.",
    available: true,
    featured: false
  },
  {
    id: 11,
    name: "Chicken Rice Bowl",
    category: "food",
    price: 38000,
    image: "assets/images/menu/FOOD/Grilled-Chicken-Rice-Bowl.jpeg",
    description: "Nasi hangat dengan ayam panggang lezat berlapis saus spesial racikan kami.",
    available: true,
    featured: true
  },
  {
    id: 12,
    name: "Butter Croissant",
    category: "food",
    price: 22000,
    image: "assets/images/menu/FOOD/Pastry.jpeg",
    description: "Croissant klasik bergaya Prancis yang buttery, renyah di luar, lembut di dalam.",
    available: true,
    featured: false
  },
  {
    id: 13,
    name: "Spaghetti Aglio e Olio",
    category: "food",
    price: 35000,
    image: "assets/images/menu/FOOD/Spaghetti-Aglio-e-Olio.jpeg",
    description: "Spaghetti kaya rasa ditumis dengan minyak zaitun, bawang putih, rempah, dan cabai.",
    available: true,
    featured: true
  },
  {
    id: 14,
    name: "Snack Platter",
    category: "snacks",
    price: 45000,
    image: "assets/images/menu/SNACK/Snack-Platter.jpeg",
    description: "Kombinasi sosis panggang, kentang goreng renyah, dan nugget ayam.",
    available: true,
    featured: false
  },
  {
    id: 15,
    name: "Combo Platter",
    category: "snacks",
    price: 55000,
    image: "assets/images/menu/SNACK/Combo-Platter.jpeg",
    description: "Porsi besar kentang goreng, onion ring, dan sayap ayam spesial untuk berbagi bersama.",
    available: true,
    featured: false
  },
  {
    id: 16,
    name: "Choco Lava Cake",
    category: "dessert",
    price: 30000,
    image: "assets/images/menu/DESSERT/Kue-Lava-Cokelat-dengan-Es-Krim-Vanilla.jpeg",
    description: "Kue cokelat lumer hangat yang disajikan dengan satu scoop es krim vanilla yang manis.",
    available: true,
    featured: true
  }
];

// Helper to format currency
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
};
