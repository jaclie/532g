import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import DetialPages from "./pages/DetialPages";
import Ranking from "./pages/Ranking";
import PersonalRanking from "./pages/PersonalRanking";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/detail",
        element: <DetialPages/>,
    },
    {
        path: "/ranking",
        element: <Ranking/>,
    },
    {
        path: "/personalRanking",
        element: <PersonalRanking/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
