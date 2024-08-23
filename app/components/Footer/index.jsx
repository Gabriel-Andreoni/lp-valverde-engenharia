"use client";

import './footer.css';

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export default function Footer() {
    return (
        <section className="footer-container">
            <div className="footer-overlay"></div>
            <div className="footer-content-wrapper">
                <div className="footer-content">
                    <h2>Sobre nós</h2>
                    <p>Nossa equipe é composta por engenheiros altamente qualificados, com vasta experiência em segurança contra incêndios e normas regulatórias.
                    </p>
                </div>

                <div className="footer-content">
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

                <div className="footer-content">
                    <h2>Links</h2>
                    <span>Home</span>
                    <span>Sobre Nós</span>
                    <span>AVCB E CLCB</span>
                    <span>Contato</span>
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