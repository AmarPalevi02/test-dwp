
import { Route, Router } from "react-router-dom";
import Layout from "./pages/Layout";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <AppRoutes>
      <Layout />
    </AppRoutes>
  );
}

export default App;
