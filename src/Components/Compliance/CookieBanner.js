import React from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

export const CookieBanner = () => {
    return (
        <div>
              <CookieConsent
      debug={true}
      location="bottom"
      style={{background: '#f6f6f6', color: 'black'}}
      buttonStyle={{background: '#001b40', color: 'white'}}
      >
        We use cookies on this site, read our <Link to='/privacy-policy'>Privacy Policy</Link> for more information
        </CookieConsent>
        </div>
    )
}