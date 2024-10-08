import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header/>
    <div className="my-10">
        <HomeContent />
    </div>
    <Footer/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)