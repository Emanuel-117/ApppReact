import { NavLink } from 'react-router-dom';
import logo from './images/logo.svg';

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="CreditSmart Logo" className="logo-icon" style={{
                    width: '45px',
                    height: '45px',
                    objectFit: 'contain'
                }} />
                <h1>CreditSmart</h1>
            </div>
            <nav>
                <NavLink to="/catalogo" className={({ isActive }) => isActive ? 'active' : ''}>
                    Catálogo
                </NavLink>
                <NavLink to="/simulador" className={({ isActive }) => isActive ? 'active' : ''}>
                    Filtro
                </NavLink>
                <NavLink to="/calculadora" className={({ isActive }) => isActive ? 'active' : ''}>
                    Interes libre
                </NavLink>
                <NavLink to="/solicitar" className={({ isActive }) => isActive ? 'active' : ''}>
                    Solicitar Crédito
                </NavLink>
                <NavLink to="/admin" className={({ isActive }) => isActive ? 'active' : ''}>
                    Administracion
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
