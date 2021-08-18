interface CartItem {
    id:number;
    product: string;
    price: number;
    quantity: number;
}

let cart: CartItem[] = [
    {
        id: 1,
        product: "iPhone",
        price: 1000,
        quantity: 1
    },
    {
        id: 2,
        product: "iMac",
        price: 2200,
        quantity: 1
    },
    {
        id: 3,
        product: "iPad",
        price: 1100,
        quantity: 1
    },
    {
        id: 4,
        product: "MacBook Pro",
        price: 2000,
        quantity: 1
    },
    {
        id: 5,
        product: "Apple Watch",
        price: 400,
        quantity: 1
    },
]

export default  cart;

export {CartItem};