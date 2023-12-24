const products = [
    {
      id: "sg1",
      name: "Gibson SG",
      description: "",
      stock: 10,
      price: 15000,
      image: "/public/img/sg1cherry.jpg"
    },
    {
      id: "sg2metal1",
      name: "Gibson Static Ebony",
      description: "",
      stock: 2,
      price: 12000,
      image: "/img//public/img/sg1cherry.jpg"
    },
    {
      id: "sg2metal2",
      name: "Auriculares Float Run",
      description: "Este es el mejor teclado del mundo",
      stock: 6,
      price: 17000,
      image: "/public/img/sg1cherry.jpg"
    },
    {
      id: "acustic",
      name: "Gibson Acustica",
      description: "Guitarra acustica marca Gibson",
      stock: 9,
      price: 12000,
      image: "/public/img/sg1cherry.jpg"
    },
    {
      id: "bata1",
      name: "Bateria MAPEX ",
      description: "Batería completa marca MAPEX",
      stock: 9,
      price: 120000,
      image: "/public/img/sg1cherry.jpg"
    },

    {
      id: "bsthunder",
      name: "Bajo Gibson Thunderbird",
      description: "Bajo eléctrico modelo Thunderbird color verde",
      stock: 15,
      price: 19000,
      image: "/public/img/sg1cherry.jpg"
    },
    {
      id: "khg522",
      name: "Camara ILCE 9M3",
      description: "Esta es la mejor camara del mundo",
      stock: 3,
      price: 22000,
      image: "/public/img/sg1cherry.jpg"
    },
    {
      id: "prw092",
      name: "Camara ILCE 6000L",
      description: "Esta es la mejor camara del mundo",
      stock: 10,
      price: 31000,
      image: "/public/img/sg1cherry.jpg"
    },
    {
      id: "ujm422",
      name: "Camara ZV E10",
      description: "Esta es la mejor camara del mundo",
      stock: 5,
      price: 24000,
      image: "/public/img/sg1cherry.jpg"
    },
  ];

const getProducts = new Promise((resolve, reject) => {
    //acá simulamos un retraso de red
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  
  export default getProducts