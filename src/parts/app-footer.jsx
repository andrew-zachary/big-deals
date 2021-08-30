import React from "react";

const AppFooter = () => {
    return <section id="app-footer">
        <div id="app-footer_container" className="bd-max-width-1200 p-3">
            <ul className="list-unstyled d-flex justify-content-end align-items-center">
                <li>
                    <a className="bd-circle-btn bd-primary-btn d-inline-block" href="#"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a className="bd-circle-btn bd-primary-btn d-inline-block" href="#"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li>
                    <a className="bd-circle-btn bd-primary-btn d-inline-block" href="#"><i className="fab fa-instagram"></i></a>
                </li>
            </ul>
        </div>
    </section>
};

export default AppFooter;