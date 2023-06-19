import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DataProvider } from "./context/dataContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DataProvider>
    <App />
  </DataProvider>
);
