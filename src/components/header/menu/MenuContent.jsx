import React from 'react';
import {dsnCN} from "../../../hooks/helper";

function MenuContent({className}) {
    return (
        <div className={dsnCN('container-content  d-flex flex-column justify-content-center', className)}>
            <div className="nav__info">
                <div className="nav-content">
                    <h5 className="sm-title-block mb-10">Agence</h5>
                    <p>
                        29 av. Victor Hugo <br/> 13100 Aix-en-Provence
                    </p>

                </div>
                <div className="nav-content mt-30">
                    <h5 className="sm-title-block mb-10">Contact</h5>
                    <p className="links over-hidden mb-1">
                        <a className="link-hover" href="tel:+33 618294420" data-hover-text="+33 618294420">
                            +33 618294420
                        </a>
                    </p>
                    <p className="links over-hidden">
                        <a className="link-hover" href="mailto:contact@agence-monolithe.com"
                           data-hover-text="contact@agence-monolithe.com">contact@agence-monolithe.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MenuContent;