export const createUniqueId = () => {
  return Math.round(new Date().getTime() + Math.random());
};
