import CreditCards from '../components/CreditCards';
import { creditsData } from '../data/creditsData';
import '../css/Catalog.css';


const Catalog = () => {
    return (
        <div className="catalog-container">
            {/* Título de la sección */}
            <div className="titulo-seccion">
                <h2>Nuestros productos</h2>
                <p className="subtitle">Explora todos nuestros productos de crédito disponibles</p>
            </div>

            {/* Catálogo de créditos */}
            <section className="catalogo">
                {creditsData.map(credit => (
                    <CreditCards key={credit.id} credit={credit} />
                ))}
            </section>
        </div>
    );
};

export default Catalog;
