import React from 'react'
import './style.scss'
import TestimonialItem from './TestimonialItem';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import MoveTrigger from "../../animation/MoveTrigger";
import {Pagination, SwiperOptions} from "swiper";
import {dsnCN} from "../../hooks/helper";


const TestimonialDetails = [
    {
        name: "Pierre",
        label: "CEO de MyPierre",
        src: "assets/img/avatar/1.jpg",
        description: `"Je suis vraiment ravi du site que Monolithe a développé pour mon entreprise. Ils ont su mettre en valeur ma marque à travers un design épuré et professionnel. Ils ont été attentifs à mes besoins et ont livré un résultat à la hauteur de mes attentes."`
    },
    {
        name: "Philippe",
        label: "Business Development Director de Nexxchange",
        src: "assets/img/avatar/2.jpg",
        description: `"Monolithe a conçu une application de réservation sur mesure qui facilite grandement notre activité. Leur équipe a su comprendre nos besoins spécifiques et créer une interface conviviale pour nos clients. Nous sommes très satisfaits du résultat final."`
    },
    {
        name: "Maud",
        label: "CEO de Mômes",
        src: "assets/img/avatar/3.jpg",
        description: `"Monolithe a créé un site e-commerce qui a surpassé nos attentes en termes de design et de performances. Leur équipe a su allier un design attrayant à une navigation fluide, ce qui a considérablement amélioré l'expérience utilisateur."`
    },
    {
        name: "Victor",
        label: "CFO de Horover",
        src: "assets/img/avatar/4.jpg",
        description: `"Monolithe a développé une application de mise en relation exceptionnelle. Leur expertise technique et leur sens du design ont permis de créer une plateforme robuste et esthétiquement plaisante. Nous sommes reconnaissants pour leur professionnalisme tout au long du projet."`
    },

]


function Testimonial({className, title, ...restProps}: SwiperOptions) {
    return (

        <section className={dsnCN('dsn-testimonial background-section testimonial-one', className)}>
            <div className="testimonial-inner ">
                <div className="title-box">
                    {title &&
                    <MoveTrigger from={{y: 0, opacity: 0}} to={{y: -60, opacity: 1}} mobile={false}>
                        {(ref) => <h2 className='title-section p-relative z-index-1' ref={ref}>
                            {title}
                        </h2>}
                    </MoveTrigger>
                    }

                </div>
                <div className='content-box'>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{clickable: true, el: '.swiper-pagination'}}
                        slidesPerView={1}
                        {...restProps}
                    >
                        {TestimonialDetails.map(
                            (item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <TestimonialItem
                                            /* src={item.src}  */authorName={item.name} label={item.label}
                                            description={item.description}/>
                                    </SwiperSlide>

                                );
                            }
                        )}

                        <div className="swiper-pagination"/>

                    </Swiper>
                </div>

            </div>
        </section>

    )
}


export default Testimonial;