import { useState } from 'react';
import '../css/Solicitar.css';


const Solicitar = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        cedula: '',
        email: '',
        telefono: '',
        tipoCredito: '',
        monto: '',
        plazo: '',
        destino: '',
        empresa: '',
        cargo: '',
        ingresos: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        alert('¡Solicitud enviada exitosamente! Nos pondremos en contacto contigo pronto.');
        // Aquí podrías enviar los datos a un backend
    };

    const handleReset = () => {
        setFormData({
            nombre: '',
            cedula: '',
            email: '',
            telefono: '',
            tipoCredito: '',
            monto: '',
            plazo: '',
            destino: '',
            empresa: '',
            cargo: '',
            ingresos: ''
        });
    };

    return (
        <div className="solicitud-container">
            <h2>Formulario de Solicitud</h2>
            <div className="info-form">
                <p>Complete el formulario. Los campos marcados con * son obligatorios.</p>
            </div>

            <form className="formulario-credito" onSubmit={handleSubmit}>
                {/* Datos Personales */}
                <fieldset>
                    <legend>Datos Personales</legend>
                    <div className="form-group">
                        <label htmlFor="nombre">*Nombre completo</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cedula">*Cédula</label>
                        <input
                            type="number"
                            id="cedula"
                            name="cedula"
                            value={formData.cedula}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">*Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono">*Teléfono</label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </fieldset>

                {/* Datos del Crédito */}
                <fieldset>
                    <legend>Datos del Crédito</legend>
                    <div className="form-group">
                        <label htmlFor="tipoCredito">*Tipo de crédito</label>
                        <select
                            id="tipoCredito"
                            name="tipoCredito"
                            value={formData.tipoCredito}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Seleccione...</option>
                            <option value="libre-inversion">Libre Inversión</option>
                            <option value="vehiculo">Vehículo</option>
                            <option value="vivienda">Vivienda</option>
                            <option value="educativo">Educativo</option>
                            <option value="empresarial">Empresarial</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="monto">*Monto solicitado</label>
                        <input
                            type="number"
                            id="monto"
                            name="monto"
                            min="500000"
                            value={formData.monto}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="plazo">*Plazo (meses)</label>
                        <select
                            id="plazo"
                            name="plazo"
                            value={formData.plazo}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Seleccione...</option>
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="36">36</option>
                            <option value="48">48</option>
                            <option value="60">60</option>
                            <option value="72">72</option>
                            <option value="240">240</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="destino">*Destino del crédito</label>
                        <textarea
                            id="destino"
                            name="destino"
                            rows="4"
                            placeholder="Descripción"
                            value={formData.destino}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </fieldset>

                {/* Datos Laborales */}
                <fieldset>
                    <legend>Datos Laborales</legend>
                    <div className="form-group">
                        <label htmlFor="empresa">Empresa</label>
                        <input
                            type="text"
                            id="empresa"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cargo">Cargo</label>
                        <input
                            type="text"
                            id="cargo"
                            name="cargo"
                            value={formData.cargo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ingresos">Ingresos mensuales</label>
                        <input
                            type="number"
                            id="ingresos"
                            name="ingresos"
                            min="0"
                            value={formData.ingresos}
                            onChange={handleChange}
                        />
                    </div>
                </fieldset>

                <div className="form-actions">
                    <button type="submit" className="btn-primary">Enviar</button>
                    <button type="button" className="btn-secondary" onClick={handleReset}>Limpiar</button>
                </div>
            </form>
        </div>
    );
};

export default Solicitar;
