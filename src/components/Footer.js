import React from "react";

export const Footer = () => {
    return (
        <div
            className="footer"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                padding: "20px",
            }}
        >
            <footer>&copy;2022, Designed and Built by David Siddle</footer>
            {/*COMMENT -  Need to give credit to Joel Olawanle, who i took inspiration from his website https://joel-new.netlify.app/.
            His page is built on Vue.js where this site was rebuilt in react and
            material ui */}
        </div>
    );
};
