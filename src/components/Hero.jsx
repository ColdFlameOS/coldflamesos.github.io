import React from "react";

const Hero = ({children}) => {
    return (
        <>
            <div className="hero">
                {children}
                <div className="hero-inner">
                    <h1>The <span className={'stylize'}><em>better</em></span> You</h1>
                </div>
            </div>
        </>
    );
}

export default Hero;