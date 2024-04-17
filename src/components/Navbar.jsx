import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar shadow">
            <ul className="nav--list">
                <li className="list--item"><a href="#"><i class="ri-instagram-fill"></i></a></li>
                <li className="list--item"><a href="#"><i class="ri-github-fill"></i></a></li>
                <li className="list--item"><a href="#"><i class="ri-linkedin-box-fill"></i></a></li>
                <li className="list--item"><a href="#"><i class="ri-mail-fill"></i></a></li>
            </ul>
        </nav>
    )
}