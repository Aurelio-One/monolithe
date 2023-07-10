import React from 'react'
import { getPortfolioItem } from '../../api/portfolio/PortfolioData'

import { Container } from 'react-bootstrap'
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

const Booking = ({ data }) => {
  const nextData = getPortfolioItem(1)

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
        href='www.nexxchange.com'
        overlay={data.overlay}
      ></HeaderFull>
      {/*End Header Half*/}

      {/*Start Info Project*/}
      <Container className='section-margin text-center'>
        <TitleCover>Golf Booking</TitleCover>
        <TextTrigger
          duration={0.8}
          stagger={0.1}
        >
          {(ref) => (
            <h2
              className='title-section'
              ref={ref}
            >
              Golf Booking
            </h2>
          )}
        </TextTrigger>
        <FadeUpTrigger>
          <p className='mt-20'>
            Un application permet aux utilisateurs de découvrir et de réserver
            facilement des tee times dans une variété de clubs de golf
            prestigieux à travers toute l'Europe. Grâce à une interface
            utilisateur intuitive et conviviale, les utilisateurs peuvent
            naviguer facilement entre les différentes options de réservation et
            trouver le club qui correspond le mieux à leurs préférences.
            <br />
            <br />
            Nous avons mis l'accent sur la simplicité et la praticité pour
            optimiser le processus de réservation. Les utilisateurs peuvent
            créer un compte personnel où ils peuvent gérer leurs informations,
            leurs réservations passées et à venir, ainsi que leurs préférences
            de jeu. L'application envoie également des notifications pertinentes
            pour tenir les utilisateurs informés des nouvelles offres spéciales
            et des mises à jour de réservation.
            <br />
            <br />
            Nous avons accordé une attention particulière à l'interface
            utilisateur pour offrir une une solution performante, avec un
            parcours client attrayant et une expérience utilisateur optimisée.
          </p>
          <ButtonProject
            className={'mt-20'}
            href='https://www.nexxchange.com'
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
        src='/assets/vid/Booking.mp4'
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
            src: '/assets/img/project/project5/1.webp',
            caption: `Page d'accueil`,
          },
          {
            src: '/assets/img/project/project5/2.webp',
            caption: `Liste des tee times`,
          },
          {
            src: '/assets/img/project/project5/3.webp',
            caption: 'Etape de réservation',
          },
          {
            src: '/assets/img/project/project5/4.webp',
            caption: 'Paramètres',
          },
          {
            src: '/assets/img/project/project5/5.webp',
            caption: 'Réservations',
          },
          {
            src: '/assets/img/project/project5/6.webp',
            caption: 'Page de club',
          },
        ]}
      />
      {/*End Gallery List*/}

      {/*Start Box Info With Image*/}
      <BoxImageVertical
        src='/assets/img/project/project5/7.webp'
        className='section-margin'
      >
        <FadeUpTrigger>
          {(ref) => (
            <DsnGrid
              col={1}
              rowGap={30}
              rowGapTablet={20}
            >
              <TitleCover>Golf</TitleCover>
              <h2
                className='title-section border-line-left'
                ref={ref}
              >
                Fluidité, simplicité, efficacité.
              </h2>
              {/*                         <h6 ref={ref}>
                            Le e-shopping est un jeu d'enfants.
                        </h6> */}
              <p ref={ref}>
                Une interface utilisateur simple, épurée, mettant à l'honneur
                l'identité visuelle de l'entreprise permet aux golfeurs de toute
                l'Europe, qu'ils fassent partie d'un club ou non, de réserver
                leur tee time en quelques clics.
                <br /> Jouer avec ses amis, payer sur place ou en ligne, gérer
                son compte utilisateur, son compte de la fédération de golf,
                tout cela est rendu possible grâce à cette app ultra simple et
                performante.
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

export default Booking
