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

const Mypierre = ({ data }) => {
  const nextData = getPortfolioItem(2)

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
        href='www.mypierre.at'
        overlay={data.overlay}
      ></HeaderFull>
      {/*End Header Half*/}

      {/*Start Info Project*/}
      <Container className='section-margin text-center'>
        <TitleCover>MYPIERRE</TitleCover>
        <TextTrigger
          duration={0.8}
          stagger={0.1}
        >
          {(ref) => (
            <h2
              className='title-section'
              ref={ref}
            >
              Mypierre
            </h2>
          )}
        </TextTrigger>
        <FadeUpTrigger>
          <p className='mt-20'>
            Bienvenue dans l'univers artisanal de MyPierre, un site web qui met
            en lumière l'expertise d'un artisan du cuir basé à Kitzbühel. Avec
            une passion inégalée pour le cuir de haute qualité, Pierre crée à la
            main des articles exceptionnels tels que des sacs, des ceintures,
            des vestes et des portefeuilles. Chaque pièce est conçue avec soin
            et minutie, reflétant le savoir-faire traditionnel associé à une
            esthétique moderne.
            <br />
            <br />
            Le site www.mypierre.at est une vitrine numérique qui présente le
            talent artistique et la qualité exceptionnelle des produits en cuir
            français utilisés par MyPierre. Dès votre arrivée sur le site, vous
            serez immédiatement captivé par la beauté des créations exposées.
            Les images de haute qualité mettent en valeur les détails raffinés
            de chaque article, tandis que les descriptions mettent en évidence
            les matériaux utilisés, les techniques de fabrication et l'attention
            portée aux finitions.
            <br />
            <br />
            Le site offre également des informations détaillées sur l'artisan,
            son histoire, sa passion et son engagement envers l'excellence. Vous
            découvrirez son parcours personnel, son amour pour le métier et son
            souci du détail, ce qui contribue à la qualité exceptionnelle des
            produits de Pierre.
          </p>
          <ButtonProject
            className={'mt-20'}
            href='https://www.mypierre.at'
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
        src='/assets/vid/myPierre.mp4'
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
            src: '/assets/img/project/project1/1.webp',
            caption: `Page d'accueil`,
          },
          {
            src: '/assets/img/project/project1/2.webp',
            caption: `Page d'accueil`,
          },
          {
            src: '/assets/img/project/project1/3.webp',
            caption: 'Page de contact',
          },
          {
            src: '/assets/img/project/project1/5.webp',
            caption: 'Page atelier',
          },
          {
            src: '/assets/img/project/project1/6.webp',
            caption: 'Page à propos',
          },
          {
            src: '/assets/img/project/project1/4.webp',
            caption: 'Menu mobile',
          },
        ]}
      />
      {/*End Gallery List*/}

      {/*Start Box Info With Image*/}
      <BoxImageVertical
        src='/assets/img/project/project1/7.webp'
        className='section-margin'
      >
        <FadeUpTrigger>
          {(ref) => (
            <DsnGrid
              col={1}
              rowGap={30}
              rowGapTablet={20}
            >
              <TitleCover>MYPIERRE</TitleCover>
              <h2
                className='title-section border-line-left'
                ref={ref}
              >
                La beauté de l'artisanat.
              </h2>
              {/*                         <h6 ref={ref}>
                            Le e-shopping est un jeu d'enfants.
                        </h6> */}
              <p ref={ref}>
                Le design simple, épuré et efficace de ce projet reflète
                l'essence du travail de Pierre, très attentif aux souhaits de
                ses clients, et sélectionnant ses matériaux avec soin avant de
                se plonger dans un travail minutieux, humble et efficace.
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

export default Mypierre
