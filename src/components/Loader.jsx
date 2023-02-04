import { PacmanLoader } from "react-spinners";

function Loader() {
  return (
    <div className="sweet-loading min-h-screen grid justify-center items-center">
      <PacmanLoader
        color={"#727E7A"}
        
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;