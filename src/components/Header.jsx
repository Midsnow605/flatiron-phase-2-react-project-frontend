import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>This is my React app</h1>
            <nav>
                <ul>
                    <li><a href='about'> about us</a></li>
                    <li><a href='home'> Home </a></li>
                    {/* Add more list items as needed */}
                </ul>
            </nav>
        </div>
    );
}

export default Header;