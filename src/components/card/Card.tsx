import { Results } from '../../interfaces/interfaces'
import './Card.sass'
const Card = (props: Results) => {
  return (
    <div className="card">
      <h1>Artist: {props?.artistName}</h1>
      <h2>Country: {props?.country}</h2>
      <div>
        {props?.trackName && <h3>Track: {props.trackName}</h3>}
        {props?.trackPrice && <h3>Price: {props.trackPrice}</h3>}
      </div>
      <div>
        <h3>Collection: {props?.collectionName}</h3>
        <h3>Price: {props?.collectionPrice}</h3>
      </div>
      {props?.longDescription && <p>Description: {props.longDescription.split('').slice(0, 50).join('')}...</p>}
      <img src={props.artworkUrl100} alt={props.artistName} width={100} height={100} />
    </div>
  )
}

export default Card
