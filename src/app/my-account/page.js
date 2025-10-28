import Footer from "@/components/footer/footer";
import MainHeader from "@/components/headers/main-header";
import ProfilePage from "@/components/profile/profile";
import fetchProfileUser from "@/utils/fetchProfileUser";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MyAccount() {
  const head = await fetchProfileUser();
  const cookieStore = cookies();
  const token = cookieStore.get("auth_token");

  if (!token) {
    redirect("/");
  }

  // Fetch user info with token
  const response = await fetch(`http://localhost:3000/api/profile/get`, {
    method: "GET",
    headers: {
      Cookie: `auth_token=${token.value}`,
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!data?.user) {
    redirect("/");
  }

  return (
    <>
      <MainHeader check={head.user} />
      <ProfilePage user={data.user} /> {/* Passing user to client component */}
      <Footer />
    </>
  );
}
