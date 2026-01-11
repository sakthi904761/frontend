import axios from 'axios';

// Default to your deployed backend on Render; Vercel will override with `VITE_API_URL` env var
const API_BASE = import.meta.env.VITE_API_URL || 'https://backend-1-uhbn.onrender.com';

const api = axios.create({
  baseURL: API_BASE,
  // withCredentials can be enabled if your backend uses cookies
  // withCredentials: true,
});

export { api, API_BASE };
