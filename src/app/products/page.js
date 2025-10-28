import Footer from "@/components/footer/footer";
import MainHeader from "@/components/headers/main-header";
import ProductsPage from "@/components/productspage/productspage";
import fetchProfileUser from "@/utils/fetchProfileUser";


export default async function Products() {
  const head = await fetchProfileUser();
  
  return(
    <>
      <MainHeader check={head.user} />
      <ProductsPage />
      <Footer />
    </>
  )
}