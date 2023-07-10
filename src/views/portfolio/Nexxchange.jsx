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

const Nexxchange = ({ data }) => {
  const nextData = getPortfolioItem(3)

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
        href='www.b2b.nexxchange.com'
        overlay={data.overlay}
      ></HeaderFull>
      {/*End Header Half*/}

      {/*Start Info Project*/}
      <Container className='section-margin text-center'>
        <TitleCover>Nexxchange</TitleCover>
        <TextTrigger
          duration={0.8}
          stagger={0.1}
        >
          {(ref) => (
            <h2
              className='title-section'
              ref={ref}
            >
              Nexxchange
            </h2>
          )}
        </TextTrigger>
        <FadeUpTrigger>
          <p className='mt-20'>
            Un site B2B pour un Software-as-a-Service ultracomplet de gestion de
            club de golf avec un design moderne et épuré, mettant en avant les
            fonctionnalités puissantes du logiciel. Un système de chatbot
            intelligent recueille les informations des prospects qualifiés,
            tandis qu'un formulaire de contact facilite la prise de contact.
            <br />
            <br />
            Le site offre une présentation détaillée des fonctionnalités,
            soulignant les avantages qu'elles apportent. Des visuels attrayants
            et des descriptions claires mettent en valeur les possibilités
            offertes par ce logiciel complet. <br />
            <br />
            Chaque détail a été soigneusement pensé pour fournir aux visiteurs
            une navigation facile et une compréhension claire des
            fonctionnalités.
          </p>

          <ButtonProject
            className={'mt-20'}
            href='https://www.b2b.nexxchange.com'
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
        src='/assets/vid/Nexxchange.mp4'
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
            src: '/assets/img/project/project2/1.webp',
            caption: `Page d'accueil`,
          },
          {
            src: '/assets/img/project/project2/2.webp',
            caption: `Page d'accueil`,
          },
          {
            src: '/assets/img/project/project2/3.webp',
            caption: 'Page produit',
          },
          {
            src: '/assets/img/project/project2/5.webp',
            caption: 'Page produit',
          },
          {
            src: '/assets/img/project/project2/6.webp',
            caption: 'Page détails',
          },
          {
            src: '/assets/img/project/project2/4.webp',
            caption: `Page d'accueil`,
          },
        ]}
      />
      {/*End Gallery List*/}

      {/*Start Box Info With Image*/}
      <BoxImageVertical
        src='/assets/img/project/project2/8.webp'
        className='section-margin'
      >
        <FadeUpTrigger>
          {(ref) => (
            <DsnGrid
              col={1}
              rowGap={30}
              rowGapTablet={20}
            >
              <TitleCover>Nexxchange</TitleCover>
              <h2
                className='title-section border-line-left'
                ref={ref}
              >
                La puissance logicielle.
              </h2>
              {/*                         <h6 ref={ref}>
                            Le e-shopping est un jeu d'enfants.
                        </h6> */}
              <p ref={ref}>
                Le design moderne, épuré et intuitif pour une expérience
                Business-to-Business fluide et agréable. Un système de chat pour
                récupérer les coordonnées des prospects qualifiés. Des détails,
                beaucoup de détails sur toutes les fonctionnalités de ce
                Software-as-a-Service ultra complet.
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

export default Nexxchange
