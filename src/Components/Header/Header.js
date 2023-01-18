import { useState, React } from 'react'
import { NavLink } from 'react-router-dom';
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

    const className = "nav-item";
    const navLinks = ['home', 'menu', 'about', 'visit us'];
    // links to be shown in navigation bar
    // navLinks is looped with .map to add className and path, (replacing ' ' with '-')

    return (
        <div className="main-navigation">

            <div className="TestMapNav">
                {navLinks.map(link => (<NavLink className={className} to={('/' + link.replace(' ', '-'))}>{link}</NavLink>))}
            </div>

        </div>
    )
};