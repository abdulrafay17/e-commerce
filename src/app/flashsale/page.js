
import MainHeader from "@/components/headers/main-header";
import Footer from "@/components/footer/footer";
import FlashSalePage from "@/components/flashsale/flashsalepage";
import fetchProfileUser from "@/utils/fetchProfileUser";

export default async function FlashSale() {
  const head = await fetchProfileUser();

  // SERVER SIDE RENDERING FOR FLASH SALE

    const response = await fetch("http://localhost:3000/api/flashsale", {
      cache: "no-cache",
    });
    const products = await response.json();
  
  // SERVER SIDE RENDERING FOR FLASH SALE ENDED

  return (
    <>
      <MainHeader check={head.user} />
      <FlashSalePage products={products} />
      <Footer />
    </>
  );
}
