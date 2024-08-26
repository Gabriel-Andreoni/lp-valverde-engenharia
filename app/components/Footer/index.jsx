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
                            (19) 99999-9999
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