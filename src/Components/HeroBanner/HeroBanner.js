import './HeroBanner.css';
import { BookTable, OrderOnline, InternalNav } from '../Buttons/ctaButtons';

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
                            <BookTable buttonText="Book a Table" />
                            <InternalNav buttonText="View Menu" path="/menu" />
                            <OrderOnline buttonText="Order Online" />
                        </div>
                    </div>
                </div>

            </div>
        </banner>
    )
}