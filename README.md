
##Project Overview:

ShopEase is a modern e-commerce web application inspired by Flipkart.
It allows users to browse products across multiple categories, search and sort products, view product details, manage a shopping cart, and securely persist cart data using localStorage.
The project is built using React + Vite, focusing on clean UI, reusable components, and real-world e-commerce features.

##Features included:

1. Display product list with image, price & category
2. Filter products by category
3. Search products by name
4. View product details (modal or separate page)
5. Add product to cart
6. Increase / decrease product quantity
7. Remove product from cart
8. Display cart item count in header
9. Calculate subtotal, tax, discount & final total
10. Apply coupon code (static rules)
11. Persist cart and coupon state using localStorage
12. Sort products by price (low–high / high–low)
13. Out-of-stock UI handling
14. Quantity limit per product
15. Clear cart option


##Folder Structure:

ShopEase/
│
├── node_modules/
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── phones/
│   │       ├── electronics/
│   │       ├── fashion/
│   │       ├── furniture/
│   │       ├── makeup/
│   │       └── grocery/
│
│   ├── components/
│   │   ├── Banners.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartSummary.jsx
│   │   ├── CouponInput.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LoginModal.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductFilter.jsx
│   │   ├── ProductList.jsx
│   │   ├── SearchBar.jsx
│   │   └── SortDropdown.jsx
│
│   ├── data/
│   │   ├── banners.js
│   │   └── products.js
│
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Cart.jsx
│   │   └── ProductDetail.jsx
│
│   ├── utils/
│   │   └── priceCalculation.js
│
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

##Setup Instruction:

Clone the Repository: git clone https://github.com/sejalsaharkar23/shopease-ecommerce-react.git

Navigate to Project Folder: cd shopease

Install Dependencies: npm install

Start Development Server: npm run dev

Open in Browser: http://localhost:5173
