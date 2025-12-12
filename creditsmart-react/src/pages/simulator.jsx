import { useState, useEffect } from 'react';
import CreditCards from '../components/CreditCards';
import { useCredits } from '../hooks/useCredits';
import '../css/Simulator.css';


const Simulator = () => {
  const { credits, loading, error } = useCredits();
  const [searchText, setSearchText] = useState('');
  const [rangoMonto, setRangoMonto] = useState('');
  const [filteredCredits, setFilteredCredits] = useState([]);

  // Inicializar filteredCredits cuando se cargan los créditos
  useEffect(() => {
    if (credits.length > 0) {
      setFilteredCredits(credits);
    }
  }, [credits]);

  // Función auxiliar para normalizar texto 
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // Función para aplicar filtros
  const handleFilter = () => {
    let filtered = [...credits];

    // Filtrar por texto de búsqueda
    if (searchText.trim() !== '') {
      const searchNormalized = normalizeText(searchText);

      filtered = filtered.filter(credit =>
        normalizeText(credit.name).includes(searchNormalized) ||
        normalizeText(credit.description).includes(searchNormalized)
      );
    }

    // Filtrar por rango de monto
    if (rangoMonto !== '') {
      filtered = filtered.filter(credit => {
        if (rangoMonto === 'bajo') {
          return credit.maxAmount <= 50000000;
        } else if (rangoMonto === 'medio') {
          return credit.minAmount <= 200000000 && credit.maxAmount >= 50000000;
        } else if (rangoMonto === 'alto') {

          return credit.maxAmount >= 200000000;
        }
        return true;
      });
    }

    setFilteredCredits(filtered);
  };

  // Función para limpiar filtros
  const handleReset = () => {
    setSearchText('');
    setRangoMonto('');
    setFilteredCredits(credits);
  };

  if (loading) {
    return (
      <div className="simulator-container">
        <h2>Cargando créditos...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="simulator-container">
        <h2>Error al cargar créditos</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="simulator-container">
      <h2>Simulador y Filtro de Créditos</h2>

      {/* Zona de filtros */}
      <div className="filtros">
        <div className="filtro-item">
          <label htmlFor="buscar">Buscar:</label>
          <input
            type="text"
            id="buscar"
            name="buscar"
            placeholder="Ej: Crédito Vehículo"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="filtro-item">
          <label htmlFor="rango-monto">Rango de Monto:</label>
          <select
            id="rango-monto"
            name="rango-monto"
            value={rangoMonto}
            onChange={(e) => setRangoMonto(e.target.value)}
          >
            <option value="">Todos los rangos</option>
            <option value="bajo">Hasta $50.000.000</option>
            <option value="medio">$50.000.000 - $200.000.000</option>
            <option value="alto">Más de $200.000.000</option>
          </select>
        </div>

        <button className="btn-primary" onClick={handleFilter}>
          Aplicar filtros
        </button>
        <button className="btn-secondary" onClick={handleReset}>
          Limpiar
        </button>
      </div>

      {/* Resultados */}
      <section className="resultados-simulador">
        <h3>Resultados ({filteredCredits.length} producto{filteredCredits.length !== 1 ? 's' : ''})</h3>

        {filteredCredits.length === 0 ? (
          <p className="no-results">No se encontraron créditos con los filtros aplicados</p>
        ) : (
          <div className="catalogo">
            {filteredCredits.map(credit => (
              <div key={credit.id} style={{ height: '100%' }}>
                <CreditCards credit={credit} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Simulator;
