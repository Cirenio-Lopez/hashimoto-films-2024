import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-phone">+1 (972) 343-8799</span>
        <div className="footer-copy">
          <span>© 2024 Hashimoto Films. </span>
          <span>
            Created by <Link href="https://www.cirenio.net/">Cirenio</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
