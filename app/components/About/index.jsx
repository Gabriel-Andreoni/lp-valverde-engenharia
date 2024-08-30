"use client";

import Image from 'next/image';

import './about.css';

import AssessmentIcon from '@mui/icons-material/Assessment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VerifiedIcon from '@mui/icons-material/Verified';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import AboutFloatImage from '../../../public/float-image.png';
import AboutFeatureImage from '../../../public/about-list-image.jpg'
import AboutImage from '../../../public/about-image-left.png'
import AboutIcon from '../../../public/about-icon.png';
import Link from 'next/link';


export function AboutCards() {
    return (
        <ul className="about-cards-wrapper">
            <li className="about-card" data-aos="fade-up" data-aos-duration="450" data-aos-easing="ease-in-out">
                <AssessmentIcon className="icon-card" />
                <h2>Avaliação Preliminar</h2>
                <p>Realizamos uma inspeção detalhada do seu estabelecimento para identificar quaisquer não conformidades com as normas de segurança contra incêndio. </p>
            </li>
            <li className="about-card" data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-out">
                <EventNoteIcon className="icon-card" />
                <h2>Planejamento e Projeto</h2>
                <p>Com base na avaliação preliminar, desenvolvemos um plano de ação personalizado para abordar e corrigir quaisquer deficiências.</p>
            </li>
            <li className="about-card" data-aos="fade-up" data-aos-duration="550" data-aos-easing="ease-in-out">
                <TrackChangesIcon className="icon-card" />
                <h2>Execução e Acompanhamento</h2>
                <p>Nossa equipe conduzirá todas as intervenções necessárias para garantir que seu estabelecimento atenda ou supere as normas de segurança.</p>
            </li>

            <li className="about-card" data-aos="fade-down" data-aos-duration="600" data-aos-easing="ease-in-out">
                <VerifiedIcon className="icon-card" />
                <h2>Documentação e Certificação</h2>
                <p>Cuidamos de toda a documentação necessária para a obtenção do AVCB ou CLCB, incluindo plantas, laudos técnicos e relatórios de inspeção.</p>
            </li>
        </ul>
    )
}


export function AboutSection() {
    return (
        <div className="about-wrapper" id="about">
            <div className="about-section">
                <div className="about-image" data-aos="fade-up" data-aos-duration="450" data-aos-easing="ease-in-out">
                    <Image className="about-main-image" src={AboutImage} alt="imagem de um bombeiro" width="470" height="590" />
                    <div className="about-second-image">
                    </div>
                    <Image src={AboutFloatImage} alt="imagem de um extintor de incêndio" width="181" height="286" />
                </div>
                <div className="about-content" data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-out">
                    <div className="about-content-top">
                        <h6>
                            <Image src={AboutIcon} alt="ícone da seção sobre" width="20" height="23" />
                            Sobre nós
                        </h6>

                        <h3>
                            Por Que Escolher a Valverde Engenharia?
                        </h3>

                        <p>
                            Nossa equipe é composta por engenheiros altamente qualificados, com vasta experiência em segurança contra incêndios e normas regulatórias.
                        </p>

                        <p>
                            Entendemos que cada estabelecimento é único. Oferecemos soluções personalizadas que atendem às suas necessidades específicas.

                        </p>
                    </div>

                    <div className="about-feature">
                        <div className="about-feature-item">
                            <div className="about-feature-icon">
                                <EngineeringIcon />
                            </div>
                            <h4 className="about-feature-title">Anos de experiência</h4>
                        </div>
                        <div className="about-feature-item">
                            <div className="about-feature-icon">
                                <BuildIcon />
                            </div>
                            <h4 className="about-feature-title">Soluções Sob Medida</h4>

                        </div>
                    </div>

                    <div className="about-list-wrapper">
                        <div className="about-list">
                            <ul>
                                <li>
                                    <CheckCircleIcon />
                                    Compromisso com a Excelência</li>
                                <li>
                                    <CheckCircleIcon />
                                    Precisão Técnica</li>
                                <li>
                                    <CheckCircleIcon />
                                    Agilidade na Resolução</li>
                            </ul>

                            <button>
                                <Link href="https://w.app/T8AxlD" target="_blank" rel="noopener noreferrer">Agende uma vistoria</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default function About() {
    return (
        <section className="about-container">
            <AboutCards />

            <AboutSection />
        </section>
    )
}