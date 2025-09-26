import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from './common/Navbar';





const Layout = () => {
    return (
        <div className="layout">
            <header className="header">
                <Navbar />
            </header>
            <nav className="navbar">
                {/* Navigation links can be added here */}
            </nav>
            <main className="main-content">
                <Outlet />
            </main>
            <footer className="footer">
                <p>&copy; 2025 Adyam Engineering S.C.</p>
            </footer>
        </div>
    );
}

export default Layout;


export class IndexLayout extends React.Component {
    render() {
        return (
            <div className="layout">
                <header className="header">
                    <Navbar/>
                </header>
                <nav className="navbar">
                    {/* Navigation links can be added here */}
                </nav>
                <main className="main-content">
                    <Outlet />
                </main>
                <footer className="footer">
                    <p>&copy; 2023 Adyam Engineering S.C.</p>
                </footer>
            </div>
        );
    }
}

