import MainHeader from "@/components/headers/main-header"
import Footer from "@/components/footer/footer"
import Contact from "@/components/contact/contact"
import fetchProfileUser from "@/utils/fetchProfileUser";

export default async function ContactPage() {
    const head = await fetchProfileUser();

    return (
        <>
            <MainHeader check={head.user} />
            <Contact />
            <Footer />
        </>
    )
}