import fasil from '../images/fasil.jpg';
import locationIcon from '../images/locationIcon.jpg';

export default function Entry() {
  return (
    <div className="cart">
      <div className="box">
        <img 
          src={fasil} 
          alt="Fasil Castle" 
          className="imgContent" 
        />
      </div>
      <div className="entry-content">
        <div className="location-header">
          <img 
            src={locationIcon}
            alt="location icon"
            className="locationIcon"
          />
          <h2 className="countryTitle">Fasil Castle</h2>
          <a 
            href="https://www.google.com/maps/place/Lalibela" 
            className="mapLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Map
          </a>
        </div>
        <p className='date'>Date: 05-06-2025</p>
        <p className='detail'>
          Lalībela, religious and pilgrimage centre in north-central Ethiopia, is famous for its 11 medieval rock-hewn churches built during the reign of King Lalibela.
        </p>
      </div>
    </div>
  );
}