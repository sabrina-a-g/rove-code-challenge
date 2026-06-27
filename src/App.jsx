import { useState, useEffect } from "react";

function Roveiq() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://testapi.io/api/ndenlinger/roveiq")
      .then(res => res.json())
      .then(data => setLocations(data.data.locations.slice(0, 5)));
  }, []);

  return (

    <div className="app">

        <div className="location-list">
            <ul>
               {locations.map(loc => <li key={loc.id}>{loc.name}</li>)}
            </ul>
        </div>

        <div className="location-details">
            <div className="location-image">
            <h1 id="image">--</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <img id="locale-image" alt="location image"></img>
            </div>
        </div>

        <div className="location-logo">
            <h1 id="logo">--</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <img id="locale-logo" alt="SVG from JSON" />
                <h2 id="locale-name">Location Name</h2>
            </div>
        </div>

        <div className="location-info">
            <h1 id="details">--</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <p id="description"></p>
                <div className="dets">
                    <span id="locale-description">Description: </span>
                    <br />
                    <span id="address">Address: </span>
                    <br />
                    <span id="hours">Hours: </span>
                </div>
            </div>
        </div>
        </div>

        <div className="ad-slideshow">
           <a className="prev" onClick="moveSlide(-1)">&#10094;</a>
           <a className="next" onClick="moveSlide(1)">&#10095;</a>
        </div>
        

        <p id="error-msg"></p>

    </div> 
  );
}

export default Roveiq;