import MainHeader from "@/components/headers/main-header"
import Footer from "@/components/footer/footer"
import CheckoutPage from "@/components/checkout/checkout"
import fetchProfileUser from "@/utils/fetchProfileUser"

export default async function CartPage() {
    const head = await fetchProfileUser()

    return (
    <>
        <MainHeader check={head.user} />
        <CheckoutPage />
        <Footer />
    </>
    )
}