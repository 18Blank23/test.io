import working from "@/components/assets/working.avif";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-5xl font-sans font-semibold text-gray-800">
        Oops...
      </h1>
      <Image
        className="rounded-md w-64 h-64 mt-4"
        src={working}
        alt="construction"
      />
      <p className="text-xl font-mono font-semibold mt-4 text-black ">
        We are currently building the page...
      </p>
    </div>
  );
}
