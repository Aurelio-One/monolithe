import React from 'react';

import {Container} from "react-bootstrap";
import DsnGrid from "../components/DsnGrid";

import HeaderNormalTow from "../components/header/HeaderNormalTow";
import Footer from "../components/footer/Footer";
import Map, {optionMonolitheMap} from "../components/Map/Map";
import InfoBox from "../components/contact/InfoBox";
import ContactForm from "../components/contact/ContactForm";
import NextPage from "../components/next/NextPage";
import {Helmet} from "react-helmet";


const headerContent = {
    title: 'Contact',
    description: `Ecrivez-nous !`
}

function Contact(props) {

    const center = {lat: 43.5235673, lng: 5.4462019};

    return (
        <React.Fragment>

            <Helmet>
                <title>Monolithe - Contact Us </title>
            </Helmet>

            {/*Start Header*/}
            <HeaderNormalTow description={headerContent.description}>
                {headerContent.title}
            </HeaderNormalTow>

            {/*Start Map*/}
            <Map
                googleMapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
                defaultZoom={10}
                options={optionMonolitheMap}
                height="80vh"
                defaultCenter={center}
                showMarker
            />

            {/*Start Contact Form && Info Box*/}
            <Container className="section-margin">
                <DsnGrid col={1} colTablet={1}>
                    <InfoBox className="background-section p-30"/>
                  {/*   <ContactForm/> */}
                </DsnGrid>
            </Container>

            <NextPage className="section-margin" to="/portfolio" text="Voir plus de projets">
                Portfolio
            </NextPage>
            <Footer/>


        </React.Fragment>
    );
}

export default Contact;