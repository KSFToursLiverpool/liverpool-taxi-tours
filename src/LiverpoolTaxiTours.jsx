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
      <header
        style={{
          backgroundColor: '#b00000',
          color: 'white',
          padding: '1.5rem',
          textAlign: 'center',
        }}
      >
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1573705385-1d9c9c3a2e6b")',
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

      {/* Beatles Tour */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2>Beatles Tour</h2>
        <img
          src="https://images.unsplash.com/photo-1573705385-1d9c9c3a2e6b"
          alt="Beatles Tour"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', marginTop: '1rem' }}
        />
      </section>

      {/* Anfield Tour */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem

       
