import React, { useState } from 'react';
import Layout from '../components/layout';
import dynamic from 'next/dynamic';

// Dynamically import the Wheel component to avoid SSR issues
const WheelComponent = dynamic(() => import('../components/Wheel'), { ssr: false });

const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [prizeMessage, setPrizeMessage] = useState('');

  const prizes = [
    "🍕 Free Pizza",
    "🎟️ Discount Voucher",
    "💵 $10 Cash",
    "🛍️ Free Gift",
    "🚫 Try Again",
  ];

  const handleSpin = () => {
    if (mustSpin) return; // Prevent multiple spins

    const newPrizeNumber = Math.floor(Math.random() * prizes.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setPrizeMessage(`You won: ${prizes[prizeNumber]}!`);
  };

  return (
    <Layout>
      <h1>🎰 Play Roulette</h1>
      <p>Spin the wheel and win exciting prizes!</p>

      <WheelComponent 
        mustSpin={mustSpin} 
        prizeNumber={prizeNumber} 
        onStopSpinning={handleStopSpinning} 
      />

      <button 
        onClick={handleSpin} 
        disabled={mustSpin}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: mustSpin ? 'not-allowed' : 'pointer',
          backgroundColor: mustSpin ? '#ccc' : '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {mustSpin ? "Spinning..." : "Spin the Wheel!"}
      </button>

      {prizeMessage && (
        <h2 style={{ marginTop: '20px', color: '#007bff' }}>{prizeMessage}</h2>
      )}
    </Layout>
  );
};

export default Roulette;
