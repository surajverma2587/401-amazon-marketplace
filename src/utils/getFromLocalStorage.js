// utility function that accepts the key name for local storage and a default value
export const getFromLocalStorage = (key, defaultValue) => {
  // get data from local storage for the given key name
  const dataFromLS = localStorage.getItem(key);

  // if data from local storage does not exist return default value
  if (!dataFromLS) {
    return defaultValue;
  }

  // if data from local storage exists parse the string value and return the parsed string value from local storage
  return JSON.parse(dataFromLS);
};
