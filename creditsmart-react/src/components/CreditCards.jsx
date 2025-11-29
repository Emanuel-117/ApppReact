import { Link } from 'react-router-dom';

// Función para formatear moneda en pesos colombianos
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

const CreditCards = ({ credit }) => {
    const {
        name,
        description,
        minAmount,
        maxAmount,
        interestRate,
        maxTerm,
        icon,
        type
    } = credit;

    return (
        <div className="card-credito">
            <div className="card-header">
                <div className="icono-credito">
                    <img src={icon} alt={name} style={{ width: '60%', height: 'auto' }} />
                </div>
                <h3>{name}</h3>
            </div>

            <div className="card-body">
                <p className="descripcion-corta">{description}</p>
                <p>Tasa Anual: <span className="tasa-interes">{interestRate}%</span></p>
                <p>Monto: {formatCurrency(minAmount)} - {formatCurrency(maxAmount)}</p>
                <p>Plazo: Hasta {maxTerm} meses</p>
            </div>

            <div className="card-actions">
                <Link to={`/solicitar?tipo=${type}`} className="btn-primary">Solicitar Ahora</Link>
            </div>
        </div>
    );
};

export default CreditCards;
