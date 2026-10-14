import Footer from "@/components/footer/footer";
import MainHeader from "@/components/headers/main-header";
import fetchProfileUser from "@/utils/fetchProfileUser";
import MyAccountShell from "@/components/profile/MyAccountShell";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MyAccount() {
  const head = await fetchProfileUser();
  const cookieStore = await cookies();

  const response = await fetch(`${process.env.NEXT_PUBLIC_FETCH_URL}/api/profile/get`, {
    method: "GET",
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!data?.user) {
    redirect("/");
  }

  return (
    <>
      <MainHeader check={head.user || data.user} />
      <MyAccountShell user={data.user} />
      <Footer />
    </>
  );
}
