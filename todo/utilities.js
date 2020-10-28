//get list element
export function qs(selector) {
  return document.querySelector(selector);
}

// retrieve todos from data store
export function getFromLS(key) {}
// save todos to data store
export function saveToLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
