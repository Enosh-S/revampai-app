import { signIn } from "next-auth/react";

export default function Login() {
    return (
        <div class=" flex flex-col mx-auto items-center h-screen justify-center">
            <button onClick={signIn} class="btn btn-primary">
             SignIn
            </button>   
        </div>
    )
}