import BestSellers from "components/BestSellers";
import GetThemNow from "components/GetThemNow";
import Layout from "components/Layout";
import ShopProduct from "components/ShopProduct";

export default function Home() {
  return (
    <Layout criteria={true}>
      <BestSellers />
      <GetThemNow />
      <ShopProduct />
    </Layout>
  );
}
