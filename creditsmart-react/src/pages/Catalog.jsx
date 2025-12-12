import CreditCards from '../components/CreditCards';
import { useCredits } from '../hooks/useCredits';
import '../css/Catalog.css';


const Catalog = () => {
    const { credits, loading, error } = useCredits();

    if (loading) {
        return (
            <div className="catalog-container">
                <div className="titulo-seccion">
                    <h2>Cargando productos...</h2>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="catalog-container">
                <div className="titulo-seccion">
                    <h2>Error al cargar productos</h2>
                    <p className="subtitle">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="catalog-container">
            {/* Título de la sección */}
            <div className="titulo-seccion">
                <h2>Nuestros productos</h2>
                <p className="subtitle">Explora todos nuestros productos de crédito disponibles</p>
            </div>

            {/* Catálogo de crédito*/}
            <section className="catalogo">
                {credits.map(credit => (
                    <CreditCards key={credit.id} credit={credit} />
                ))}
            </section>
        </div>
    );
};

export default Catalog;
