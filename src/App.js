import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Category from './components/Category';

function App() {
  const [results, setResults] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResults(data);
      });
  }, []);

  const renderCategories = () => {
    return (
      <div>
        {
          results.map(c =>
            <Category key={c.id} id={c.id} title={c.title} />
          )
        }
      </div>
    );
  };


  return (
    <>
      <header>My Store</header>

      <section>
        <nav>
          {renderCategories()}
        </nav>
        <article>
          main area
        </article>
      </section>

      <footer>
        footer
      </footer>
    </>
  );
}

export default App;


  