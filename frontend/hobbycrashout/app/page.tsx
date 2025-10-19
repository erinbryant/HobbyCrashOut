import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      
      {/* Intro Heading Section */}
      <div className="row-start-2 text-center border border-gray-300 dark:border-gray-600 rounded-xl px-6 py-4 bg-white/70 dark:bg-black/50 backdrop-blur-sm shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
          Welcome to HobbyCrashouts!
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mt-2">
          Crash out about your hobby today!
        </h2>
       <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="http://localhost:3000/submissions"
  
          >
            Read our docs
          </a>
      </div>
    </div>
  );
}