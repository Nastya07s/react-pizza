import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Response } from './types';

export const fetchPizzas = createAsyncThunk<Response, string>(
  'pizza/fetchPizzas',
  async (preparedSearchParams) => {
    const { data } = await axios.get(`${process.env.REACT_APP_HOST}/items?${preparedSearchParams}`);

    return data as Response;
  },
);
