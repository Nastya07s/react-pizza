import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum Order {
  DESC = 'desc',
  ASC = 'asc',
}

export enum Field {
  RATING = 'rating',
  PRICE = 'price',
  TITLE = 'title',
}

enum SortName {
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

interface constantsSliceState {
  typeNames: DoughType[];
  sortObjects: SortObject[];
}

const initialState: constantsSliceState = {
  typeNames: [DoughType.THIN, DoughType.TRADITIONAL],
  sortObjects: [
    { name: SortName.RATING_DESC, field: Field.RATING, order: Order.DESC },
    { name: SortName.RATING_ASC, field: Field.RATING, order: Order.ASC },
    { name: SortName.RATING_ASC, field: Field.PRICE, order: Order.ASC },
    { name: SortName.PRICE_DESC, field: Field.PRICE, order: Order.DESC },
    { name: SortName.TITLE_ASC, field: Field.TITLE, order: Order.ASC },
  ],
};

export const constantsSlice = createSlice({
  name: 'constants',
  initialState,
  reducers: {},
});

export const constantsSelector = (state: RootState) => state.constants;

export default constantsSlice.reducer;
