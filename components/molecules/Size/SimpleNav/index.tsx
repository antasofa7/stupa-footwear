import React from 'react';

export default function SimpleNav() {
  return (
        <nav className="navbar sticky-top px-3 px-md-4 px-lg-5">
        <a href="index.html">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21.3199L17.9599 13" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 21.3199L17.9599 29.6399" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" />
                <path d="M33 21.3199L9.96015 21.3199" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </a>
        <h4 className="pt-2">Detail Product</h4>
        <div>
            <h1>O</h1>
        </div>
        </nav>
  );
}
