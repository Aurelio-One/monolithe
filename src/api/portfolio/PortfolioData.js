import Horover from '../../views/portfolio/Horover'
import Nexxchange from '../../views/portfolio/Nexxchange'
import Booking from '../../views/portfolio/Booking'
import Momes from '../../views/portfolio/Momes'
import Mypierre from '../../views/portfolio/Mypierre'

const data = [
  {
    id: 1,
    title: 'MyPierre',
    slug: 'mypierre',
    category: ['Brand identity & web dev'],
    description:
      `Le site vitrine d'un artisan du cuir basé à Kitzbühel qui met en avant son savoir-faire et ses inspirations.`,
    src: '../assets/img/project/project1/1.webp',
    srcSlider: './assets/img/project/project1/1.webp',
    overlay: 5,
    component: (props) => <Mypierre {...props} />,
  },
  {
    id: 2,
    title: 'Horover',
    slug: 'horover',
    category: ['Brand identity & web dev'],
    src: '/assets/img/project/project4/1.webp',
    srcSlider: '/assets/img/project/project4/1.webp',
    /*   src: './assets/vid/myPierre.mp4',
          video: {
              poster: '/assets/img/project/project4/1.webp',
              loop: true
          }, */
    description: `Une plateforme qui permet à l'utilisateur de trouver l'horloger qu'il lui faut dans toute l'Europe, en fonction de ses spécialités et de sa position géographique.`,
    overlay: 5,
    component: (props) => <Horover {...props} />,
  },

  {
    id: 3,
    title: 'Golf Booking',
    slug: 'golf-booking',
    src: '/assets/img/project/project5/1.webp',
    srcSlider: '/assets/img/project/project5/1.webp',
    category: ['Brand identity & web dev'],
    description:
      `Une plateforme de réservation de tee times de golf qui comprend la recherche, l'étape de paiement et la gestion d'un compte utilisateur.`,
    overlay: 3,
    component: (props) => <Booking {...props} />,
  },
  {
    id: 4,
    title: 'Mômes',
    slug: 'momes',
    src: '/assets/img/project/project3/8.webp',
    srcSlider: '/assets/img/project/project3/8.webp',
    category: ['Brand identity & web dev'],
    description:
      `Un eshop de mode coréenne pour enfants, où l'élégance rencontre la joie de vivre.`,
    overlay: 5,
    component: (props) => <Momes {...props} />,
  },
  {
    id: 5,
    title: 'Nexxchange',
    slug: 'nexxchange',
    src: '/assets/img/project/project2/7.webp',
    srcSlider: '/assets/img/project/project2/7.webp',
    category: ['Brand identity & web dev'],
    description:
      `Un site B2B pour un Software-as-a-Service de gestion de club de golf et d'hôtellerie.`,
    overlay: 4,

    component: (props) => <Nexxchange {...props} />,
  },
]

export const getPortfolioData = () => data

export const getPortfolioItem = (value, whereName = 'id') => {
  return data.find((item) => {
    if (item[whereName] === value) return item
    return null
  })
}
export const getPortfolioLink = (item) => {
  if (item) return item.slug && '/portfolio/' + item.slug

  return ''
}
