export function saveToStorage(key, value) {
  let stringifiedValue = JSON.stringify(value);
  localStorage.setItem(key, stringifiedValue);
}

export function loadFromStorage(key) {
  const stringValue = localStorage.getItem(key);
  return JSON.parse(stringValue);
}
