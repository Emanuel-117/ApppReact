import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';
import Catalog from './pages/Catalog';
import Simulator from './pages/Simulator';
import Solicitar from './pages/Solicitar';
import CalculadoraCuota from './pages/CalculadoraCuota';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Catalog />
              </>
            } />
            <Route path="/catalogo" element={
              <>
                <Hero />
                <Catalog />
              </>
            } />
            <Route path="/simulador" element={<Simulator />} />
            <Route path="/calculadora" element={<CalculadoraCuota />} />
            <Route path="/solicitar" element={<Solicitar />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
