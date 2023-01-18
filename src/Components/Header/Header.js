import { useState, React } from 'react'
import './Header.css'

export const Header = () => {

    let [menuVisible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(() => {
            return menuVisible === true ? false : true;
        });
    }

    return (
        <header>
            <div className="main-nav">
                <h1 className="logo">Luisa's</h1>
                <HamburgerIcon onClick={handleClick}/>
            </div>
                {menuVisible === true ? <NavMenu /> : null}
                
        </header>
    )
}

//presentation function HamburgerIcon
const HamburgerIcon = props => {
    return (
        <button className="hamburger-button hamburger-icon" onClick={props.onClick}>
            <div></div>
            <div></div>
            <div></div>
        </button>
        )
}

const NavMenu = () => {
    return (
        <div className="main-navigation">
            <ul id="menu-list">
                <li className="nav-home nav-item">home</li>
                <li className="nav-menu nav-item">menu</li>
                <li className="nav-about nav-item">about</li>
                <li className="nav-location nav-item">visit us</li>
            </ul>
        </div>
    )
};