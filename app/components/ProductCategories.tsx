import Image from "next/image";
import Link from "next/link";

export default function ProductCategories() {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Image
              src="/egg.jpg"
              alt="Crate of eggs"
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Farm Fresh Eggs</h3>
            <p className="mb-4">
              Delicious, organic eggs from free-range chickens.
            </p>
            <p className="text-lg font-bold mb-4">
              Starting at ₦5,500 per crate
            </p>
            <Link
              href="#order"
              className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-4 rounded inline-block"
            >
              Order Eggs
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Image
              src="/rice-bag.jpg"
              alt="Bag of rice"
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Premium Rice</h3>
            <p className="mb-4">
              High-quality, aromatic rice for all your culinary needs.
            </p>
            <p className="text-lg font-bold mb-4">
              Starting at ₦9,500 per 5kg bag
            </p>
            <Link
              href="#order"
              className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-4 rounded inline-block"
            >
              Order Rice
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
