import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx'

const city = 'New York City';
const boroughNum = 5;
const year = 2025;
const image =
  'https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const summerStyle = {
  color: 'orange',
  backgroundColor: 'lightgreen',
  border: '4px dashed lightcoral',
  padding: '10px',
  borderRadius: '8px',
  width: '300px',
};

summerStyle.color = 'blue';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <div>
    <h1 style={summerStyle}>Hello {city}!</h1>
    <p className='earlySummerStyle'>
      Greetings from {boroughNum} boroughs of {city} --- @{year}
    </p>
    <img style={{ width: '300px' }} src={image} />

    <footer>
      
    </footer>
  </div>
);
