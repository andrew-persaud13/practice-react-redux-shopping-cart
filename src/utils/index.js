export const capitalize = value => {
  if (!value) return;
  return value
    .split(' ')
    .map(v => v[0].toUpperCase() + v.slice(1))
    .join(' ');
};
export const countCartItems = cart =>
  Object.keys(cart).reduce((acc, key) => {
    return acc + cart[key];
  }, 0);

export const calculateTotal = (cart, items) =>
  items.reduce((acc, item) => {
    return acc + item.price * cart[item._id];
  }, 0);
