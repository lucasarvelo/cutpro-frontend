export const getId = () => {
  const now = new Date();
  const year = now.getYear();
  const month = now.getMonth();
  const day = now.getDate();
  const time = now.getTime();
  const id = Number(`${year}${month}${day}${time}`);
  return id;
};
