import ReactDOM from "react-dom/client";

import App from "./app";

import "./assets/css/normalize.css";
import "./assets/css/main.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
