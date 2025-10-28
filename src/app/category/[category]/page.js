import Footer from "@/components/footer/footer";
import MainHeader from "@/components/headers/main-header";
import CategoryProductsPage from "@/components/productspage/categoryproductpage";
import fetchProfileUser from "@/utils/fetchProfileUser";

export default async function CategoryPage({ params }) {
    const head = await fetchProfileUser()
;    return(
      <>
      <MainHeader check={head.user} />
      <CategoryProductsPage params={params} />
      <Footer />
      </>
    )
}