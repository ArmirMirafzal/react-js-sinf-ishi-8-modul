import ReactDOM from "react-dom/client";
import App from "./app";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
