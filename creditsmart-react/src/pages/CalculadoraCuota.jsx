import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CalculadoraCuota.css';

const CalculadoraCuota = () => {
    const [monto, setMonto] = useState('');
    const [meses, setMeses] = useState('');
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const tasaMensual = 0.0104; // Tasa mensual en decimal (1.04%)
    const navigate = useNavigate();

    // Función para formatear moneda
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    // Cálculo de la cuota mensual con interés compuesto
    const calcularCuota = () => {
        if (!monto || !meses || monto <= 0 || meses <= 0) return null;

        const montoNum = parseFloat(monto);
        const mesesNum = parseInt(meses);

        // Fórmula de amortización: C = P * [i(1+i)^n] / [(1+i)^n - 1]
        const cuota = montoNum * (tasaMensual * Math.pow(1 + tasaMensual, mesesNum)) /
            (Math.pow(1 + tasaMensual, mesesNum) - 1);

        return cuota;
    };

    const handleCalcular = () => {
        if (monto && meses && monto > 0 && meses > 0) {
            setMostrarResultado(true);
        }
    };

    const handleSolicitar = () => {
        // Navegar a la página de solicitud con datos precargados
        navigate(`/solicitar?monto=${monto}&plazo=${meses}&tipo=libre-inversion`);
    };

    const cuotaMensual = calcularCuota();
    const totalAPagar = cuotaMensual ? cuotaMensual * parseInt(meses) : 0;
    const totalIntereses = totalAPagar - parseFloat(monto || 0);

    return (
        <div className="calculadora-container">
            <div className="calculadora-card">
                <h2>Calculadora de Cuota Mensual</h2>
                <p className="subtitle">Crédito Libre Inversión - Tasa: {(tasaMensual * 100).toFixed(2)}% mensual</p>

                <div className="form-calculadora">
                    <div className="input-group">
                        <label htmlFor="monto">Monto del Crédito</label>
                        <input
                            type="number"
                            id="monto"
                            placeholder="Ej: 5000000"
                            value={monto}
                            onChange={(e) => setMonto(e.target.value)}
                            min="0"
                        />
                        {monto && <span className="input-hint">{formatCurrency(parseFloat(monto))}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="meses">Plazo (meses)</label>
                        <input
                            type="number"
                            id="meses"
                            placeholder="Ej: 12"
                            value={meses}
                            onChange={(e) => setMeses(e.target.value)}
                            min="1"
                            max="60"
                        />
                    </div>
                </div>

                {/* Botones de acción */}
                <div className="botones-accion">
                    <button
                        className="btn-primary"
                        onClick={handleCalcular}
                        disabled={!monto || !meses || monto <= 0 || meses <= 0}
                    >
                        💰 Calcular Cuota
                    </button>
                    <button
                        className="btn-secondary"
                        onClick={handleSolicitar}
                        disabled={!monto || !meses || monto <= 0 || meses <= 0}
                    >
                        📝 Solicitar Crédito
                    </button>
                </div>

                {mostrarResultado && cuotaMensual && (
                    <div className="resultados">
                        <div className="resultado-principal">
                            <span className="label">Tu cuota mensual será:</span>
                            <span className="valor-grande">{formatCurrency(cuotaMensual)}</span>
                        </div>

                        <div className="detalles">
                            <div className="detalle-item">
                                <span className="detalle-label">Monto solicitado:</span>
                                <span className="detalle-valor">{formatCurrency(parseFloat(monto))}</span>
                            </div>
                            <div className="detalle-item">
                                <span className="detalle-label">Plazo:</span>
                                <span className="detalle-valor">{meses} meses</span>
                            </div>
                            <div className="detalle-item">
                                <span className="detalle-label">Tasa de interés:</span>
                                <span className="detalle-valor">{(tasaMensual * 100).toFixed(2)}% mensual</span>
                            </div>
                            <div className="detalle-item destacado">
                                <span className="detalle-label">Total de intereses:</span>
                                <span className="detalle-valor">{formatCurrency(totalIntereses)}</span>
                            </div>
                            <div className="detalle-item destacado">
                                <span className="detalle-label">Total a pagar:</span>
                                <span className="detalle-valor">{formatCurrency(totalAPagar)}</span>
                            </div>
                        </div>

                        <div className="ejemplo">
                            <p><strong>Ejemplo:</strong> Pagarás {formatCurrency(cuotaMensual)} cada mes durante {meses} meses.</p>
                        </div>
                    </div>
                )}

                {!cuotaMensual && monto && meses && (
                    <div className="mensaje-info">
                        <p>Ingresa un monto y plazo válidos para ver el cálculo.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CalculadoraCuota;
