import './scss/main.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Card from './components/Card';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <main>
        <nav>
          <Categories />
          <Sort />
        </nav>
        <section>
          <div class="title">
            <p>
              <span>Все</span> пиццы
            </p>
          </div>
          <div class="pizzas">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
