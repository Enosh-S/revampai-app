import { ImPilcrow } from "react-icons/im";

export default function Writing() {
    return (
        <div>
            <div className="relative max-w-5xl mx-auto py-20">
                <h1 class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg-text-6xl tracking-tight text-center dark:text-white">
                    Revamp your AI content
                </h1>
                <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                   Create a new document and select your usecase
                </p>
                <div class="mt-6 sm:mt-10 flex justify-center">
                <button class="btn btn-primary gap-2 text-slate-100 text-base font-sans capitalize">
                <ImPilcrow size={15}/>
                New Document
                </button>

                </div>

            </div>

        </div>
    )
}