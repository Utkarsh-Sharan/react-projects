import "../index.css";

function Card() {
  return (
    <>
      <article className="card">
        <img
          src="https://i.pinimg.com/736x/7f/2d/96/7f2d96104ffadeaaef28267d686d0459.jpg"
          alt="Japan-img"
          className="country-img"
        />

        <div className="card-content">
          <div className="heading">
            <img
              src="https://img.freepik.com/premium-vector/map-logo-location-vector_607588-10365.jpg?w=2000"
              alt="marker-img"
              className="marker-img"
            />

            <span className="country-name">J A P A N</span>

            <a href="#" className="map-text">
              View on Google Maps
            </a>
          </div>

          <h1>Mount Fuji</h1>

          <h5>12 Jan, 2021 - 24 Jan, 2021</h5>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            voluptates deserunt nemo culpa, repellendus rem reiciendis magnam id
            quas animi?
          </p>
        </div>
      </article>
    </>
  );
}

export default Card;
