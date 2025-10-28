import BrowseBySubCat from "@/components/browseCategory/browseCategoryCloseUp";
import Footer from "@/components/footer/footer";
import MainHeader from "@/components/headers/main-header";
import fetchProfileUser from "@/utils/fetchProfileUser";

export default async function SubCat({params}) {
    const { subcategories } =  params;
    const head = await fetchProfileUser();

    return (
        <>
            <MainHeader check={head.user} />
            <BrowseBySubCat subcategories={subcategories} />
            <Footer />
        </>
    )
}