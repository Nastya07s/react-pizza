import React from 'react';
import './scss/main.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST}/items`)
      .then((res) => res.json())
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <nav>
          <Categories />
          <Sort />
        </nav>
        <section>
          <div className="title">
            <p>
              <span>Все</span> пиццы
            </p>
          </div>
          <div className="pizzas">
            {isLoading
              ? [...Array(6)].map((_, i) => <Skeleton key={i} />)
              : items.map((pizza) => {
                  return <PizzaBlock key={pizza.id} {...pizza} />;
                })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
