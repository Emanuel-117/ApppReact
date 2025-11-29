import libreInversionImg from '../components/images/icono-libre-inversion.png';
import vehiculoImg from '../components/images/icono-vehiculo.png';
import viviendaImg from '../components/images/icono-vivienda.png';
import educativoImg from '../components/images/icono-educativo.png';
import empresarialImg from '../components/images/icono-empresarial.png';

export const creditsData = [
    {
        id: 1,
        name: "Crédito Libre Inversión",
        description: "Dinero para viajes, deudas o estudios.",
        minAmount: 1000000,
        maxAmount: 50000000,
        interestRate: 12.5,
        maxTerm: 60,
        icon: libreInversionImg,
        type: "libre-inversion"
    },
    {
        id: 2,
        name: "Crédito Vehículo",
        description: "Financia hasta el 80% del valor de tu vehículo.",
        minAmount: 5000000,
        maxAmount: 150000000,
        interestRate: 10.9,
        maxTerm: 72,
        icon: vehiculoImg,
        type: "vehiculo"
    },
    {
        id: 3,
        name: "Crédito Vivienda",
        description: "Tasas preferenciales para vivienda.",
        minAmount: 10000000,
        maxAmount: 500000000,
        interestRate: 8.9,
        maxTerm: 240,
        icon: viviendaImg,
        type: "vivienda"
    },
    {
        id: 4,
        name: "Crédito Educativo",
        description: "Para matrículas y posgrados.",
        minAmount: 500000,
        maxAmount: 20000000,
        interestRate: 9.5,
        maxTerm: 48,
        icon: educativoImg,
        type: "educativo"
    },
    {
        id: 5,
        name: "Crédito Empresarial",
        description: "Para capital de trabajo y expansión.",
        minAmount: 20000000,
        maxAmount: 1000000000,
        interestRate: 14.2,
        maxTerm: 84,
        icon: empresarialImg,
        type: "empresarial"
    }
];
