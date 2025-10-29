import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a0f0a] text-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold animate-bounce">404</h1>
        <h2 className="text-xl md:text-2xl font-bold mt-4">Oops! Page not found</h2>
        <p className="mt-2 text-md md:text-lg text-gray-200">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA transition-colors duration-300"
        >
          Go Home
        </Link>
      </div>

      {/* Floating shapes animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <span className="absolute w-6 h-6 bg-white rounded-full animate-float left-10 top-20 opacity-30"></span>
        <span className="absolute w-4 h-4 bg-white rounded-full animate-float-slow left-32 top-1/2 opacity-20"></span>
        <span className="absolute w-8 h-8 bg-white rounded-full animate-float left-3/4 top-3/4 opacity-25"></span>
      </div>
    </div>
  );
} 