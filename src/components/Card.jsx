import pizzaBurger from './../img/pizza-burger.png';

function Card() {
  return (
    <div class="card">
      <img src={pizzaBurger} alt="Cheeseburger pizza" />
      <p class="name">Cheeseburger pizza</p>
      <div class="filtres">
        <div class="dough">
          <p class="active">Thin</p>
          <p>Traditional</p>
        </div>
        <div class="size">
          <p class="active">26 sm</p>
          <p>30 sm</p>
          <p>40 sm</p>
        </div>
      </div>
      <div class="total">
        <p class="price">
          from $<span>456</span>
        </p>
        <button class="add">
          <p>+</p>
          <p>Add</p>
          <div class="counter">2</div>
        </button>
      </div>
    </div>
  );
}

export default Card;
