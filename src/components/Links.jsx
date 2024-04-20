import React from "react";

export default function Links() {
    return (
        <section className="section--links">
            <div className="first--section">
                <div className="first--btns">
                    <button className="link--btn shadow">
                        <a href="" className="link--title">BQ Music</a>
                    </button>
                    <button className="link--btn shadow">
                        <a href="" className="link--title">My Shopping List</a>
                    </button>
                </div>
                <button className="second--btn shadow">
                        <a href="" className="link--title">Link Catcher Chrome Extension</a>
                </button>
            </div>
            <div className="second--section">
                <div className="second--btns">
                    <button className="link--btn shadow">
                        <a href="" className="link--title">My Travel Journal</a>
                    </button>
                    <button className="link--btn shadow">
                        <a href="https://my-todo-checklist.netlify.app" className="link--title">My ToDo App</a>
                    </button>
                </div>
                <button className="second--btn shadow">
                        <a href="" className="link--title">Responsive Cactus Shop</a>
                </button>
            </div>
        </section>
        
    )
}