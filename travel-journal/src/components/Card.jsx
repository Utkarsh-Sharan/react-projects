import "../index.css";

function Card({ prop }) {
  return (
    <>
      <article className="card">
        <img src={prop?.img} alt="Japan-img" className="country-img" />

        <div className="card-content">
          <div className="heading">
            <img
              src="https://img.freepik.com/premium-vector/map-logo-location-vector_607588-10365.jpg?w=2000"
              alt="marker-img"
              className="marker-img"
            />

            <span className="country-name">{prop?.name}</span>

            <a
              href={prop?.mapLink}
              className="map-text"
            >
              View on Google Maps
            </a>
          </div>

          <h1>{prop?.place}</h1>

          <h5>{prop?.date}</h5>

          <p>{prop?.description}</p>
        </div>
      </article>
    </>
  );
}

export default Card;
