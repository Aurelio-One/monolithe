import React from 'react'

import { Container } from 'react-bootstrap'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from 'react-helmet'

import SliderPortfolio from '../../components/slider-portfolio/SliderPortfolio'
import HeroSection from '../../components/hero-section/HeroSection'
import ServiceOne from '../../components/services/ServiceOne'
import TitleSection from '../../components/heading/TitleSection'
import FadeUpTrigger from '../../animation/FadeUpTrigger'
import ButtonDefault from '../../components/button/button-default/ButtonDefault'
import PortfolioSwiper from '../../components/portfolio/PortfolioSwiper'
import BoxImageVertical from '../../components/box-image-vertical/BoxImageVertical'
import DsnGrid from '../../components/DsnGrid'
import TitleCover from '../../components/heading/title-cover/TitleCover'
import Testimonial from '../../components/testimonial/Testimonial'
import BlogSwiper from '../../components/blog/BlogSwiper'
import BrandClient from '../../components/brand-client/BrandClient'
import NextPageContent from '../../components/next/NextPageContent'
import Footer from '../../components/footer/Footer'
import HeroSectionTow from '../../components/hero-section/HeroSectionTow'

const MainDemo = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Monolithe - Portfolio </title>
      </Helmet>

      {/*Start Slider Portfolio*/}
      <SliderPortfolio
        tag='header'
        className='mb-section'
      />
      {/*End Slider Portfolio*/}

      {/*Start Hero Section*/}
      <Container className='section-margin dsn-right-container'>
        <HeroSection />
      </Container>
      {/*End Hero Section*/}

      {/*Start Service Section*/}
      <Container className='section-margin'>
        <TitleSection description='Nos services'>
        Identité visuelle et développement web
        </TitleSection>
        <ServiceOne
          className='text-center'
          col={3}
          colMobile={1}
          colGap={0}
          colGapTablet={30}
        />
      </Container>
      {/*End Service Section*/}

      {/*Start Box Right Info*/}
      <HeroSectionTow className='section-margin text-center' />
      {/*End Box Right Info*/}

      {/*Start Portfolio Swiper*/}
      <Container
        as={TitleSection}
        description='Nos projets'
      >
        Identité visuelle et développement web
      </Container>
      <PortfolioSwiper grabCursor />
      {/*End Portfolio Swiper*/}

      {/*Start Box Info With Image*/}
      <BoxImageVertical
        src='/assets/img/project/project3/8.webp'
        className='section-margin'
        overlay={4}
      >
        <TitleCover>Monolithe</TitleCover>
        <FadeUpTrigger>
          {(ref) => (
            <DsnGrid
              col={1}
              rowGap={30}
              rowGapTablet={20}
            >
              <h2
                className='title-section border-line-left'
                ref={ref}
              >
                Mômes
              </h2>
              <h6 ref={ref}>
                L'univers captivant de Mômes, un projet web exceptionnel qui
                célèbre la mode coréenne pour enfants.
              </h6>
              <p ref={ref}>
                Conçu avec minutie et expertise, cet eshop vous transporte dans
                un monde coloré où chaque détail est pensé pour faire briller
                les mômes. Du design graphique créatif aux fonctionnalités
                soigneusement intégrées, ce projet web incarne l'essence même de
                la mode coréenne pour enfants. Les couleurs vives, les motifs
                ludiques et les coupes modernes se réunissent harmonieusement
                pour créer une expérience de shopping en ligne unique.
              </p>
              <div
                className='button-box'
                ref={ref}
              >
                <ButtonDefault
                  text='Voir plus'
                  icon={faAngleRight}
                  href='#0'
                />
              </div>
            </DsnGrid>
          )}
        </FadeUpTrigger>
      </BoxImageVertical>
      {/*End  Box Info With Image*/}

      {/*Start Testimonial*/}
      <Container className='section-margin'>
        <Testimonial
          autoHeight
          loop
          grabCursor
          title='Les retours de nos clients.'
        />
      </Container>
      {/*End Testimonial*/}

      {/*Start Blog*/}
      {/* <Container className="section-margin dsn-right-container">
                <TitleSection description="Latest News">
                    Latest & Greatest Post
                </TitleSection>
                <BlogSwiper grabCursor loop autoHeight/>
            </Container> */}
      {/*End Blog*/}

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

export default MainDemo
