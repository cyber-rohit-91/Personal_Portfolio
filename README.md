<div align="center">

# 🚀 Rohit Kumar — Full Stack Portfolio

[![Live Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-rk--portfolio--8.netlify.app-00C7B7?style=for-the-badge)](https://rk-portfolio-8.netlify.app)
[![Frontend](https://img.shields.io/badge/Frontend-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://rk-portfolio-8.netlify.app)
[![Backend](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://personal-portfolio-9i7e.onrender.com)

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://mongodb.com)

A modern **Full Stack Portfolio** built with **React + Vite**, **Node.js**, **Express.js**, and **MongoDB Atlas** featuring real-time visitor analytics, contact management, GitHub integration, SEO optimization, and a responsive UI.

</div>

---

# ✨ Features

- 🎨 Modern responsive UI with animated 3D background
- 📊 Real-time visitor analytics
- 📈 Live GitHub statistics
- 💬 Contact form with validation & rate limiting
- 🔐 Protected Admin APIs
- 🔍 Ctrl + K global search
- 🌙 Dark Mode
- ⚡ Fast Vite build
- 📱 Fully Responsive
- 🔎 SEO Optimized
- 🤖 Open Graph & Twitter Cards
- 📄 Sitemap, Robots.txt & Manifest
- ☁️ MongoDB Atlas Database
- 🚀 Netlify + Render Deployment

---

# 📂 Project Structure

```text
Personal_Portfolio/
└── rOHiT_PorTFoLio/
    ├── Frontend/
    └── Backend/
```

---

# ⚙️ Local Installation

## Clone Repository

```bash
git clone https://github.com/cyber-rohit-91/Personal_Portfolio.git
cd Personal_Portfolio/rOHiT_PorTFoLio
```

---

## Backend Setup

```bash
cd Backend
npm install
npm run dev
```

### Backend Environment Variables

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
ADMIN_API_KEY=your_admin_key
JWT_SECRET=your_jwt_secret
```

---

## Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

### Frontend Environment Variables

```env
VITE_GITHUB_USERNAME=cyber-rohit-91
VITE_API_URL=http://localhost:5000
VITE_TRACKER_API_URL=http://localhost:5000/api/v1
```

---

# 🌐 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/contact` | Send Contact Message |
| GET | `/api/v1/contact` | Get All Messages (Admin) |
| POST | `/api/v1/visitors/track` | Track Visitor |
| POST | `/api/v1/visitors/heartbeat` | Session Heartbeat |
| GET | `/api/v1/visitors` | Visitor Analytics (Admin) |
| GET | `/api/v1/health` | Health Check |

### Admin Header

```http
X-Admin-Key: YOUR_ADMIN_API_KEY
```

---

# 🚀 Deployment

## Backend (Render)

| Setting | Value |
|----------|-------|
| Root Directory | `rOHiT_PorTFoLio/Backend` |
| Environment | Node |
| Build Command | `npm install` |
| Start Command | `node index.js` |

### Backend Environment Variables

```env
NODE_ENV=production
MONGODB_URI=your_mongodb_connection_string
FRONTEND_URL=https://rk-portfolio-8.netlify.app
ADMIN_API_KEY=your_admin_key
JWT_SECRET=your_jwt_secret
```

Backend URL

```text
https://personal-portfolio-9i7e.onrender.com
```

---

## Frontend (Netlify)

| Setting | Value |
|----------|-------|
| Base Directory | `rOHiT_PorTFoLio/Frontend` |
| Build Command | `npm run build` |
| Publish Directory | `dist` |

### Frontend Environment Variables

```env
VITE_GITHUB_USERNAME=cyber-rohit-91
VITE_API_URL=https://personal-portfolio-9i7e.onrender.com
VITE_TRACKER_API_URL=https://personal-portfolio-9i7e.onrender.com/api/v1
```

Frontend URL

```text
https://rk-portfolio-8.netlify.app
```

---

# 🛠️ Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- SWR
- OGL
- Netlify
- Render
- Git & GitHub

---

# 📬 Contact

📧 Email: **code.rohitallwork@gmail.com**

💼 LinkedIn: **https://www.linkedin.com/in/rohitkumar936**

🐙 GitHub: **https://github.com/cyber-rohit-91**

🌐 Portfolio: **https://rk-portfolio-8.netlify.app**

---

<div align="center">

### ⭐ If you like this project, don't forget to Star the repository!

**Built with ❤️ by Rohit Kumar**

</div>
