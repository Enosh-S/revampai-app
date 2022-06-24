import { signIn } from "next-auth/react";

export default function Login() {
    return (
        <div className=" flex flex-col mx-auto items-center h-screen justify-center">
            <button onClick={signIn} className="btn btn-primary">
             SignIn
            </button>   
        </div>
    )
}