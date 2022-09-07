import logo from './../img/logo.svg';
import cart from './../img/cart.svg';

function Header() {
  return (
    <header>
      <div class="logo">
        <img src={logo} alt="Pizza logo" />
        <div class="title">
          <h1>React pizza</h1>
          <span class="desc">The best pizza in the Universe</span>
        </div>
      </div>
      <div class="cart">
        <div class="amount">456$</div>
        <div class="count">
          <img src={cart} alt="Cart" />
          <span>3</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
