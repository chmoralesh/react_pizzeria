const miles = (number) => {
  if (isNaN(number)) return number;
  return Number(number).toLocaleString("es-ES");
};

export default miles;
