# Smart Home & Ceremony Decoration Booking System

## 📌 Project Overview
**StyleDecor** is a modern, full-stack appointment and service booking platform designed for local home and ceremony decoration companies.  
It allows users to explore decoration services, book consultations or on-site decoration services, make secure payments, and track project progress in real time.

The system also provides powerful dashboards for **Admin**, **Decorator**, and **Users** with role-based access control and analytics.

---

## 🎯 Purpose of the Project
Local decoration businesses often struggle with:
- Walk-in crowd and long waiting times
- No online booking system
- Difficulty managing multiple decorators and services
- Poor tracking of on-site service status

**StyleDecor solves these problems by providing:**
- Smart online booking & scheduling
- Decorator availability & assignment system
- Secure Stripe payment integration
- Real-time project status tracking
- Business analytics and revenue monitoring

---

## 🌐 Live Website
[Visit website (click me)](https://home-decoration-ph.web.app/))

---

## 🚀 Key Features

### 🔐 Authentication & Security
- Email & Password login (Firebase)
- Social Login (Google)
- JWT-based authentication
- Role-based protected routes (Admin / Decorator / User)
- Secure environment variables using `.env`

---

### 🏠 Home Page
- Animated Hero Section (Framer Motion)
- Dynamic Services Section (Loaded from Server)
- Top Decorators Section with ratings & specialties
- Service Coverage Map (React Leaflet)
- Responsive & modern UI (Tailwind + DaisyUI)

---

### 🛠 Services & Booking
- Services displayed in card grid format
- Search services by name
- Filter services by category and budget range
- Service details page (open route)
- Booking modal for logged-in users
- Date & location-based booking
- Booking stored in database

---

### 📊 Dashboard System

#### 👤 User Dashboard
- My Profile
- My Bookings
- Cancel or update booking
- Payment history
- Stripe payment receipt

#### 🛡 Admin Dashboard
- Manage Decorators (CRUD)
- Manage Services & Packages (CRUD)
- Assign decorators after payment
- Approve / Disable decorators
- Revenue monitoring
- Analytics charts:
  - Service demand histogram
  - Booking statistics

#### 🎨 Decorator Dashboard
- View assigned projects
- Today’s schedule
- Update project status step-by-step
- Earnings summary
- Payment history check

---

### 🔄 On-Site Service Status Flow
1. Assigned  
2. Planning Phase  
3. Materials Prepared  
4. On the Way to Venue  
5. Setup in Progress  
6. Completed  

---

### 💳 Payment System
- Stripe payment gateway
- Secure transaction handling
- Payment data stored on server
- Receipt visible in user dashboard

---

### 🔥 Additional Functionalities
- Global loading spinner
- Global error page
- Toast notifications (success / error)
- Mobile responsive layout
- Pagination (single page)
- Sorting bookings by date & status
- JWT verification in all protected routes

---

## 🧱 Layout & Pages

### Navbar
- Logo & Brand Name
- Home, Services, About, Contact
- Dashboard button (logged-in users)
- Login/Profile dropdown

### Footer
- Contact details
- Social media links
- Business hours
- Copyright

### Main Pages
- Home
- Services
- Service Details
- Booking Page
- Payment Page
- Service Coverage Map
- Login / Register
- Dashboard (Role-based)
- Error Page
- Loading Skeletons

---

## 🧪 Technology Stack

### Frontend
- React 19
- React Router v7
- Tailwind CSS + DaisyUI
- TanStack React Query
- Axios
- Firebase Authentication
- Framer Motion
- GSAP
- React Hook Form
- React Leaflet
- Recharts
- Stripe (Client)

---

## ⚙️ Installation & Setup Guide
Follow the steps below to run StyleDecor locally on your machine.

### 🧩 Prerequisites(Make sure)
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB (local or cloud – MongoDB Atlas)
- Firebase project

### 📥 Clone the Repositories
```
git clone https://github.com/anikkumarsarker3/home-decoration-client.git
```

### 📦 Installation
```
cd home-decoration-client
npm install
```


### Create a .env file in the root Folder:
```
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_sender_id
VITE_appId=your_firebase_app_id
VITE_img_key=your_image_api_key
```
### Run Project:
```
npm run dev
```

---
