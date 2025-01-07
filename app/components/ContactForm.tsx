export default function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-[#D7CCC8]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg">
            Or call us at:{" "}
            <a
              href="tel:+2347067359660"
              className="font-bold hover:text-[#4CAF50]"
            >
              +234 706 735 9660
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
