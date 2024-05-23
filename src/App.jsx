import React, { useState } from 'react';

import './App.css'

function App() {
  const morningQuotes = [
    {
      quote: "The morning was full of sunlight and hope.",
      author: "- Kate Chopin"
    },
    {
      quote: "Each morning we are born again. What we do today is what matters most.",
      author: "- Buddha"
    },
    {
      quote: "With the new day comes new strength and new thoughts.",
      author: "- Eleanor Roosevelt"
    },
    {
      quote: "Opportunities are like sunrises. If you wait too long, you miss them.",
      author: "- William Arthur Ward"
    },
    {
      quote: "When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love.",
      author: "- Marcus Aurelius"
    }
  ];


  

  const [currentIndex, setCurrentIndex] = useState(0);

  function nextQuote(){
    setCurrentIndex((currentIndex + 1) % morningQuotes.length)
    }

  return (
    <div className='container'>
      <h2>{morningQuotes[currentIndex].quote}</h2>
      <h3>{morningQuotes[currentIndex].author}</h3>
      <button id='my-btn' onClick={nextQuote}>Next</button>
    </div>
  )
}

export default App
