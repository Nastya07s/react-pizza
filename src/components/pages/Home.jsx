import React from 'react';

import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';

function Main() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST}/items`)
      .then((res) => res.json())
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
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
            ? [...Array(8)].map((_, i) => <Skeleton key={i} />)
            : items.map((pizza) => {
                return <PizzaBlock key={pizza.id} {...pizza} />;
              })}
        </div>
      </section>
    </main>
  );
}

export default Main;
