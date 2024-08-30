"use client";

import {useState, useEffect} from 'react';
import Link from 'next/link';

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
        <div className="menu-container" id="hero">
            <div className="logo-wrapper">
                <Image src={LOGO} alt="logo da empresa" width="80" height="80" data-aos="fade-down" data-aos-easing="ease-in-out" />
            </div>
            <button className={`btn-mobile ${btnMobileActive ? 'active' : ''}`} onClick={() => setBtnMobileActive((prevState) => !prevState)}></button>
            <div className="menu-wrapper">
                <ul className="menu-inner"  data-aos="fade-down" data-aos-delay="100">
                    <li>
                        <Link href="#about">Sobre-nós</Link>
                    </li>
                    <li>
                        <Link href="#services">AVCB e CLCB</Link>
                    </li>
                    <li>
                        <Link href="#">Agende uma Consulta</Link>
                    </li>
                </ul>
            </div>
            <div className="adress-wrapper">
                <span data-aos="fade-down" data-aos-easing="ease-in-out">(19) 98135-8414</span>
                <span data-aos="fade-down" data-aos-easing="ease-in-out">
                    <Link href="https://www.google.com.br/maps/place/R.+Dr.+Eraldo+Aur%C3%A9lio+Franzese,+71+-+02+-+Jardim+Paiquere,+Valinhos+-+SP,+13271-608/@-22.9829252,-47.0154353,17z/data=!3m1!4b1!4m5!3m4!1s0x94c8cdaec223f18d:0x3d18b1410b2cb866!8m2!3d-22.9829302!4d-47.0128604?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Rua doutor Eraldo Aurélio Franzese, 71 - Valinhos SP</Link>
                </span>
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
            <button>
                <Link href="https://w.app/T8AxlD" target="_blank" rel="noopener noreferrer">Faça uma vistoria</Link>
            </button> 
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