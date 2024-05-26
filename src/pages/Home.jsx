import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const data = useLoaderData();
  const { user } = useAuth();

  return (
    <div>
      <Banner />
      <Products data={data} />
      <Accordian />
    </div>
  );
};

export default Home;
