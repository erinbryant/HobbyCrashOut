import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 gap-16">

      {/* 🔼 Top Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="flex flex-col items-center">
          <div className="w-full h-48 relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/top1.jpg" // Replace with your actual image path
              alt="Top Image 1"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">
            This is the caption for Top Image 1
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full h-48 relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/top2.jpg" // Replace with your actual image path
              alt="Top Image 2"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">
            This is the caption for Top Image 2
          </p>
        </div>
      </div>

      {/* 🎯 Intro Section */}
      <div className="text-center border border-gray-300 dark:border-gray-600 rounded-xl px-6 py-4 bg-white/70 dark:bg-black/50 backdrop-blur-sm shadow-md w-full max-w-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
          Welcome to HobbyCrashouts!
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mt-2">
          Crash out about your hobby today!
        </h2>
        <a
          className="mt-4 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          href="http://localhost:3000/submissions"
        >
          Read our docs
        </a>
      </div>

      {/* 🔽 Bottom Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="flex flex-col items-center">
          <div className="w-full h-48 relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/bottom1.jpg" // Replace with your actual image path
              alt="Bottom Image 1"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">
            This is the caption for Bottom Image 1
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full h-48 relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/bottom2.jpg" // Replace with your actual image path
              alt="Bottom Image 2"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">
            This is the caption for Bottom Image 2
          </p>
        </div>
      </div>
    </div>
  );
}
