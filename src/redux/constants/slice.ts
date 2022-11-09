import { createSlice } from '@reduxjs/toolkit';
import { DoughType, Field, Order, SortName, SortObject } from './types';

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

export default constantsSlice.reducer;
