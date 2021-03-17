import React, { useState } from 'react';
import StarRating from './StarRating';

const SpiceItem = props => {
  const { image, title, description, notes, rating } = props.spice
  const [liked, setLiked] = useState(false);

  return (
      <div className="spice-item card">
        <img src={image} alt={title} />
        <div className="details">
          <button className="favorite">
            <span 
              role="img" 
              aria-label="heart"
              onClick={() => setLiked(!liked)}
            >
              {liked ? "🤍" : "♡"}
            </span>
          </button>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Tasting Notes: <em>{notes}</em></p>
          <div>Rating: <StarRating percentage={rating / 5} /></div>
        </div>
      </div>
  )
}

//! class SpiceItem extends React.Component {


//   render() {
//     const { image, title, description, notes, rating } = this.props.spice
//     return (
//       <div className="spice-item card">
//         <img src={image} alt={title} />
//         <div className="details">
//           <button className="favorite">
//             <span 
//               role="img" 
//               aria-label="heart"
//               onClick={() => setLiked(!liked)}
//             >
//               {/* TODO: find a way to toggle this value when the button is clicked!  */}
//               {liked ? "🤍" : "♡"}
//             </span>
//           </button>
//           <h2>{title}</h2>
//           <p>{description}</p>
//           <p>Tasting Notes: <em>{notes}</em></p>
//           <div>Rating: <StarRating percentage={rating / 5} /></div>
//         </div>
//       </div>
//     )
//   }
// }

export default SpiceItem;