import './services.css';

import ArticleIcon from '@mui/icons-material/Article';

export default function Services() {
    return (
        <section className="services-container" id="services">
            <div className="services-left" data-aos="fade-right" data-aos-duration="450" data-aos-easing="ease-in-out">
            </div>
            <div className="services-card-right">
                <div className="services-card" data-aos="fade-up" data-aos-duration="450" data-aos-easing="ease-in-out">

                    <div className="service-content">
                        <span>
                            <ArticleIcon />
                        </span>
                        <p>O Auto de Vistoria do Corpo de Bombeiros (AVCB) e o Certificado de Licença do Corpo de Bombeiros (CLCB) são documentos fundamentais que comprovam a adequação de um estabelecimento às normas de segurança contra incêndio estabelecidas pelo Corpo de Bombeiros.
                        </p>
                    </div>
                </div>

                <div className="services-card" data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-out">

                    <div className="service-content">
                        <span>
                            <ArticleIcon />
                        </span>
                        <p>A obtenção desses certificados é mais do que uma exigência legal, é uma medida de proteção à vida, ao patrimônio, e à continuidade das operações comerciais.</p>
                    </div>
                    <div className="services-image">
                    </div>
                </div>
            </div>
        </section>
    )
}