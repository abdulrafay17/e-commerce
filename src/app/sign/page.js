import LoginSignUpHeader from "@/components/headers/loginSignupHeader"
import SignupPage from "@/components/sign/signup"
import { SignProvider } from "@/context/SignUpContext.js"
import Footer from "@/components/footer/footer"


export default function SignUp() {

    return (
        <>
        <LoginSignUpHeader />
        <SignProvider>
            <SignupPage />
        </SignProvider>
        <Footer />
        </>
    )
}