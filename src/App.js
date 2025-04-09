import Login from "./components/Login";
import Browse from "./components/Browse";
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Login />
      <Browse />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "browse",
    element: <Browse />,
  },
]);

export default App;
