import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LiverpoolTaxiTours() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
    const url = `https://wa.me/447379366381?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-neutral-50 text-neutral-800">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1542037104857-ffbb0b915dcd?auto=format&fit=crop&w=1600&q=80"
          alt="Liverpool Skyline"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="relative z-10 p-6 bg-black/40 rounded-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">Liverpool Taxi Tours & Transfers</h1>
          <p className="text-lg mb-6">Explore the best of Liverpool and beyond in our 6-seater hackney taxi</p>
          <a
            href="https://wa.me/447379366381"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-700">Our Popular Tours</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Liverpool City Highlights',
              image: 'https://images.unsplash.com/photo-1582550945154-66ea8fff3a9b?auto=format&fit=crop&w=1600&q=80',
              desc: 'Discover iconic landmarks and hidden gems across Liverpool.',
            },
            {
              title: 'Beatles Tour',
              image: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=1600&q=80',
              desc: 'Visit Penny Lane, Strawberry Field, and other Beatles landmarks.',
            },
            {
              title: 'Anfield Experience',
              image: 'https://images.unsplash.com/photo-1597423244020-4d8d46e2b5c1?auto=format&fit=crop&w=1600&q=80',
              desc: 'See Liverpool FC’s iconic stadium and experience the passion of Anfield.',
            },
            {
              title: 'Manchester City Tour',
              image: 'https://images.unsplash.com/photo-1603279125998-b00e7fc8eac8?auto=format&fit=crop&w=1600&q=80',
              desc: 'Explore the highlights of Manchester, just a short drive away.',
            },
            {
              title: 'Custom Private Tours',
              image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=80',
              desc: 'Create your own personalized day out to any destination.',
            },
            {
              title: 'Airport Transfers',
              image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80',
              desc: 'Reliable, comfortable transfers to and from all UK airports.',
            },
          ].map((tour, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
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
      <section className="bg-red-700 text-white py-16 px-6 md:px-16">
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

