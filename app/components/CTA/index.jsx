"use client";

import Link from 'next/link';
import './cta.css';

export default function CTA() {
    return (
        <section className="cta-container">
            <div className="cta-content" data-aos="fade-up" data-aos-duration="450" data-aos-easing="ease-in-out">
                <h3>Pronto para Garantir a Segurança do Seu Estabelecimento?</h3>
                <p>Entre em contato conosco hoje mesmo para uma avaliação técnica detalhada e dê o primeiro passo em direção a um ambiente mais seguro e conforme. </p>
                <button>
                    <Link href="https://w.app/T8AxlD" target="_blank" rel="noopener noreferrer">Agende uma vistoria</Link>
                </button>

            </div>
        </section>
    )
}