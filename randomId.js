export const randomId = () => {
  const randomInt = crypto.getRandomValues(new Uint32Array(1))[0];
  return randomInt.toString(16);
};
