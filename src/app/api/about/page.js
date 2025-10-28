import About from "@/components/about/about"
import StatsCard from "@/components/about/statsCard"
import Feature from "@/components/features/features"
import Footer from "@/components/footer/footer"
import MainHeader from "@/components/headers/main-header"
import Member from "@/components/about/member"

export default function about() {

    return (
        <>
            <MainHeader />
            <About />
            <StatsCard />
            <Member />
            <Feature />
            <Footer />
        </>
    )
}