export const appReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItem = action.payload;

    const isExist = state.basket.find((item) => {
      return item.ASIN === newItem.ASIN;
    });

    if (!isExist) {
      newItem.quantity = 1;

      const newBasket = [newItem, ...state.basket];

      localStorage.setItem("basket", JSON.stringify(newBasket));

      return {
        ...state,
        basket: newBasket,
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

    localStorage.setItem("basket", JSON.stringify(newBasket));

    return {
      ...state,
      basket: newBasket,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const newBasket = state.basket.filter((item) => {
      return item.ASIN !== action.payload;
    });

    localStorage.setItem("basket", JSON.stringify(newBasket));

    return {
      ...state,
      basket: newBasket,
    };
  }

  if (action.type === "INCREASE_QUANTITY") {
    const newBasket = state.basket.map((item) => {
      if (item.ASIN === action.payload) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    localStorage.setItem("basket", JSON.stringify(newBasket));

    return {
      ...state,
      basket: newBasket,
    };
  }

  if (action.type === "DECREASE_QUANTITY") {
    const newBasket = state.basket.map((item) => {
      if (item.ASIN === action.payload) {
        const currentQuantity = item.quantity;

        if (currentQuantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return undefined;
        }
      }

      return item;
    });

    const newBasketToAdd = newBasket.filter((e) => e);

    localStorage.setItem("basket", JSON.stringify(newBasketToAdd));

    return {
      ...state,
      basket: newBasketToAdd,
    };
  }

  return state;
};
