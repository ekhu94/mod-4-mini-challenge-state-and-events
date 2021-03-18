import React, { useState, useEffect } from 'react'
import SpiceItem from './SpiceItem'

const SpiceList = props => {
  const [fourStarOnly, setFourStarOnly] = useState(false);
  const [search, setSearch] = useState('');
  const [renderedSpices, setRenderedSpices] = useState(props.spices);

  useEffect(() => {
    if (fourStarOnly) {
      const spices = renderedSpices.filter(s => {
        return s.rating === 4;
      });
      setRenderedSpices(spices);
    }
    const interval = setTimeout(() => {
      if (search.length) {
        const spices = renderedSpices.filter(s => {
          return s.notes.toLowerCase().includes(search.toLowerCase());
        });
        setRenderedSpices(spices);
      }
    }, 1000);

    return () => {
      clearTimeout(interval);
      setRenderedSpices(props.spices)
    };
  }, [search]);

  useEffect(() => {
    if (fourStarOnly) {
      const spices = renderedSpices.filter(s => {
        return s.rating === 4;
      });
      setRenderedSpices(spices);
    }

    return () => {
      setRenderedSpices(props.spices)
    };
  }, [fourStarOnly])

  const renderSpices = () => {
    return renderedSpices.map(s => {
      return <SpiceItem key={s.id} spice={s} />
    });
  }
  return (
    <section className="spice-list">
          <div className="card">
            <h2>Filter Spices</h2>
            <div className="filters">
              <div>
                <label>Search: </label>
                <input 
                  type="text" 
                  placeholder="Search By Tasting Notes..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <label>
                4 Star Only 
                <input 
                  type="checkbox"
                  onChange={ () => setFourStarOnly(!fourStarOnly) }
                />
              </label>
            </div>
          </div>
          {renderSpices()}
        </section>
    );
}

//! class SpiceList extends React.Component {
//   state = {
//     fourStarOnly: false,
//     search: ""
//   }

//   renderSpices() {
//     return this.props.spices.map(spice => (
//       <SpiceItem key={spice.id} spice={spice} />
//     ))
//   }

//   render() {
//     return (
//       <section className="spice-list">
//         <div className="card">
//           <h2>Filter Spices</h2>
//           <div className="filters">
//             <div>
//               <label>Search: </label>
//               <input type="text" placeholder="Search By Tasting Notes..." />
//             </div>
//             <label>
//               4 Star Only <input type="checkbox" />
//             </label>
//           </div>
//         </div>
//         {this.renderSpices()}
//       </section>
//     )
//   }
// }

export default SpiceList;