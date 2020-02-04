export const addItem = (item, next) => {
  console.log(item);
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({ ...item, count: 1 });
    console.log(cart);
    cart = Array.from(new Set(cart.map(p => p._id))).map(id => {
      return cart.find(p => p.id === id);
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};
