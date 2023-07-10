import React from 'react'
import FadeUpTrigger from '../../animation/FadeUpTrigger'
import ButtonDefault from '../button/button-default/ButtonDefault'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import BoxRight from '../box-right/BoxRight'
import { ParallaxImageProps } from '../parallax-image/ParallaxImage'

const heroContent = {
  title: 'Quelle est votre \nidentité visuelle ?',
  src: '/assets/img/monolithe.jpg',
  description: `Une identité visuelle solide est comme un phare dans l'obscurité, guidant vers votre marque les regards perdus dans un monde saturé d'images. Elle crée un lien immédiat, capturant l'attention et suscitant l'intérêt.`,
  icon: faAngleRight,
}

function HeroSectionTow({ ...restProps }: ParallaxImageProps) {
  return (
    <BoxRight
      {...restProps}
      src={heroContent.src}
    >
      <FadeUpTrigger>
        <h2 className='pre-line'>{heroContent.title}</h2>

        <p className='mt-30 m-w750 dsn-auto'>{heroContent.description}</p>
      </FadeUpTrigger>
    </BoxRight>
  )
}

export default HeroSectionTow
