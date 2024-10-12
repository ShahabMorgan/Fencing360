import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import {Outlet, Link} from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Register from "./pages/Register/Register";
import News from "./pages/News/News";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="flex flex-col h-dvh">
      <Router>
        <Header></Header>
        <Outlet />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
