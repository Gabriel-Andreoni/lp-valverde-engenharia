import './about.css';

import AssessmentIcon from '@mui/icons-material/Assessment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VerifiedIcon from '@mui/icons-material/Verified';

export function AboutCards() {
    return (
        <ul className="about-cards-wrapper">
            <li className="about-card">
                <AssessmentIcon className="icon-card" />
                <h2>Avaliação Preliminar</h2>
                <p>Realizamos uma inspeção detalhada do seu estabelecimento para identificar quaisquer não conformidades com as normas de segurança contra incêndio. </p>
            </li>
            <li className="about-card">
                <EventNoteIcon className="icon-card" />
                <h2>Planejamento e Projeto</h2>
                <p>Com base na avaliação preliminar, desenvolvemos um plano de ação personalizado para abordar e corrigir quaisquer deficiências.</p>
            </li>
            <li className="about-card">
                <TrackChangesIcon className="icon-card" />
                <h2>Execução e Acompanhamento</h2>
                <p>Nossa equipe conduzirá todas as intervenções necessárias para garantir que seu estabelecimento atenda ou supere as normas de segurança.</p>
            </li>

            <li className="about-card">
                <VerifiedIcon className="icon-card" />
                <h2>Documentação e Certificação</h2>
                <p>Cuidamos de toda a documentação necessária para a obtenção do AVCB ou CLCB, incluindo plantas, laudos técnicos e relatórios de inspeção.</p>
            </li>
        </ul>
    )
}



export default function About() {
    return (
        <section className="about-container">
            <AboutCards />
        </section>
    )
}