import React from 'react';
import './style.scss'
import {dsnCN} from "../../hooks/helper";

function InfoBox({className}) {
    return (

        <div className={dsnCN('box-info-contact', className)}>
            <h3>Vous lancez votre projet ?</h3>
            <h5 className="mt-30">Contactez-nous.</h5>
            <p className="mt-10">
               Nous nous ferons un plaisir d'étudier votre projet et de vous proposer les solutions les plus adaptées.
            </p>

            <ul className="mt-30">
                <li>
                    <span className="mr-10">Téléhone</span>
                    <a href="tel:+33 618294420" target="_blank" rel="noreferrer">+33 618294420</a>
                </li>
                <li>
                    <span className="mr-10">Whatsapp</span>
                    <a href="http://wa.me/+33 618294420" target="_blank" rel="noreferrer">+33 618294420</a>
                </li>
                <li>
                    <span className="mr-10">Email</span>
                    <a href="mailto:contact@agence-monolithe.com" target="_blank" rel="noreferrer">contact@agence-monolithe.com</a>
                </li>
                <li>
                    <span className="mr-10">Adresse</span>
                    <a href="#0" target="_blank" rel="noreferrer">29 av. Victor Hugo <br />13100 Aix-en-Provence</a>
                </li>
            </ul>
        </div>

    );
}

export default InfoBox;