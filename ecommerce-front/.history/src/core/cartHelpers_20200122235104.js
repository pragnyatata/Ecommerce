export const addItem = (item = [], next) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    if (cart.length > 0) {
      let index = cart.indexOf(item);
      if (index === -1) cart.push({ ...item, count: 1 });
      else cart[index].count = cart[index].count + 1;
    }
    cart = Array.from(new Set(cart.map(p => p._id))).map(id => {
      return cart.find(p => p.id === id);
    });
    console.log(cart);

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};
