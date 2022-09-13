import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [hexCode, setHexCode] = useState('#FFFFFF');

  return (
    <div>
      <h1
        style={{
          display: 'block',
          width: '400px',
          margin: 'auto',
          padding: '30px',
          color: 'black',
          alignItems: 'center',
        }}
      >
        Random Color Generator
      </h1>
      <div
        style={{
          width: 400,
          height: 200,
          margin: '0 auto',
          display: 'flex',
          backgroundColor: hexCode,
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid black',
          borderRadius: '10px',
        }}
      >
        {`Generated Color:
     ${hexCode}`}
      </div>
      <button
        style={{
          display: 'block',
          width: '200px',
          margin: 'auto',
          marginTop: '20px',
          backgroundColor: 'black',
          border: 'none',
          color: hexCode,
          padding: '20px',
          textAlign: 'center',
          textDecoration: 'none',
          fontSize: '16px',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
        onClick={() => {
          const newHex = randomColor();
          setHexCode(newHex);
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
