import React from "react";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
            <div className="container">
                <a className="navbar-brand" href="{#}">
                <img src={"/images/logo.png"} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="{#}navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active" href="{#}">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="{#}">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="{#}">Testimonials</a></li>
                    <li className="nav-item"><a className="nav-link" href="{#}">faq</a></li>
                    <li className="nav-item"><a className="nav-link" href="{#}">portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="{#}">contact</a>
                    </li>
                </ul>
                <button type="button" className="rounded-pill btn-rounded">
                    +1 728365413
                    <span>
                    <i className="fas fa-phone-alt" />
                    </span>
                </button>
                </div>
            </div>
        </nav>

    );
};

export default Navigation;