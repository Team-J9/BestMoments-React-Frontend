export const setItem = (key: string, value: any): void => {
  localStorage.setItem(key, value);
};

export const getItem = (key: string): any => {
  const item = localStorage.getItem(key);
  return item ? item : null;
};

export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};

export const clear = (): void => {
  localStorage.clear();
};
