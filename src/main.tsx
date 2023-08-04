import React from 'react'
import App from './App.tsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


const router = createBrowserRouter([
  {
    path: '/',
    element: 
          <App />
  },
]);

let container: HTMLElement | null = null;

document.addEventListener('DOMContentLoaded', function () {
    container = document.getElementById('root') as HTMLElement;
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
});
