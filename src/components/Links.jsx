import React from "react";

export default function Links() {
    return (
        <section className="section--links">
            <div className="first--section">
                <div className="first--btns">
                    <button className="link--btn shadow">
                        <h2 className="link--title">BQ Music</h2>
                    </button>
                    <button className="link--btn shadow">
                        <h2 className="link--title">My Shopping List</h2>
                    </button>
                </div>
                <button className="link--btn shadow">
                        <h2 className="link--title">Link Catcher Chrome Extension</h2>
                </button>
            </div>
            <div className="second--section">
                <div className="second--btns">
                    <button className="link--btn shadow">
                        <h2 className="link--title">Responsive Cactus Site</h2>
                    </button>
                    <button className="link--btn shadow">
                        <h2 className="link--title">My ToDo App</h2>
                    </button>
                </div>
                <button className="link--btn shadow">
                        <h2 className="link--title">My Travel Journal</h2>
                </button>
            </div>
        </section>
        
    )
}