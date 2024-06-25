import "./App.css";
import Home from "./components/home/Home.js";
import Services from "./services/Services.js";
import Map from "./map/map.js";
import Dashboard from "./dashboard/Dashboard.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home text={"Hello World"} />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
