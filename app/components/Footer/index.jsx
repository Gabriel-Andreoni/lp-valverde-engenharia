"use client";

import Link from 'next/link';

import './footer.css';

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export default function Footer() {
    return (
        <section className="footer-container">
            <div className="footer-overlay"></div>
            <div className="footer-content-wrapper">
                <div className="footer-content" data-aos="fade-up" data-aos-duration="450" data-aos-easing="ease-in-out">
                    <h2>Sobre nós</h2>
                    <p>Nossa equipe é composta por engenheiros altamente qualificados, com vasta experiência em segurança contra incêndios e normas regulatórias.
                    </p>
                </div>

                <div className="footer-content" data-aos="fade-down" data-aos-duration="450" data-aos-easing="ease-in-out">
                    <h2>Contato</h2>
                    <ul>
                        <li>
                            <span>
                                <PhoneInTalkIcon />
                            </span>
                            (19) 98135-8414
                        </li>

                        <li>
                            <Link href="https://www.google.com.br/maps/place/R.+Dr.+Eraldo+Aur%C3%A9lio+Franzese,+71+-+02+-+Jardim+Paiquere,+Valinhos+-+SP,+13271-608/@-22.9829252,-47.0154353,17z/data=!3m1!4b1!4m5!3m4!1s0x94c8cdaec223f18d:0x3d18b1410b2cb866!8m2!3d-22.9829302!4d-47.0128604?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                                Rua doutor Eraldo Aurélio Franzese, 71 Sala 02
                                Jardim Paiquerê Valinhos - SP - 13271-608
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-content" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
                    <h2>Links</h2>
                    <span><Link href="#hero">Home</Link></span>
                    <span><Link href="#about">Sobre Nós</Link></span>
                    <span><Link href="#services">AVCB E CLCB</Link></span>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-content">
                    © Copyright 2024 por Codered
                </div>
            </div>
        </section>
    )
}