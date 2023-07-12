import React from 'react'

import { Container } from 'react-bootstrap'
import FadeUpTrigger from '../animation/FadeUpTrigger'

import HeaderNormal from '../components/header/HeaderNormal'
import BoxRight from '../components/box-right/BoxRight'
import TitleSection from '../components/heading/TitleSection'
import ServiceTow from '../components/services/ServiceTow'
import Team from '../components/team/Team'
import BrandClient from '../components/brand-client/BrandClient'
import NextPageContent from '../components/next/NextPageContent'
import Footer from '../components/footer/Footer'
import TestimonialTow from '../components/testimonial/TestimonialTow'
import { Helmet } from 'react-helmet'

const headerContent = {
  title: 'SOLIDITÉ ET ÉLÉGANCE',
}

function About() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Monolithe - A propos </title>
      </Helmet>

      {/*Start Header*/}
      <HeaderNormal
        className='background-section'
        description={headerContent.description}
      >
        {headerContent.title}
      </HeaderNormal>

      {/*Start Box Right Info*/}
      <BoxRight
        className='mb-section text-center'
        src='/assets/img/pexels.jpg'
        parallaxFrom={{ scale: 1.2 }}
        parallax={{ scale: 1 }}
        overlay={4}
      >
        <FadeUpTrigger>
          <h3>
            Nous sommes <br /> Monolithe
          </h3>
          <p className='mt-30 m-w750 dsn-auto'>
            Monolithe est une agence de développement web et de design fondée
            en 2022, basée dans le sud-est de la France. <br />
            Notre nom, Monolithe, évoque les valeurs essentielles que nous
            incarnons : <em>solidité</em>, <em>sobriété</em> et <em>élégance</em>.
          </p>
        </FadeUpTrigger>
      </BoxRight>
      {/*End Box Right Info*/}

      {/*Start Service Section*/}
      <Container className='section-margin'>
        <TitleSection description='Nos services'>
          Agence de design et <br />
          développment web
        </TitleSection>
        <ServiceTow
          col={2}
          colMobile={1}
        />
      </Container>
      {/*End Service Section*/}

      {/*Start Team*/}
      {/*       <section className='section-margin background-section section-padding'>
        <Container className='dsn-right-container'>
          <TitleSection description='our team'>
            The best team ever!
          </TitleSection>
          <Team
            loop
            
          />
        </Container>
      </section> */}
      {/*End Team*/}

      {/*Start Service Section*/}
      <Container className='section-margin'>
        <TitleSection description='Leur avis'>
          Les retours de nos clients.
        </TitleSection>
        <TestimonialTow
          
          loop
        />
      </Container>
      {/*End Service Section*/}

      {/*Start Brand*/}
      <Container className='section-margin'>
        <TitleSection description='Nos clients'>
          Votre réussite, notre <br /> réputation.
        </TitleSection>
        <BrandClient
          col={3}
          colTablet={2}
          colGap={2}
          rowGap={2}
        />
      </Container>
      {/*End Brand*/}

      <NextPageContent className='section-margin' />
      <Footer />
    </React.Fragment>
  )
}

export default About
