# Vehicle Rental System

A full‑stack demo with MySQL, Node.js/Express and React.

## Quick start

1. Fork or create a new repo and push these files.
2. In GitHub, click **Code → Open with Codespaces** to launch your dev container.
3. In the Codespace terminal:
   ```bash
   # create & seed the database
   mysql -u root -p < database/db.sql

   # start backend
   cd backend
   npm install
   npm start

   # in a new terminal window, start frontend
   cd frontend
   npm install
   npm start
   ```
4. Visit `http://localhost:3000` in the forwarded Codespace browser preview.

## Structure

- database/ : SQL schema & sample data  
- backend/  : Express API  
- frontend/ : React app  