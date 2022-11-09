export enum Order {
  DESC = 'desc',
  ASC = 'asc',
}

export enum Field {
  RATING = 'rating',
  PRICE = 'price',
  TITLE = 'title',
}

export enum SortName {
  RATING_DESC = 'polular first',
  RATING_ASC = 'polular last',
  PRICE_ASC = 'price ascending',
  PRICE_DESC = 'price descending',
  TITLE_ASC = 'alfabet',
}

export enum DoughType {
  THIN = 'Thin',
  TRADITIONAL = 'Traditional',
}

export type SortObject = {
  name?: SortName;
  field: Field;
  order: Order;
};
