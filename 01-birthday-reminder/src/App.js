import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      {/* html section */}
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {/* Change Request - 9087 - JIRA#3498 */}
        <List people={people} />
        {/* button click is calling setPeople function */}.
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
