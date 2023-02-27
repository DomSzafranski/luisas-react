import './HeroBanner.css';
import { NavLink } from 'react-router-dom';

export const HeroBanner = props => {
    return (
        <banner>
            <div className="splash-container">
                <div className="splash-banner">
                    <img className="splash-img"
                        src={props.src}
                        alt={props.alt}
                    />

                    <div className="splash-text">
                        <h2>Welcome to Luisa's</h2>
                        <h3>The home of Wood Fired, Sourdough Pizza in Radciffe</h3>
                        <div className='buttonsContainer'>
                            <a href='https://luisas.resos.com' target='blank'><button className="cta-button">Book a Table</button></a>
                            <NavLink to='./menu'><button className="cta-button">View Menu</button></NavLink>
                            <a href='https://goodeats.io/lcl' target='blank'><button className="cta-button">Order Online</button></a>
                        </div>
                    </div>
                </div>

            </div>
        </banner>
    )
}