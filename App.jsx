// App.jsx
import React from 'react';
import MenuSection from './MenuSection';

const App = () => {
  // Definir platos por categoría
  const pescados = [
    {
      title: 'Salmón a la Plancha',
      description: 'Lomo de salmón noruego a la plancha con salsa de eneldo y limón, acompañado de espárragos verdes.',
      ingredients: 'Salmón, eneldo, limón, nata, espárragos, aceite de oliva.',
      allergens: ['Pescado', 'Lácteos'],
      price: 17.95,
      image: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-5180324_1280.jpg'
    },
    {
      title: 'Pulpo a la Gallega',
      description: 'Pulpo cocido con patatas, pimentón dulce y aceite de oliva virgen extra. Un clásico de nuestra cocina.',
      ingredients: 'Pulpo, patata, pimentón, aceite de oliva, sal marina.',
      allergens: ['Moluscos'],
      price: 21.50,
      image: 'https://cdn.pixabay.com/photo/2019/03/13/11/09/food-4052824_1280.jpg'
    }
  ];

  const pastas = [
    {
      title: 'Tagliatelle al Funghi',
      description: 'Tagliatelle con salsa cremosa de setas silvestres, trufa y queso parmesano.',
      ingredients: 'Pasta fresca, setas variadas, nata, trufa, queso parmesano.',
      allergens: ['Gluten', 'Lácteos', 'Huevo'],
      price: 14.95,
      image: 'https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_1280.jpg'
    },
    {
      title: 'Spaghetti alle Vongole',
      description: 'Spaghetti con almejas frescas, ajo, guindilla, perejil y un toque de vino blanco.',
      ingredients: 'Spaghetti, almejas, ajo, guindilla, perejil, vino blanco, aceite de oliva.',
      allergens: ['Gluten', 'Moluscos'],
      price: 16.50,
      image: 'https://cdn.pixabay.com/photo/2020/01/20/09/28/spaghetti-4779442_1280.jpg'
    }
  ];

  const postres = [
    {
      title: 'Tarta de Queso',
      description: 'Cremosa tarta de queso horneada con base de galleta y coulis de frutos rojos.',
      ingredients: 'Queso crema, huevos, nata, azúcar, galletas, mantequilla, frutos rojos.',
      allergens: ['Lácteos', 'Huevo', 'Gluten'],
      price: 6.95,
      image: 'https://cdn.pixabay.com/photo/2021/01/22/18/00/cheesecake-5940663_1280.jpg'
    },
    {
      title: 'Coulant de Chocolate',
      description: 'Bizcocho de chocolate con corazón líquido, acompañado de helado de vainilla.',
      ingredients: 'Chocolate negro, huevos, mantequilla, harina, azúcar, helado de vainilla.',
      allergens: ['Lácteos', 'Huevo', 'Gluten'],
      price: 7.50,
      image: 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg'
    }
  ];

  const bebidasAlcohólicas = [
    {
      title: 'Vino Tinto Reserva',
      description: 'Rioja Reserva con 24 meses de crianza en barrica de roble francés y americano.',
      ingredients: 'Uva Tempranillo, Graciano y Mazuelo.',
      allergens: ['Sulfitos'],
      price: 22.00,
      image: 'https://cdn.pixabay.com/photo/2016/10/22/20/34/wines-1761613_1280.jpg'
    },
    {
      title: 'Sangría Casera',
      description: 'Refrescante sangría preparada con vino tinto, frutas troceadas y un toque de canela.',
      ingredients: 'Vino tinto, naranja, limón, manzana, azúcar, canela, brandy.',
      allergens: ['Sulfitos'],
      price: 18.00,
      image: 'https://cdn.pixabay.com/photo/2017/03/27/14/49/beach-2179183_1280.jpg'
    }
  ];

  const bebidasSinAlcohol = [
    {
      title: 'Limonada Casera',
      description: 'Refrescante limonada preparada al momento con limones exprimidos, menta fresca y un toque de miel.',
      ingredients: 'Limón, agua, menta, miel, hielo.',
      allergens: ['Ninguno'],
      price: 4.50,
      image: 'https://cdn.pixabay.com/photo/2019/04/24/14/36/drink-4152571_1280.jpg'
    },
    {
      title: 'Smoothie de Frutas',
      description: 'Batido natural de frutas de temporada con yogur griego y un toque de miel.',
      ingredients: 'Fresas, plátano, kiwi, yogur griego, miel.',
      allergens: ['Lácteos'],
      price: 5.95,
      image: 'https://cdn.pixabay.com/photo/2017/05/06/21/19/strawberry-2290969_1280.jpg'
    }
  ];

  return (
    <div>
      <MenuSection title="Pescados" dishes={pescados} />
      <MenuSection title="Pastas" dishes={pastas} />
      <MenuSection title="Postres" dishes={postres} />
      <MenuSection title="Bebidas Alcohólicas" dishes={bebidasAlcohólicas} />
      <MenuSection title="Bebidas Sin Alcohol" dishes={bebidasSinAlcohol} />
    </div>
  );
};

export default App;
