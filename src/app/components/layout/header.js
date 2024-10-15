import Link from 'next/link';
import '../../styles/component/layout/header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <img src="/images/header/logo.svg" alt="The Rescue Tails Logo" />
      </div>

      <nav className="nav-links">
        <Link href="#home" passHref>
          <div>Home</div>
        </Link>
        <Link href="#about" passHref>
          <div>About</div>
        </Link>
        <Link href="#community" passHref>
          <div>Community</div>
        </Link>
        <Link href="#volunteer" passHref>
          <div>Volunteer</div>
        </Link>
        <Link href="#adopt" passHref>
          <div>Adopt</div>
        </Link>
      </nav>

      <div className="buttons-container">
        <div className="button contact">contact us</div>
        <div className="button donate">
          Donate
          <img src="/images/header/arrow-up-right.svg" alt="Arrow Icon" className="arrow-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
