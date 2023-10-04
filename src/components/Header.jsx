import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>This is my React app</h1>
            <nav>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    {/* Add more list items as needed */}
                </ul>
            </nav>
        </div>
    );
}

export default Header;