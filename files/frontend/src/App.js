import React, { useEffect, useState } from 'react';

function App() {
  const [customers, setCustomers] = useState([]);
  const [name, setName]       = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/customers')
      .then(res => res.json())
      .then(setCustomers);
  }, []);

  const addCustomer = async () => {
    await fetch('http://localhost:4000/api/customers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Name: name, Address:'', PhoneNumber:'', Email:'' })
    });
    setName('');
    const updated = await fetch('http://localhost:4000/api/customers');
    setCustomers(await updated.json());
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Customers</h1>
      <ul>
        {customers.map(c =>
          <li key={c.CustomerID}>
            {c.Name} (#{c.CustomerID})
          </li>
        )}
      </ul>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="New customer name"
      />
      <button onClick={addCustomer}>Add</button>
    </div>
  );
}

export default App;