import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#964B00] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          G-Splendour Stores
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#products" className="hover:text-[#8BC34A]">
                Products
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#D7CCC8]">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#order"
                className="bg-[#FFC107] hover:bg-[#FF9800] text-white font-bold py-2 px-4 rounded"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
