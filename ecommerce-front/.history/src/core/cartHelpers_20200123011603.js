export const addItem = (item = [], next) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    if (cart.length > 0) {
      let index = -1;
      for (var i = 0; i < cart.length; i++) {
        if (cart[i]._id === item._id) {
          index = i;
        }
      }
      console.log(index);
      if (index === -1) cart.push({ ...item, count: 1 });
      else cart[index].count = cart[index].count + 1;
    } else {
      cart.push({ ...item, count: 1 });
    }
    console.log(cart);

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};
export const itemTotal = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart")).length;
    }
  }
  return 0;
};
export const getCart = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
  return [];
};
export const updateItem = (productId, count) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.map((product, i) => {
      if (product._id === productId) cart[i].count = count;
    });
  }
};
