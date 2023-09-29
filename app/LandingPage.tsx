import { useState, useEffect } from "react";
import { BsChat } from 'react-icons/bs';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const LandingPage = () => {

    const [word, setWord] = useState("simple");
    
    const words = ["simple.", "fast.", "easy.", "fun."];
    
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    const type = async () => {
        currentWord = words[i];
        if (isDeleting) {
            setWord(currentWord.substring(0, j - 1));
            j--;
            if (j == 0) {
                isDeleting = false;
                i++;
                if (i == words.length) {
                    i = 0;
                }
            }
        } else {
            setWord(currentWord.substring(0, j + 1));
            j++;
            if (j == currentWord.length) {
                await delay(3000);
                isDeleting = true;
            }
        }

        setTimeout(type, 350);
    }

    useEffect(() => {
        type();
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <nav className="flex flex-wrap items-center justify-center p-6 border-b sm:row">
                <div className="flex items-center justify-between flex-grow w-full space-x-4 sm:justify-normal sm:w-fit">
                    <BsChat className="w-8 h-8" />
                    <h1>Message App</h1>
                </div>
                <div className="flex flex-col items-center mt-2 space-y-4 sm:mt-0 sm:space-y-0 sm:flex-row sm:space-x-4 sm:justify-end">
                    <a href="/">
                        Home
                    </a>
                    <a href="#responsive-header">
                        About
                    </a>
                    <a href="/api/auth/login" className="p-2 text-white bg-black rounded-lg">Log In</a>
                </div>
            </nav>

            <section className="flex items-center justify-center flex-grow">
                <h1 className="mb-32 text-6xl">Messaging made <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-600 via-red-600 to-rose-600 animate-text-gradient">{word}</span><span className="animate-fade-loop">|</span></h1>
            </section>
        </div>
    );
}
export default LandingPage;