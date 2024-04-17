import React from "react";

export default function Header() {
    return (
        <header className="header">
            <div className="header--info shadow">
                <h1 className="name">I'm Max 👋</h1>
                <h2 className="bio">Front-end Dev</h2>
            </div>

            <div className="header--img shadow">
                <img src="./src/assets/images/Memoji_fade.svg" alt="Memoji" className="memoji" />
            </div>
        </header>
    )
}