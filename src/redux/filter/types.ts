import { Field, Order, SortObject } from '../constants/types';

export type SearchParams = {
  category: number;
  sortBy: Field;
  order: Order;
  title: string;
  page: number;
  limit: number;
};

export interface FilterSliceState {
  activeCategoryId: number;
  sort: SortObject;
  searchValue: string;
  currentPage: number;
  limit: number;
}
