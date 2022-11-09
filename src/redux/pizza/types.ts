export type Response = {
  items: PizzaItem[];
  count: number;
};

export type PizzaItem = {
  id: number;
  imageUrl: string;
  title: string;
  desc: string;
  types: number[];
  sizes: number[];
  price: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'rejected',
}
