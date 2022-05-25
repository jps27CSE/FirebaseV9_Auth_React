import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }
    if (!authToken) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      Home
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};
export default Home;
