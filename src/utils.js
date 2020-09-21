export const templateWithContext = (str, context) => {
  let result = str;
  for (const key in context) {
    while (result.includes(key)) {
      result = result.replace(key, context[key]);
    }
  }
  return result;
};

export const frame = async (frames = 1) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, frames);
  });
};

export const omit = (obj, prop) => {
  // eslint-disable-next-line no-unused-vars
  const {[prop]: omit, ..._obj} = obj;
  return _obj;
};
