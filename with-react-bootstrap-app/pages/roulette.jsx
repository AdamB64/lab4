import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import {Container} from "react-bootstrap";
import axios from 'axios'

// Dynamically import the Wheel component to avoid SSR issues
const WheelComponent = dynamic(() => import('../components/wheel'), { ssr: false });

function save(p){
  console.log(p)
  //const url="http://127.0.0.1:8000/api/prize?="
  //axios.post()
}

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
    const p=setPrizeMessage(`You won: ${prizes[prizeNumber]}!`);
    prize(p)
  };

  return (
    <Container>
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
    </Container>
  );
};

export default Roulette;
