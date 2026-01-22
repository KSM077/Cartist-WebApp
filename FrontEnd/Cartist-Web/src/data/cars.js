import TsuruIMG from '../assets/cars/tsuru.png';
import AventadorIMG from '../assets/cars/aventador.png'
import P911IMG from '../assets/cars/porsche.png';

import pinturaRoja from '../assets/background/Red.png';
import pinturaNaranja from '../assets/background/Orange.png';
import pinturaBlanca from '../assets/background/White.png';

const cars = [
    {
        id: 1,
        name: "Tsuru",
        brand: "Nissan", 
        year: 1995,
        bg: pinturaRoja,
        image: TsuruIMG,
        price: "250k"
    },
    {
        id: 2,
        name: "Aventador",
        brand: "Lamborghini", 
        year: 2014,
        bg: pinturaNaranja,
        image: AventadorIMG,
        price: "500k"
    },
    {
        id: 3,
        name: "911",
        brand: "Porsche",
        year: 2020,
        bg: pinturaBlanca,
        image: P911IMG,
        price: "750k"
    }

];

export default cars;

