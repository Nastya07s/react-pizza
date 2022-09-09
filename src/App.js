import './scss/main.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import pizzas from './assets/pizzas.json';

function App() {
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
            {pizzas.map((pizza) => {
              return <PizzaBlock key={pizza.id} {...pizza} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
