import { createSlice } from '@reduxjs/toolkit';
import storageService from '../../services/storageService';
import { resetApp } from '../actions';

const LOCAL_SALE_LIST = 'saleList';

const saleListSlice = createSlice({
  name: 'saleList',
  initialState: storageService.getFromLocal(LOCAL_SALE_LIST) || {
    saleItems: [],
  },

  reducers: {
    addItem(state, action) {
      const saleItem = action.payload;
      try {
        state.saleItems.push(saleItem);
        storageService.persistInLocal(LOCAL_SALE_LIST, state);
      } catch (error) {
        console.error(`Caught:\n${error}`);
        throw new Error(
          'Could not either no save sale item to state,' +
            'or could not persist the new item to local memory'
        );
      }
    },
    getItem(state, action) {},
    removeItem(state, action) {
      const product = action.payload;
      console.log('[DEBUG] Removing detail with reducer!!!');
      state.saleItems = state.saleItems.filter(
        (item) => item.productId !== product.productId
      );

      storageService.persistInLocal(LOCAL_SALE_LIST, state);
    },
    updateItem(state, action) {
      const updatedItem = action.payload;

      state.saleItems = state.saleItems.map((item) => {
        if (item.productId === updatedItem.productId) return updatedItem;
        return item;
      });

      storageService.persistInLocal(LOCAL_SALE_LIST, state);
    },
    resetSale(state, action) {
      state.saleItems = [];
      storageService.persistInLocal(LOCAL_SALE_LIST, state);
    },
  },
  extraReducers(builder) {
    builder.addCase(resetApp, (state, action) => {
      state.saleItems = [];
      storageService.persistInLocal(LOCAL_SALE_LIST, state);
    });
  },
});

export const { addItem, getItem, removeItem, updateItem } =
  saleListSlice.actions;
export default saleListSlice.reducer;
