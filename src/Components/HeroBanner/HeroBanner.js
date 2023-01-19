import './HeroBanner.css';

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
                        <h2>welcome to luisa's</h2>
                        <h3>an italian restaurant in radcliffe</h3>
                        <button className="cta-button">View Menu</button>
                    </div>
                </div>

            </div>
        </banner>
    )
}