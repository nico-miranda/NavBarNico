const data= [
    {
        id: 1,
        title: "Griferia para baño",
        price: 52.272,
        description: "Combo Grif. Monocomando Fv Arizona Lavatorio Bidé Ducha B1",
        img: "/assets/images/grifo1.jpg",
        stock: 6,
        category: "sanitario",
    },

    {
        id: 2,
        title: "Griferia para cocina",
        price: 13.837,
        description: "Grifo de cocina monocomando FV B1 Arizona 0423/B1 cromo",
        img: "/assets/images/grifo2.jpg",
        stock: 6,
        category: "sanitario",
    },

    {
        id: 3,
        title: "Griferia para baño",
        price: 28.722,
        description: "Grifería de bañera y ducha FV Arizona 0106/B1 color cromo",
        img: "/assets/images/grifo3.jpg",
        stock: 6,
        category: "sanitario",
    },

    {
        id: 4,
        title: "Martillo legendario",
        price: 10.532,
        description: "Martillo con el que se construyo pinocho",
        img: "/assets/images/martillox.jpg",
        stock: 6,
        category: "carpinteria",
    },
    
    {
        id: 5,
        title: "Masa de thor",
        price: 30.231,
        description: "Masa 20Kg forjada en diamantes de minecraft",
        img: "/assets/images/masa.jpg",
        stock: 6,
        category: "construccion",
    },

    {
        id: 6,
        title: "Cerrucho nordico",
        price: 25.113,
        description: "Cerrucho 40 dientes, acero forjado en skyrim",
        img: "/assets/images/cerrucho.jpg",
        stock: 6,
        category: "carpinteria",
    },
];

export default function getItems(){
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
};

export function getItemsByCategory(cat){
    return new Promise((resolve, reject) => {
      
        let itemFind = data.filter((item)=>
        { return item.category === cat;
        });
        setTimeout(() => {
            if (itemFind) resolve(itemFind);
            else reject(new Error("categoria no encontrada"));   
        }, 1000);
    });
};

export function getItemDetail(idItem) {
    return new Promise((resolve, reject) => {
  
      let itemFind = data.find((item) => {
        return item.id === parseInt(idItem);
      });
      setTimeout( () => {
        if (itemFind) resolve(itemFind);
        else reject(new Error("item no encontrado"));
      }, 1500)
});
}