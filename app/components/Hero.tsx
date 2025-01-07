import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F7F7F7] py-20 relative">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#964B00]">
          Fresh Eggs & Premium Rice
        </h1>
        <p className="text-xl mb-8 text-[#666]">Delivered to Your Doorstep</p>

        <Image
          src="/rice-egg.jpg"
          alt="Fresh eggs and rice"
          width={400}
          height={300}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      </div>
    </section>
  );
}
