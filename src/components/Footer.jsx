import React from "react";

const Footer = () => {
  return (
    <footer className="footer-page d-flex align-items-center flex-column justify-content-center p-2 fs-6">
      <div>
        <a href="https://www.linkedin.com/in/semihtolga">
          <i className="fab fa-linkedin me-3" />
        </a>
        <a href="https://github.com/semihtolga">
          <i className="fa-brands fa-github me-3"></i>
        </a>
      </div>
      <article className="article" >Coded by Semih TOLGA</article>
    </footer>
  );
};

export default Footer;