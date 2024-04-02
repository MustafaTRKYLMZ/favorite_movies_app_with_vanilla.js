import { welcomePage } from "./pages/welcomePage.js";

const loadApp = async () => {
  welcomePage();
};

window.addEventListener("load", loadApp);
