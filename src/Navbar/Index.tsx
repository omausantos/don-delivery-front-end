import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="main-navbar">
      <Logo />
      <Link to="/" className="logo-text">Pizzaria Don Corleone - Desde 1970</Link>
    </nav>
  )
}

export default Navbar;