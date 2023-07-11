import React from 'react'
import { getPortfolioItem } from '../../api/portfolio/PortfolioData'

import { Container } from 'react-bootstrap'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import DsnGrid from '../../components/DsnGrid'
import FadeUpTrigger from '../../animation/FadeUpTrigger'
import TextTrigger from '../../animation/TextTrigger'
//--> Component

import TitleCover from '../../components/heading/title-cover/TitleCover'
import ButtonProject from '../../components/button/button-project/ButtonProject'
import BoxGallery from '../../components/box-gallery/BoxGallery'
import BoxImageVertical from '../../components/box-image-vertical/BoxImageVertical'
import NextProject from '../../components/next/NextProject'
import HeaderFull from '../../components/header/HeaderFull'
import { Helmet } from 'react-helmet'
import BgImage from '../../components/header/BgImage'

const Momes = ({ data }) => {
  const nextData = getPortfolioItem(5)

  return (
    <React.Fragment>
      <Helmet>
        <title>Monolithe - {data.title} </title>
        <meta
          name='description'
          content={data.description}
        />
      </Helmet>
      {/*Start Header Half*/}
      <HeaderFull
        heroContent={data}
        parallax={{ yPercent: 30, scale: 1.1 }}
        textButton='Voir le site'
        href='www.wearemomes.com'
        overlay={data.overlay}
      ></HeaderFull>
      {/*End Header Half*/}

      {/*Start Info Project*/}
      <Container className='section-margin text-center'>
        <TitleCover>MÔMES</TitleCover>
        <TextTrigger
          duration={0.8}
          stagger={0.1}
        >
          {(ref) => (
            <h2
              className='title-section'
              ref={ref}
            >
              Mômes
            </h2>
          )}
        </TextTrigger>
        <FadeUpTrigger>
          <p className='mt-20'>
            Plongez dans l'univers captivant de Mômes, un projet web
            exceptionnel qui célèbre la mode coréenne pour enfants. Conçu avec
            minutie et expertise, cet eshop vous transporte dans un monde coloré
            où chaque détail est pensé pour faire briller les mômes.
            <br />
            <br />À travers cette plateforme, les mômes peuvent exprimer leur
            style personnel et explorer une collection de vêtements uniques et
            durables. Chaque pièce est sélectionnée avec soin pour offrir
            confort, qualité et originalité, permettant ainsi aux mômes de vivre
            pleinement leur enfance avec style.
            <br />
            <br />
            Plongez-vous dans ce projet passionnant et découvrez l'univers
            inspirant de Mômes, où l'élégance rencontre la joie de vivre.
          </p>
          <ButtonProject
            className={'mt-20'}
            href='https://www.wearemomes.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            VISITER LE SITE
          </ButtonProject>
        </FadeUpTrigger>
      </Container>
      {/*End Info Project*/}

      {/*       <ParallaxImage
        className='section-margin'
        src='/assets/img/project/project3/3.webp'
        caption='Caption #1'
        parallax={{ scale: 1 }}
        parallaxFrom={{ scale: 1.3 }}
      /> */}
      <BgImage
        src='/assets/vid/Momes.mp4'
        video='true'
        parallax={{ scale: 1 }}
        parallaxFrom={{ scale: 1.3 }}
        height='auto'
      />

      {/*Start Gallery List*/}
      <BoxGallery
        className='section-margin'
        col={2}
        colMobile={1}
        colGap={0}
        rowGap={0}
        overlay={5}
        images={[
          {
            src: '/assets/img/project/project3/1.webp',
            caption: `Page d'accueil`,
          },
          {
            src: '/assets/img/project/project3/2.webp',
            caption: `Page d'accueil`,
          },
          {
            src: '/assets/img/project/project3/3.webp',
            caption: 'Menu',
          },
          {
            src: '/assets/img/project/project3/4.webp',
            caption: 'Page produit',
          },
          {
            src: '/assets/img/project/project3/5.webp',
            caption: 'Panier',
          },
          {
            src: '/assets/img/project/project3/6.webp',
            caption: `Page d'accueil`,
          },
        ]}
      />
      {/*End Gallery List*/}

      {/*Start Box Info With Image*/}
      <BoxImageVertical
        src='/assets/img/project/project3/7.jpg'
        className='section-margin'
      >
        <FadeUpTrigger>
          {(ref) => (
            <DsnGrid
              col={1}
              rowGap={30}
              rowGapTablet={20}
            >
              <TitleCover>MÔMES</TitleCover>
              <h2
                className='title-section border-line-left'
                ref={ref}
              >
                Le e-shopping est un jeu d'enfants.
              </h2>
              {/*                         <h6 ref={ref}>
                            Le e-shopping est un jeu d'enfants.
                        </h6> */}
              <p ref={ref}>
                Du design graphique créatif aux fonctionnalités soigneusement
                intégrées, ce projet web incarne l'essence même de la mode
                coréenne pour enfants. Les couleurs vives, les motifs ludiques
                et les coupes modernes se réunissent harmonieusement pour créer
                une expérience de shopping en ligne unique.
              </p>
              {/*                         <div className="button-box" ref={ref}>
                            <ButtonDefault text="launch" icon={faAngleRight} href="#0"/>
                        </div> */}
            </DsnGrid>
          )}
        </FadeUpTrigger>
      </BoxImageVertical>
      {/*End  Box Info With Image*/}

      <NextProject heroContent={nextData} />
    </React.Fragment>
  )
}

export default Momes
