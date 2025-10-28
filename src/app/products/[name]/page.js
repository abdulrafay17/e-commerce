import MainHeader from "@/components/headers/main-header";
import Footer from "@/components/footer/footer";
import CloseUpProductPage from "@/components/productspage/closeUpProdudcts";
import fetchProfileUser from "@/utils/fetchProfileUser";

export default async function ProductCloseUp({ params }) {
  const head = await fetchProfileUser();
  const { name } = await params;

  const response = await fetch(`http://localhost:3000/api/products/${encodeURIComponent(name)}`, {
    cache: 'no-cache'
  })

  const products = await response.json();

  return (
    <>
      <MainHeader check={head.user} />
      <CloseUpProductPage check={head.success} products={products} /> 
      <Footer />
    </>
  );
}
