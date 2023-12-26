const products = [
    {
      id: "sg1",
      name: "Gibson SG",
      description: "",
      stock: 10,
      price: 15000,
      image: "/public/img/sg1cherry.jpg",
      category: "cuerdas"
    },
    {
      id: "sg2metal1",
      name: "Gibson Static Ebony",
      description: "Guitarra eléctrica Gibson modelo Static color Ebony",
      stock: 2,
      price: 12000,
      image: "/public/img/sg2metal1.jpg",
      category: "cuerdas"
    },
    {
      id: "sg2metal2",
      name: "Gibson Static ",
      description: "Guitarra eléctrica Gibson modelo Static color madera",
      stock: 6,
      price: 12000,
      image: "/public/img/sg2metal2.jpg",
      category: "cuerdas"
    },
    {
      id: "acustic",
      name: "Gibson Acustica",
      description: "Guitarra acustica marca Gibson",
      stock: 9,
      price: 12000,
      image: "/public/img/acustica1.png",
      category: "cuerdas"
    },
    {
      id: "bata1",
      name: "Bateria MAPEX ",
      description: "Batería completa marca MAPEX",
      stock: 9,
      price: 120000,
      image: "/public/img/bateria1.jpg",
      category: "percusion",
    },

    {
      id: "bsthunder",
      name: "Bajo Gibson Thunderbird",
      description: "Bajo eléctrico modelo Thunderbird color verde de 4 cuerdas",
      stock: 15,
      price: 19000,
      image: "/public/img/bassthunderbird.jpg",
      category: "cuerdas"

    },
    {
      id: "cable1",
      name: "Cables Gibson",
      description: "Cables para instrumentos plug Gibson 3.05mts ",
      stock: 3,
      price: 22000,
      image: "/public/img/cable.png",
      category: "accesorios",
    },

  ];

const getProducts = new Promise((resolve, reject) => {
    //acá simulamos un retraso de red
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
  
  export default getProducts