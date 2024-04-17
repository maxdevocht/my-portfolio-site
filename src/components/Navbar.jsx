import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar shadow">
            <ul className="nav--list">
                <li className="list--item"><a href="https://www.instagram.com/maxde.v/"><i class="ri-instagram-fill"></i></a></li>
                <li className="list--item"><a href="https://github.com/maxdevocht"><i class="ri-github-fill"></i></a></li>
                <li className="list--item"><a href="#"><i class="ri-linkedin-box-fill"></i></a></li>
                <li className="list--item"><a href="mailto:maxdevocht@hotmail.com"><i class="ri-mail-fill"></i></a></li>
            </ul>
        </nav>
    )
}