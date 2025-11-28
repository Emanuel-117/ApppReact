const CreditCards = ({credit }) => {
    const {
    name,
    description,
    minAmount,
    maxAmount,
    interestRate,
    maxTerm,
    requirements,
    icon,
    } = credit;
    return (
        <div className="credit-card">
            <div className="card-header">
                <span className="icon">{icon}</span>
                <h4>{name}</h4>
            </div>

            <p className="description">{description}</p>

            <div className="details">
                <div className="detail-item">
                    <span className="label">Tasa de interés:</span>
                    <span className="value">{interestRate} % mensual</span>
                </div>

                <div className="detail-item">
                    <span className="label">Monto:</span>
                    <span className="value">
                    {formatCurrency(minAmount)} - {formatCurrency(maxAmount)}
                    </span>
                </div>

                <div className="detail-item">
                    <span className="label">Plazo:</span>
                    <span className="value">Hasta {maxTerm} meses</span>
                </div>
            </div>

            <button className="apply-button">Solicitar Crédito</button>S

        </div>
        
    );
};
