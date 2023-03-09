import { useState, React } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

export const Header = () => {

    const [menuVisible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(() => {
            return menuVisible === true ? false : true;
        });
    }

    return (
        <header>
            <div className="main-nav">
                <NavLink to='/'><h1 className="logo">Luisa's</h1></NavLink>
                <HamburgerIcon onClick={handleClick} />
            </div>
            {menuVisible === true ? <NavMenu onClick={handleClick}/> : null}

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

const NavMenu = props => {

    const className = "nav-item";
    const navLinks = ['home', 'menu', 'visit us']; //temporarily removed about us link 09-03-23

    const formatURL = link => {
        link = link === 'home' ? '' : link
        return '/' + link.replace(' ', '-'); //formats paths as '/visit-us' from '/visit us'
    }

    // links to be shown in navigation bar
    // navLinks is looped with .map to add className and path

    return (
        <div className="main-navigation">

            <div className="TestMapNav">
                {navLinks.map(link => (
                    <NavLink
                        className={className}
                        to={formatURL(link)}
                        onClick={props.onClick} //hides the menu after link is clicked
                    >
                        {link}
                    </NavLink>
                ))}
            </div>

        </div>
    )
};