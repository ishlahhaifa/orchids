import React from "react";
import "./app.css";
import Sidebar from './Components/Sidebar Section/Sidebar.jsx';
import Body from './Components/Body Section/Body.jsx';

function App() {
    return (
        <div className="container">
            <Sidebar />
            <Body />
        </div>
    );
}

export default App;