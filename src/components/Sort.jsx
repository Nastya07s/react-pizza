import arrow from './../assets/img/arrow.svg';

function Sort() {
  return (
    <div className="sort">
      <img src={arrow} alt="Arrow up" />
      <div className="text">
        <p>
          Sort by <span>popularity</span>
        </p>
      </div>
      <div className="filters">
        <p>popularity</p>
        <p>price</p>
        <p>alfabet</p>
      </div>
    </div>
  );
}

export default Sort;
