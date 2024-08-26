"use client";

import {useState, useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './hero.css';

import Image from 'next/image';
import LOGO from '/public/logo.png';

export function Menu() {
    const [btnMobileActive, setBtnMobileActive] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="menu-container">
            <div className="logo-wrapper">
                <Image src={LOGO} alt="logo da empresa" width="80" height="80" data-aos="fade-down" data-aos-easing="ease-in-out" />
            </div>
            <button className={`btn-mobile ${btnMobileActive ? 'active' : ''}`} onClick={() => setBtnMobileActive((prevState) => !prevState)}></button>
            <div className="menu-wrapper">
                <ul className="menu-inner"  data-aos="fade-down" data-aos-delay="100">
                    <li>Sobre-nós</li>
                    <li>AVCB e CLCB</li>
                    <li>Agende uma Consulta</li>
                </ul>
            </div>
            <div className="adress-wrapper">
                <span data-aos="fade-down" data-aos-easing="ease-in-out">+55 (19) 9999-9999</span>
                <span data-aos="fade-down" data-aos-easing="ease-in-out">Av. Lorem Ipsum n° 99</span>
            </div>
        </div>
    )
}

export function HeroBody() {
    return (
        <div className="hero-body-container">
            <div className="hero-body-content" data-aos="fade-up" data-aos-easing="ease-in-out">
            <h1>Garanta a Segurança do Seu Estabelecimento</h1>
            <h3>Em um mundo onde a segurança nunca deve ser deixada para segundo plano, as normas do Corpo de Bombeiros não é apenas uma obrigação legal, é uma garantia de tranquilidade para você, seus funcionários e seus clientes.</h3>
            <button>Faça uma vistoria</button>
            </div>
        </div>
    )
}

export default function Hero() {
    return (
        <section className="hero-container">
            <Menu />

            <HeroBody />
        </section>
    )
}