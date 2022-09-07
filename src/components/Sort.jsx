import arrow from './../img/arrow.svg';

function Sort() {
  return (
    <div class="sort">
      <img src={arrow} alt="Arrow up" />
      <div class="text">
        <p>
          Sort by <span>popularity</span>
        </p>
      </div>
      <div class="filters">
        <p>popularity</p>
        <p>price</p>
        <p>alfabet</p>
      </div>
    </div>
  );
}

export default Sort;
