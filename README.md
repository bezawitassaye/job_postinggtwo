# job_postinggtwo

A **full-stack Job Posting Web App** built with Next.js (frontend) and Express.js with MongoDB (backend).

Deployed on [Render](https://render.com).

---

## 🚀 Features

- User registration & login (JWT-based)
- Admin dashboard for managing jobs
- Job posting, editing, and deletion
- Job application management
- Responsive, modern UI with Tailwind CSS
- RESTful API with Express and Mongoose

---

## 📂 Project Structure

job_postinggtwo/
├── frontend/ # Next.js client
└── back-end/ # Express.js server


---

## 🖥️ Frontend (Next.js)

- Framework: Next.js
- Styling: Tailwind CSS
- Pages: Jobs listing, Job details, Admin dashboard
- Environment config: `.env.local`

### Example `.env.local`

NEXT_PUBLIC_API_BASE_URL=https://your-backend-url.onrender.com


### Scripts

npm install
npm run dev
npm run build
npm start


---

## 🗄️ Backend (Express + MongoDB)

- Node.js / Express.js
- MongoDB Atlas with Mongoose
- JWT Authentication
- RESTful API routes

### Routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/jobs`
- `POST /api/jobs`
- `GET /api/jobs/:id`
- `PUT /api/jobs/:id`
- `DELETE /api/jobs/:id`
- `GET /api/applications`
- `POST /api/applications`

### Example `.env`

PORT=5000
MONGODB_URI=mongodb+srv://your-user:your-pass@cluster.mongodb.net/dbname
JWT_SECRET=yourSecretKey


### Scripts

npm install
npm run dev
npm start


---

## ⚙️ Getting Started Locally

### 1️⃣ Clone the repo

git clone https://github.com/yourusername/job_postinggtwo.git
cd job_postinggtwo


### 2️⃣ Setup the Backend

cd back-end
npm install


Create `.env`:

PORT=5000
MONGODB_URI=your-mongo-uri
JWT_SECRET=your-secret


Start server:

npm run dev


Server runs on: **http://localhost:5000**

---

### 3️⃣ Setup the Frontend

cd ../frontend
npm install


Create `.env.local`:

NEXT_PUBLIC_API_BASE_URL=http://localhost:5000


Run:

npm run dev


Frontend runs on: **http://localhost:3000**

---

## 🌐 Deployment

- **Backend:** Render.com (Free Service)
- **Frontend:** Vercel / Render / Netlify

✅ Make sure your frontend `.env.local` points to your live backend URL:

NEXT_PUBLIC_API_BASE_URL=https://your-backend.onrender.com


---

## ❤️ Credits

Built with:

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Express](https://expressjs.com)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com)

---

## 📜 License

MIT License.
