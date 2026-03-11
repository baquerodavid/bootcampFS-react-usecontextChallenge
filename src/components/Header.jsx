// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇
// Componente nuevo de la Live Review

import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <header className="header-top">
      <nav>
        <Link to="/">Home </Link>
        <Link to="/profile">Profile </Link>
        <Link to="/myjob">MyJob </Link>
      </nav>
      <Button />
    </header>
  );
};

export default Header;
