const data= [
    {
        id: 1,
        title: "Griferia para baño",
        price: 52.272,
        description: "Combo Grif. Monocomando Fv Arizona Lavatorio Bidé Ducha B1",
        img: "/assets/images/grifo1.jpg",
        stock: 6,
        category: "sanitarios",
    },

    {
        id: 2,
        title: "Griferia para cocina",
        price: 13.837,
        description: "Grifo de cocina monocomando FV B1 Arizona 0423/B1 cromo",
        img: "/assets/images/grifo2.jpg",
        stock: 6,
        category: "sanitarios",
    },

    {
        id: 3,
        title: "Griferia para baño",
        price: 28.722,
        description: "Grifería de bañera y ducha FV Arizona 0106/B1 color cromo",
        img: "/assets/images/grifo3.jpg",
        stock: 6,
        category: "sanitarios",
    },
];

export default function getItems(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
};