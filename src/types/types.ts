export type Guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}
//Herencia de Types
export type CartItem = Guitar & {
    quantity: number;
}
//Lookup


