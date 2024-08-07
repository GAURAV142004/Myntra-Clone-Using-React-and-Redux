import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import Fetchitems from "../components/fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header></Header>
      <Fetchitems />
      {fetchStatus.currentfetching ? <LoadingSpinner /> : <Outlet />}
      <Footer></Footer>
    </>
  );
}

export default App;
