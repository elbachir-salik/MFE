import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";

const App = () => (
    <Router>
        <div className="text-3xl mx-auto max-w-6xl">
            <Header />
            <div className="my-10">
                <Routes>
                    <Route path="/product/:id" element={<PDPContent />} />
                </Routes>
            </div>
            <Footer/>
        </div>
    </Router>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)