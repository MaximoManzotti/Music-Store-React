import Imagen_Fender from '../../assets/Guitarra.jpg';
import Imagen_Epiphone from '../../assets/epiphone.jpg';
import Imagen_Telecaster from '../../assets/telecaster.jpg';
import Bateria_Spears from '../../assets/BateriasSpears.jpg'
import Bateria_Pdp from '../../assets/Bateria_doble.jpg';
import Bateria_Ludivig from '../../assets/Bateria_Comic.jpg';
import Bajo_Fender from '../../assets/BajoFender.jpg';
import Bajo_Hofner from '../../assets/Hofner.jpg';
import Bajo_Squier from '../../assets/BajoSquier.jpg';
import Kit_Pedales from '../../assets/kit_pedales.jpg'
import CorreaAnimalPrint from '../../assets/Correa_Animal_Print.jpg';
import CorreaPatronAzul from '../../assets/Correa_Patron_Azul.jpg';

const Instrumentos = [
    {
        id: 1,
        categoria: 'Guitarra',
        Marca: 'Fender',
        Modelo: 'Stratocaster',
        Imagen: Imagen_Fender,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.',
        Precio: '$90000',
        Quantity: 7
    },
    {
        id: 2,
        categoria: 'Guitarra',
        Marca: 'Epiphone',
        Modelo: 'Casino',
        Imagen: Imagen_Epiphone,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.',
        Precio: '$80000',
        Quantity: 10
    }, {
        id: 3,
        categoria: 'Guitarra',
        Marca: 'Fender',
        Modelo: 'Telecaster',
        Imagen: Imagen_Telecaster,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.',
        Precio: '$60000',
        Quantity: 4
    }, {
        id: 4,
        categoria: 'Bateria',
        Marca: 'Spears',
        Modelo: 'Madera y Negro',
        Imagen: Bateria_Spears,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.',
        Precio: '$50000',
        Quantity: 3
    },
    {
        id: 5,
        categoria: 'Bateria',
        Marca: 'PDP',
        Modelo: 'Doble, Madera y Negro',
        Imagen: Bateria_Pdp,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.',
        Precio: '$50000',
        Quantity: 7
    },
    {
        id: 6,
        categoria: 'Bateria',
        Marca: 'Ludivig',
        Modelo: 'Comic',
        Imagen: Bateria_Ludivig,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.',
        Precio: '$50000',
        Quantity: 9
    }, {
        id: 7,
        categoria: 'Bajos',
        Marca: 'Fender',
        Modelo: 'Stratocaster',
        Imagen: Bajo_Fender,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.',
        Precio: '$50000',
        Quantity: 3
    },
    {
        id: 8,
        categoria: 'Bajos',
        Marca: 'Hofner',
        Modelo: 'Paul McCartney',
        Imagen: Bajo_Hofner,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.',
        Precio: '$50000',
        Quantity: 7
    },
    {
        id: 9,
        categoria: 'Bajos',
        Marca: 'Squier',
        Modelo: 'Strastocaster',
        Imagen: Bajo_Squier,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.',
        Precio: '$50000',
        Quantity: 3
    },
    {
        id: 10,
        categoria: 'Accesorios',
        Marca: 'Varios',
        Modelo: 'Pedales',
        Imagen: Kit_Pedales,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.',
        Precio: '$50000',
        Quantity: 3
    },
    {
        id: 11,
        categoria: 'Accesorios',
        Marca: 'Strap',
        Modelo: 'Correa',
        Imagen: CorreaAnimalPrint,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.',
        Precio: '$50000',
        Quantity: 7
    },
    {
        id: 12,
        categoria: 'Accesorios',
        Marca: 'Strap',
        Modelo: 'Correa',
        Imagen: CorreaPatronAzul,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque tempora quia natus dicta architecto, quibusdam nisi quos sunt non repellat iusto necessitatibus laudantium voluptatem vel dolorum fuga porro reprehenderit.',
        Precio: '$50000',
        Quantity: 9
    },];

export default Instrumentos;