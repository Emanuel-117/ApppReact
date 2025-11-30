# CreditSmart React

CreditSmart es una aplicación web moderna desarrollada en React para la simulación y solicitud de productos financieros. Permite a los usuarios explorar un catálogo de tarjetas de crédito, simular cuotas con filtros avanzados y realizar solicitudes en línea.

## Características Principales

- **Catálogo de Productos**: Visualización dinámica de tarjetas de crédito con detalles clave (tasa, montos, plazos).
- **Simulador Inteligente**:
  - Filtrado en tiempo real por nombre y descripción.
  - Filtrado inteligente por rangos de monto (Bajo, Medio, Alto).
  - Búsqueda insensible a mayúsculas y acentos (normalización de texto).
- **Solicitud en Línea**: Formulario controlado con validación de campos.
- **Diseño Responsivo**: Interfaz adaptable a móviles y escritorio con menú "sticky".
- **Navegación SPA**: Enrutamiento fluido sin recargas usando React Router.

## Tecnologías Utilizadas

- **Core**: React 18 (Vite)
- **Lenguaje**: JavaScript (ES6+)
- **Estilos**: CSS3 Modular y Variables CSS
- **Enrutamiento**: React Router DOM v6
- **Control de Versiones**: Git

## Instalación y Ejecución

Sigue estos pasos para correr el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone <https://github.com/Emanuel-117/ApppReact.git>
    cd creditsmart-react
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Abrir en el navegador:**
    Visita `http://localhost:5173` (o el puerto que indique la consola).

## Estructura del Proyecto

```
src/
├── components/      # Componentes reutilizables (Header, Footer, Cards)
├── pages/           # Vistas principales (Catalog, Simulator, Solicitar)
├── data/            # Datos estáticos (mock data)
├── css/             # Estilos modulares
├── App.jsx          # Componente principal y configuración de rutas
└── main.jsx         # Punto de entrada
```

## Puntos Destacados (Rúbrica)

- **Componentes Funcionales**: Uso de props y desestructuración.
- **Hooks**: Gestión de estado con `useState` para filtros y formularios.
- **Renderizado Condicional**: Manejo de estados de carga y listas vacías.
- **Listas y Keys**: Renderizado eficiente de listas con `.map()`.
- **Normalización de Datos**: Búsqueda robusta ignorando diacríticos.

---

