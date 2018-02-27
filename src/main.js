const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => {
  const result = (num2 === 0) ? 'nao e possivel divisao por zero!' : (num1 / num2);
  return result;
};
export { sum, sub, mult, div };
