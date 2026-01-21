
##Project Overview:

ShopEase is a modern full-stack e-commerce web application inspired by Flipkart.
It allows users to browse products, search & filter items, view product details, manage a shopping cart, and persist cart data using a backend API.

The project is built using React (Vite) for the frontend and ASP.NET Core Web API + PostgreSQL for the backend, following real-world e-commerce architecture and clean component-based UI design.

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


##Setup Instruction:

Frontend setup:
Clone the Repository: git clone https://github.com/sejalsaharkar23/shopease-project.git

Navigate to Project Folder: cd shopease

Install Dependencies: npm install

Start Development Server: npm run dev

Open in Browser: http://localhost:5173

Backend setup:
cd backend

cd webapplication1

dotnet ef database update

dotnet run

Swagger UI: http://localhost:5001/swagger/index.html