import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: []
};

const goodsSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      const { id, quantity: addedQuantity, volume } = payload;
      const newBasket = [...state.basket];
    
      const foundItemIndex = newBasket.findIndex((item) => item.id === id && item.volume === volume);
    
      if (foundItemIndex !== -1) {
        newBasket[foundItemIndex].quantity += addedQuantity;
      } else {
        newBasket.push({ ...payload });
      }
    
      state.basket = newBasket;
    },
    
    deleteFromBasket(state, {payload}) {
      state.basket = state.basket.filter(item => item.id !== payload.id || item.volume !== payload.volume);
    },
    
    clearBasket(state) {
      state.basket = initialState.basket;
    },
    updateBasket: (state, { payload }) => {
      state.basket = payload;
    }
  }
});

export const { addToBasket, deleteFromBasket, clearBasket, updateBasket } = goodsSlice.actions;

export default goodsSlice.reducer;