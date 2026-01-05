import MainHeader from "@/components/headers/main-header";
import Hero from "@/components/hero/hero";
import FlashSaleComponent from "@/components/flashsale/flashSale";
import CategoryBrowser from "@/components/browseCategory/browsecategory";
import BestSellingProduct from "@/components/BestSellingProduct/bestSelling";
import SpeakerPromo from "@/components/specialProductSale/specialProduct";
import OurProducts from "@/components/Our Products/ourProducts";
import NewArrival from "@/components/NewArrival/newArrival.jsx";
import Feature from "@/components/features/features";
import Footer from "@/components/footer/footer";

import CartSidebar from "@/components/cart/cartSidebar";
import fetchProfileUser from "@/utils/fetchProfileUser";


export default async function Home() {

  // SERVER SIDE RENDERING FOR FLASH SALE
    const response = await fetch(`${process.env.NEXT_PUBLIC_FETCH_URL}/api/flashsale`, {
      cache: "no-cache",
    });
    const products = await response.json();
    console.log(products)
  // SERVER SIDE RENDERING FOR FLASH SALE ENDED
  // SERVER SIDE RENDERING FOR MAIN HEADER
  
  const head = await fetchProfileUser();
  // SERVER SIDE RENDERING FOR MAIN HEADER ENDED

  return (
    <>
    {/* <CartSidebar check={head.user} /> */}
    <MainHeader check={head.user} />
    <Hero />
    <FlashSaleComponent products={products} />
    <CategoryBrowser />
    <BestSellingProduct />
    <SpeakerPromo />
    <OurProducts />
    <NewArrival />
    <Feature />
    <Footer />  
    </>
  );
}
