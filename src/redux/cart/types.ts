export type CartItem = {
    type: number;
    size: number;
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    types: number[];
    sizes: number[];
  };
  
  export type CartItemRedux = CartItem & {
    count: number;
  };
  
  export interface CartSliceState {
    totalPrice: number;
    items: CartItemRedux[];
  }
  
