import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";

const ServicesDetails = [
    {
        title: "BRAND IDENTITY",
        description: `Nous façonnons une identité de marque unique et percutante qui captivera votre public cible.`,
    },
    {
        title: "UI-UX DESIGN",
        description: `Nous concevons des interfaces utilisateur intuitives et des expériences fluides pour garantir que chaque interaction avec votre site web soit agréable et engageante.`,
    },
    {
        title: "WEB DEVELOPMENT",
        description: `Nous utilisons les dernières technologies pour créer des sites web rapides, fiables et optimisés, offrant une expérience de navigation optimale.`,
    },
    {
        title: "GESTION PROJET WEB",
        description: `Nous assurons une planification minutieuse, une coordination transparente et une livraison réussie de votre projet web, en respectant vos objectifs et vos délais.`,
    }
]

const ServiceTow = ({className, ...restProps}: DsnGridProps) => {
    return (
        <DsnGrid className={dsnCN('dsn-services service-tow', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                        <div className="line-before mb-20"/>
                        <h4 className='title-block'>{item.title}</h4>
                        <p className='mt-15 dsn-auto'>{item.description}</p>
                    </div>
            )}

        </DsnGrid>
    );
};


export default ServiceTow