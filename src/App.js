import { Toaster } from "react-hot-toast";
import Routing from "./router/Routing";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const home = useSelector((state) => state.home);
  console.log("home.loading=>",home.loading)
  return (
    <>
      {home.loading && (
        <div className="spinner-parent">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
      <Routing />
    </>
  );
}

export default App;
