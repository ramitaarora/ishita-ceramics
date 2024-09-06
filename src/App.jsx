import { useState, useEffect } from 'react';
import data from './data.json';

export default function App() {
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    if (data.length) {
      // Sort data by things unsold here
      setInventory(data);
    }
  }, [data])

  return (
    <div>
      <header>
        <h1>Ishita's Ceramics</h1>
        <nav>
          <ul>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="inventory-container">
          {inventory.map((item, index) => (
            <div className="inventory-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="inventory-details">
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                <p>{item.sold ? 'Sold!' : null}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>© 2024</p>
      </footer>
    </div>
  )
}