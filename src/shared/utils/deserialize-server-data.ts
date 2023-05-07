export const deserializeServerData = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (err) {
    console.log('deserialize', err);
    return {};
  }
};
