/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import logo from '../logo.svg'
import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <nav css = {styles}>
            <div className="nav-home">
                <img src ={logo}></img>
            </div>
            <ul className = "nav-links">
                <Link to="/" className="link">
                    <li>home</li>
                </Link>
                <Link to="/about" className="link">
                    <li>about</li>
                </Link>
            </ul>
        </nav>
    )
}
const styles = css`
display: flex;
justify-content: space-between;
border-bottom: 1px solid #476a2e;
box-shadow: 0 5px 5px #777;
padding-bottom: 5px;
background-color: white;
.nav-home{
    margin : 20px 0;
    margin-left: 20px;
    transform:scale(0.61);
    cursor: pointer;
}
.nav-links{
    padding: 0;
    list-style: none;
    display: flex;
    margin-right: 70px;
    margin-top: 20px;
    .link {
        text-decoration: none;
        color: #476a2e;
    }
}
.nav-links li{
    margin: 0 20px;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 21px;
    letter-spacing: 2px;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s linear;
}
.nav-links li:hover{
    border-bottom: 1px solid #777;
}
`
export default NavBar;