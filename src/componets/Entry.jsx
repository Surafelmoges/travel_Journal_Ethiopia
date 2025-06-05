import fasil from '../images/fasil.jpg';
import locationIcon from '../images/locationIcon.jpg';

export default function Entry(props) {
  return (
    <div className="cart">
      <div className="box">
        <img 
          src={props.imageUrl.src} 
          alt={props.imageUrl.alt} 
          className="imgContent" 
        />
      </div>
      <div className="entry-content">
        <div className="location-header">
          <img 
            src={props.title}
            alt="location icon"
            className="locationIcon"
          />
          <h2 className="countryTitle">{props.country}</h2>
          <a 
            href={props.mapLink}
            className="mapLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Map
          </a>
        </div>
        <p className='date'>{props.date}</p>
        <p className='detail'>
          {props.detail}
          
        </p>
      </div>
    </div>
  );
}