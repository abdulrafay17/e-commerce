import { cookies } from "next/headers";


export default async function fetchProfileUser() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token');

    if (!token?.value) return {};
    
    const response = await fetch('http://localhost:3000/api/profile/get', {
        method: 'GET',
        headers: {
            Cookie: `auth_token=${token.value}`
        },
        cache: "no-cache",
    });

    return await response.json();
}