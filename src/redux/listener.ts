import { initialStateAuth } from "./slices/auth";
import store from "./store";

const example: null = null;
let currentAuth: initialStateAuth;

const listener = () => {
  const preventAuth = example;

  currentAuth = store.getState().auth;

  if (currentAuth !== preventAuth) {
    localStorage.setItem("auth", JSON.stringify(currentAuth));
  }
};

const listen = () => {
  store.subscribe(listener);
};

export { listen };
