import { useState } from "react";

export default function LiverpoolTaxiTours() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
    const url = `https://wa.me/447379366381?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const tours = [
    { title: "Liverpool Skyline", image: "https://images.unsplash.com/photo-1566328386592-86058b1a8938?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2670" },
    { title: "Beatles Tour", image: "https://images.unsplash.com/photo-1679339469163-985cf14b7516?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2670" },
    { title: "Strawberry Field", image: "https://images.unsplash.com/photo-1703237569199-694e272ad3bf?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2277" },
    { title: "Penny Lane", image: "https://images.unsplash.com/photo-1590327352027-4f2f95180061?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2670" },
    { title: "Anfield Stadium", image: "https://images.unsplash.com/photo-1737646021120-1f4c2ef81e19?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1287" },
    { title: "Manchester Stadium", image: "https://images.unsplash.com/photo-1636959961919-985cbee8d6d9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2448" },
    { title: "Manchester City Stadium", image: "https://images.unsplash.com/photo-1697403471010-5b1b1f51236c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2274" },
    { title: "Anglican Cathedral", image: "https://images.unsplash.com/photo-1623607915241-a3151d59a9c8?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=3474" },
    { title: "Liverpool City Highlights", image: "https://images.unsplash.com/photo-1661632359993-9667c4982b1c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2274" },
    { title: "UK-wide Airport Transfers", image: "https://images.unsplash.com/photo-1723059518530-1feec72f2771?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2671" },
  ];

  return (
    <div className="font-sans text-neutral-900">

      {/* Header */}
      <header className="bg-red-700 text-white h-14 flex items-center justify-between px-6 md:px-20">
        <h1 className="text-lg font-bold">Liverpool Taxi Tours</h1>
        <a
          href="https://wa.me/447379366381"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded font-semibold transition"
        >
          Book Now on WhatsApp
        </a>
      </header>

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1566328386592-86058b1a8938?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2670"
          alt="Liverpool Skyline"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 bg-black/40 p-6 md:p-12 rounded-lg max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Explore Liverpool in Comfort
          </h2>
          <p className="text-white text-lg md:text-xl">
            Private Taxi Tours and Transfers in a 6-Seater Hackney Cab
          </p>
        </div>
      </section>

      {/* Tour Cards */}
      <section className="py-12 px-6 md:px-20 flex flex-wrap justify-center gap-6">
        {tours.map((tour, i) => (
          <div key={i} className="w-40 flex flex-col items-center">
            <h3 className="text-center text-red-700 font-bold mb-2">{tour.title}</h3>
            <img
              src={tour.image}
              alt={tour.title}
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="bg-red-700 text-white py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form
          onSubmit={handleWhatsAppSend}
          className="max-w-xl mx-auto bg-white text-neutral-900 p-8 rounded-xl shadow-md space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg border border-neutral-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg border border-neutral-300"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-lg border border-neutral-300 h-32"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition"
          >
            Send via WhatsApp
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 text-center py-6">
        <p>© {new Date().getFullYear()} Liverpool Taxi Tours | <a href="https://wa.me/447379366381" className="text-yellow-500">Chat on WhatsApp</a></p>
      </footer>
    </div>
  );
}
