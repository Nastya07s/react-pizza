import './scss/main.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

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
            <PizzaBlock title="Cheesburger" price="395" imgUrl="/img/pizza-burger.png" />
            <PizzaBlock title="Cheese" price="450" imgUrl="/img/pizza-cheese.png" />
            <PizzaBlock title="Asian shrimp" price="290" imgUrl="/img/pizza-shrimps.png" />
            <PizzaBlock title="Cheese chicken" price="385" imgUrl="/img/pizza-chicken.png" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
