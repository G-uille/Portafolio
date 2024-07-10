import React from "react";

const BtnSocialNetwork = ({ children, link }) => {
    return (
        <a className="btn-social-network" href={ link } target="_blanck">
            {children}
        </a>

    )
};

export default BtnSocialNetwork;