import "./NavBar.css";
import CartWidget from "./CartWidget";



const NavBar = () => {
  return (
    <div id="navbar"
        ><div id="brand">
            <h1>SixStrings</h1>
        </div>
            <ul> 
                <li><a href="">HOME</a></li> 
                <li><a href="">CUERDAS</a></li>  
                <li><a href="">PERCUSION</a></li>
                <li><a href="">EFECTOS</a></li>
                <li><a href="">ACCESORIOS</a></li>
          
    	    </ul>

            <ul >
               <li><a href="">Mi Cuenta</a></li>
            </ul>
        <CartWidget />
    </div>
  );
};

export default NavBar;