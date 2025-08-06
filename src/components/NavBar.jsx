import React from 'react';

export default function NavBar({ likedPostsCount }) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Abdallah</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item mx-3">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <span className="nav-link text-white">Liked Posts: {likedPostsCount}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
