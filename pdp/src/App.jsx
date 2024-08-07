import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

const Header =
    React.lazy(() => import("home/Header"));
import Footer from "home/Footer";


const App = () => {
    const [showHeader, setShowHeader] = useState(false);
    return (
        <div className="text-3xl mx-auto max-w-6xl">
            {showHeader && <Suspense fallback={<div>Loading</div>}>
                <Header />
            </Suspense>}
            <button className={"text-3xl p-5"}
            onClick={() => setShowHeader(true)}>Show the Header</button>
            <div className="my-10">PDP Page Content</div>
            <Footer/>
        </div>
    );
}
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)