# 🚀 Portfolio

A modern personal portfolio built with **React + Vite + Tailwind CSS** (frontend) and **Node.js + Express** (backend).

## 📁 Project Structure

```
Portofolio/
├── frontend/         # React + Vite + Tailwind CSS
│   └── src/
│       ├── components/
│       │   ├── Navbar/
│       │   ├── Hero/
│       │   ├── About/
│       │   ├── Skills/
│       │   ├── Projects/
│       │   ├── Contact/
│       │   └── Footer/
│       ├── pages/
│       ├── hooks/
│       ├── utils/
│       ├── data/
│       └── assets/
└── backend/          # Node.js + Express API
    └── src/
        ├── routes/
        ├── controllers/
        └── middleware/
```

## 🛠️ Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at: http://localhost:5173

### Backend
```bash
cd backend
# Copy and fill in your credentials:
cp .env.example .env
npm run dev
```
Runs at: http://localhost:5000

## ⚙️ Backend Environment Variables

Edit `backend/.env`:
```
PORT=5000
CLIENT_URL=http://localhost:5173
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> 💡 Use a Gmail **App Password** (not your real password). Enable 2FA, then generate one at: https://myaccount.google.com/apppasswords
