import Hero from "../../components/Hero";
import Layout from "../../components/Layout";

const Home = () => (
  <Layout className="z-10 relative">
    <div className="container z-10 relative flex flex-col px-6 mx-auto mt-32">
      <Hero />
    </div>
  </Layout>
);

export default Home;
