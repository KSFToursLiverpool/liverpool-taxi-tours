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
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fdf8f5', color: '#111' }}>
      {/* Header / Hero Section */}
      <header style={{ backgroundColor: '#b00000', color: 'white', padding: '1.5rem', textAlign: 'center' }}>
        <h1 style={{ color: '#ffd700' }}>Liverpool Taxi Tours</h1>
        <a
          href="https://wa.me/447379366381"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#ffd700',
            color: '#b00000',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Book Now on WhatsApp
        </a>
      </header>

      {/* Hero Section Background */}
      <section
        style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          backgroundImage: 'url("https://i.imgur.com/5Wj6uGA.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', position: 'absolute', inset: 0 }}></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Explore Liverpool in Comfort</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
            Private Taxi Tours and Transfers in a 6-Seater Hackney Cab. Beatles, Anfield, Manchester & more!
          </p>
        </motion.div>
      </section>

      {/* 1. Anglican Cathedral */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2>Anglican Cathedral</h2>
        <img
          src="https://i.imgur.com/5ZCykDC.jpeg"
          alt="Anglican Cathedral"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', marginTop: '1rem' }}
        />
      </section>

      {/* 2. Beatles Tour */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#f5f0eb' }}>
        <h2>Beatles Tour</h2>
        <img
          src="https://i.imgur.com/Uqq39gL.jpeg"
          alt="Beatles Tour"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', marginTop: '1rem' }}
        />
      </section>

      {/* 3. City Highlights */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2>City Highlights</h2>
        <img
          src="https://i.imgur.com/NvzuIHt.jpeg"
          alt="City Highlights"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', marginTop: '1rem' }}
        />
      </section>

      {/* 4. Penny Lane */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#f5f0eb' }}>
        <h2>Penny Lane</h2>
        <img
          src="https://i.imgur.com/UxeVbXu.jpeg"
          alt="Penny Lane"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', marginTop: '1rem' }}
        />
      </section>

      {/* 5. Anfield Tour */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2>Anfield Tour</h2>
        <img
          src="https://i.imgur.com/MnQB2O1.jpeg"
          alt="Anfield Tour"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', marginTop: '1rem' }}
        />
      </section>

      {/* 6. Manchester United & City Tours */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#f5f0eb' }}>
        <h2>Manchester United & City Tours</h2>
        <img
          src="https://i.imgur.com/MnQB2O1.jpeg"
          alt="Manchester United & City Tours"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', marginTop: '1rem' }}
        />
      </section>

      {/* 7. UK Airport Transfers */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2>UK Airport Transfers</h2>
        <img
          src="https://i.imgur.com/MnQB2O1.jpeg"
          alt="UK Airport Transfers"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', marginTop: '1rem' }}
        />
      </section>

      {/* Contact Form */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'white', textAlign: 'center' }}>
        <h3 style={{ color: '#b00000', fontSize: '2rem', marginBottom: '1rem' }}>Contact Us</h3>
        <form onSubmit={handleWhatsAppSend} style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.75rem' }}
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.75rem' }}
          />

          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
            style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.75rem' }}
          ></textarea>

          <button
            type="submit"
            style={{
              backgroundColor: '#ffd700',
              color: '#b00000',
              padding: '0.75rem',
              width: '100%',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
            }}
          >
            Send via WhatsApp
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#b00000', color: 'white', textAlign: 'center', padding: '1rem' }}>
        © {new Date().getFullYear()} Liverpool Taxi Tours |{' '}
        <a href="https://wa.me/447379366381" target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700' }}>
          Chat on WhatsApp
        </a>
      </footer>
    </div>
  );
}

