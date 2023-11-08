export const appReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItem = action.payload;

    const isExist = state.basket.find((item) => {
      return item.ASIN === newItem.ASIN;
    });

    if (!isExist) {
      newItem.quantity = 1;

      return {
        ...state,
        basket: [newItem, ...state.basket],
      };
    }

    const newBasket = state.basket.map((item) => {
      if (item.ASIN === newItem.ASIN) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    return {
      ...state,
      basket: newBasket,
    };
  }

  return state;
};
