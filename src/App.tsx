import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "@/styles/app.global.scss";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
