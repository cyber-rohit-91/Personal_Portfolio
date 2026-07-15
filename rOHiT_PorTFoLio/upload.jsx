git remote add origin https://github.com/cyber-rohit-91/Personal_Portfolio.git
git branch -M main
git push -u origin main



Push your project to GitHub first.

Personal-portfolio-main/
├── client/
└── server/


https://render.com/

Sign in with GitHub.
Click New +.
Select Web Service.
Choose your GitHub repository.
Set the Root Directory to:

server


npm install

npm start


MONGODB_URI=your_mongodb_connection_string
MONGODB_URI=mongodb+srv://username:password@cluster0.nhgqbmz.mongodb.net/portfolio?retryWrites=true&w=majority
ADMIN_API_KEY=your_secret_key
NODE_ENV=production
https://portfolio-api.onrender.com




Deploy the Frontend to Vercel

https://vercel.com/

Import the same GitHub repository.

Set:

Root Directory

client


Vite

npm run build


dist



Add Frontend Environment Variable

VITE_TRACKER_API_URL=https://portfolio-api.onrender.com/api/v1

VITE_TRACKER_API_URL=http://localhost:5000/api/v1



Update FRONTEND_URL in Render

https://portfolio.vercel.app
FRONTEND_URL=https://portfolio.vercel.app




Final Environment Variables
On Render (Backend)


MONGODB_URI=mongodb+srv://username:password@cluster0.nhgqbmz.mongodb.net/portfolio?retryWrites=true&w=majority

ADMIN_API_KEY=your_secret_key

FRONTEND_URL=https://your-project.vercel.app

NODE_ENV=production




On Vercel (Frontend)

VITE_TRACKER_API_URL=https://your-backend.onrender.com/api/v1


