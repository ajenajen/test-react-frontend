import React from 'react';
import './App.css';
import Card from './components/card'

// We're using bulma.io for example styles
// you can use any css styling as you like
import './main.css';


function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8-desktop is-offset-2-desktop">
              <Card />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
