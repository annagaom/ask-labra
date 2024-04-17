import React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
        return (
            <div>
                <header>
                <nav>
                    <Link to="/">Etusivu</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/upload">Upload</Link>
                </nav>
    
                </header>
                
                <main>
                        
                </main>
             <footer>
                <p>Copyright 2024</p>
                
             </footer>
            </div>
        );
    }
