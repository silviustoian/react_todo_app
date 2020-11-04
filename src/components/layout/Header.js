import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/" style={linkStlye}>Home</Link> | <Link to="/about" style={linkStlye}>About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStlye = {
    color: '#fff',
    textDecoration: 'none'
}
export default Header;

