import logo from './../img/logo.svg';
import cart from './../img/cart.svg';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Pizza logo" />
        <div className="title">
          <h1>React pizza</h1>
          <span className="desc">The best pizza in the Universe</span>
        </div>
      </div>
      <div className="cart">
        <div className="amount">456$</div>
        <div className="count">
          <img src={cart} alt="Cart" />
          <span>3</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
