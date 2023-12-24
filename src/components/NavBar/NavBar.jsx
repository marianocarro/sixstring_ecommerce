import "./NavBar.css";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";



const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="brand">
        <img src="/public/img/ST_logo.png" alt="logoSixStrings" />
      </Link>
            <ul> 
                
                <li><Link to="/categories/cuerdas">CUERDAS</Link></li>  
                <li><Link to="/categories/percusion">PERCUSION</Link></li>
                <li><Link to="/categories/efectos">EFECTOS</Link></li>
                <li><Link to="/categories/cuerdas">ACCESORIOS</Link></li>
          
    	    </ul>

            <ul className="cw">
               <li><Link to="">Mi Cuenta</Link></li>
               <li><CartWidget /></li> 
            </ul>
        
    </div>
  );
};

export default NavBar;