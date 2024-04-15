import React from 'react';
import '../style.css';

function Footer() {
  return (
    <footer className="footer pt-1 mt-3" style={{ color: "white", borderTop: "1px solid white" }}>
      <div className="container-ft">
      <div className="container-fluid text-center">
        <span>&#169; Copyright 2024 KITTIYA</span>
      </div>
      </div>
    </footer>
  );
}

export default Footer;