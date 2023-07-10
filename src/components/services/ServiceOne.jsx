import React from 'react'
import './style.scss'

import DsnGrid from '../DsnGrid'
import type { DsnGridProps } from '../DsnGrid'
import { dsnCN } from '../../hooks/helper'
import LazyImg from '../LazyImg'

const ServicesDetails = [
  {
    icon: 'assets/img/services/1.png',
    title: 'BRAND IDENTITY',
    description: `Nous façonnons une identité de marque unique et percutante qui captivera votre public cible.`,
  },
  {
    icon: 'assets/img/services/2.png',
    title: 'UI-UX DESIGN',
    description: `Nous concevons des interfaces intuitives et des expériences utilisateur fluides.`,
  },
  {
    icon: 'assets/img/services/3.png',
    title: 'WEB DEVELOPMENT',
    description: `Nous utilisons les dernières technologies pour créer des sites web rapides, fiables et optimisés.`,
  },
]

const ServiceOne = ({ className, ...restProps }: DsnGridProps) => {
  return (
    <DsnGrid
      className={dsnCN('dsn-services service-one', className)}
      {...restProps}
    >
      {ServicesDetails.map((item, index) => (
        <div
          className='service-item'
          key={index}
        >
          <span className='icon mb-20'>
            <LazyImg
              src={item.icon}
              alt={item.title}
            />
          </span>
          <h4 className='title-block mb-20'>{item.title}</h4>
          <p className='mt-15 dsn-auto'>{item.description}</p>
        </div>
      ))}
    </DsnGrid>
  )
}

export default ServiceOne
