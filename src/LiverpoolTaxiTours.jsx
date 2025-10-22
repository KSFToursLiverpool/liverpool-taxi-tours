import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LiverpoolTaxiTours() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
    const url = `https://wa.me/4473793666381?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const tours = [
    {
      title: 'Liverpool Skyline',
      image: 'https://images.unsplash.com/photo-1566328386592-86058b1a8938?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2670',
      desc: 'The iconic waterfront and cityscape of Liverpool.',
    },
    {
      title: 'The Beatles Tour',
      image: 'https://images.unsplash.com/photo-1703237569199-694e272ad3bf?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2277',
      desc: 'Explore the musical history of Liverpool.',
    },
    {
      title: 'Strawberry Field',
      image: 'https://images.unsplash.com/photo-1590327352027-4f2f95180061?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2670',
      desc: 'Visit the legendary Strawberry Field gardens.',
    },
    {
      title: 'Penny Lane',
      image: 'https://images.unsplash.com/photo-1737646021120-1f4c2ef81e19?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1287',
      desc: 'See the iconic street immortalized by The Beatles.',
    },
    {
      title: 'Anfield Stadium',
      image: 'https://images.unsplash.com/photo-1636959961919-985cbee8d6d9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2448',
      desc: 'Home of Liverpool FC.',
    },
    {
      title: 'Conwy Castle',
      image: 'https://images.unsplash.com/photo-1697403471010-5b1b1f51236c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2274',
      desc: 'Historic castle tours.',
    },
    {
      title: 'Manchester Stadium',
      image: 'https://images.unsplash.com/photo-1623607915241-a3151d59a9c8?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=3474',
      desc: 'See Manchester United’s iconic stadium.',
    },
    {
      title: 'Anglican Cathedral',
      image: 'https://images.unsplash.com/photo-1661632359993-9667c4982b1c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2274',
      desc: 'Visit the majestic Liverpool Anglican Cathedral.',
    },
    {
      title: 'Liverpool City Highlights',
      image: 'https://images.unsplash.com/photo-1679339469163-985cf14b7516?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2670',
      desc: 'Experience the best city highlights in Liverpool.',
    },
    {
      title: 'UK-wide Airport Transfers',
      image: 'https://images.unsplash.com/photo-1726410238762-2388af04eadb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2743',
      desc: 'Reliable airport transfers across the UK.',
    },
  ];

  return (
    <div className="bg-neutral-50 text-neutral-900">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src={tours[0].image}
          alt={tours[0].title}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="relative z-10 bg-black/50 p-8 rounded-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Liverpool Taxi Tours & Transfers</h1>
          <p className="text-lg md:text-xl text-white mb-6">
            Explore Liverpool and beyond in comfort with our 6-seater Hackney taxi
          </p>
          <a
            href="https://wa.me/4473793666381"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-700">Our Tours & Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.slice(1).map((tour, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-neutral-50 shadow-lg rounded-2xl overflow-hidden"
            >
              <img src={tour.image} alt={tour.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-700 mb-2">{tour.title}</h3>
                <p className="text-neutral-700">{tour.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-red-700 text-white py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form
          onSubmit={handleWhatsAppSend}
          className="max-w-xl mx-auto bg-white text-neutral-800 p-8 rounded-2xl shadow-lg space-y-4"
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
        <p>© {new Date().getFullYear()} Liverpool Taxi Tours. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
 
             
            
   
