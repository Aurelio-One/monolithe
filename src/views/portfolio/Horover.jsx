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

const Horover = ({ data }) => {
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
        href='www.horover.com'
        overlay={data.overlay}
      ></HeaderFull>
      {/*End Header Half*/}

      {/*Start Info Project*/}
      <Container className='section-margin text-center'>
        <TitleCover>HOROVER</TitleCover>
        <TextTrigger
          duration={0.8}
          stagger={0.1}
        >
          {(ref) => (
            <h2
              className='title-section'
              ref={ref}
            >
              Horover
            </h2>
          )}
        </TextTrigger>
        <FadeUpTrigger>
          <p className='mt-20'>
            Horover a l'objectif de mettre en relation les amateurs de montres
            avec des horlogers compétents et qualifiés, en utilisant des
            critères précis. L'interface esthétiquement sombre, épurée, propre
            et professionnelle est conçue pour offrir une expérience utilisateur
            fluide et agréable.
            <br />
            <br />
            L'une des fonctionnalités principales d'Horover est la recherche
            avancée d'horlogers. L'utilisateur peut trouver un horloger en
            fonction de sa position géographique, de ses compétences
            spécifiques, des marques sur lesquelles il intervient, de ses
            agréments et bien plus encore.
            <br />
            <br />
            Horover offre également une opportunité unique aux horlogers
            qualifiés de promouvoir leurs services. Les horlogers peuvent
            s'inscrire sur la plateforme en téléchargeant leurs images, en
            écrivant une description détaillée de leurs compétences et en
            choisissant des filtres pour se démarquer par leurs spécialités,
            compétences et marques préférées.
          </p>
          <ButtonProject
            className={'mt-20'}
            href='https://www.horover.com'
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
        src='/assets/vid/Horover.mp4'
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
            src: '/assets/img/project/project4/2.webp',
            caption: `Page d'accueil`,
          },
          {
            src: '/assets/img/project/project4/3.webp',
            caption: `Page d'accueil`,
          },
          {
            src: '/assets/img/project/project4/4.webp',
            caption: 'Menu',
          },
          {
            src: '/assets/img/project/project4/5.webp',
            caption: 'Page produit',
          },
          {
            src: '/assets/img/project/project4/6.webp',
            caption: 'Panier',
          },
          {
            src: '/assets/img/project/project4/7.webp',
            caption: `Page d'accueil`,
          },
        ]}
      />
      {/*End Gallery List*/}

      {/*Start Box Info With Image*/}
      <BoxImageVertical
        src='/assets/img/project/project4/8.webp'
        className='section-margin'
      >
        <FadeUpTrigger>
          {(ref) => (
            <DsnGrid
              col={1}
              rowGap={30}
              rowGapTablet={20}
            >
              <TitleCover>HOROVER</TitleCover>
              <h2
                className='title-section border-line-left'
                ref={ref}
              >
                Il est temps de trouver un bon horloger.
              </h2>
              {/*                         <h6 ref={ref}>
                            Le e-shopping est un jeu d'enfants.
                        </h6> */}
              <p ref={ref}>
                L'esthétique sombre, épurée et professionnelle du site crée une
                atmosphère élégante qui reflète l'univers de l'horlogerie haut
                de gamme. Chaque élément visuel a été soigneusement pensé pour
                faciliter la navigation et offrir une interface conviviale. De
                la disposition intuitive des informations clés à la simplicité
                de l'interaction, ce design centré sur l'utilisateur garantit
                une expérience fluide et agréable à chaque visiteur d'Horover.
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

export default Horover
