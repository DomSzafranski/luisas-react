import './MenuBanner.css';

export const MenuBanner = props => {
    return (
        <banner>
            <div className="container">
                <div className="banner">
                    <img className="img"
                        src={props.src}
                        alt={props.alt}
                    />

                    <div className="text">
                        <h2>Spring Menu 2023</h2>
                        <h3>March - May</h3>
                    </div>
                </div>

            </div>
        </banner>
    )
}