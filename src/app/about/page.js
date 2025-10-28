import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import MainHeader from "@/components/headers/main-header";
import fetchProfileUser from "@/utils/fetchProfileUser";

export default async function about() {
    const head = await fetchProfileUser();

    return(
        <>
        <MainHeader check={head.user} />
        <About />
        <Footer />
        </>
    )
}