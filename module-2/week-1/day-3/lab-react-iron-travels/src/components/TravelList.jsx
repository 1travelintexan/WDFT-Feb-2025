import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
const TravelList = () => {
  const [tripsState, setTripsState] = useState(travelPlansData);

  //functions
  function handleDelete(tripId) {
    const filteredArray = tripsState.filter((aTrip) => {
      if (aTrip.id === tripId) {
        return false;
      } else {
        return true;
      }
    });
    console.log("delete clicked", tripId, filteredArray);
    setTripsState(filteredArray);
  }
  return (
    <div>
      {tripsState.map((oneTrip) => {
        return (
          <div key={oneTrip.id} className="trip-card">
            <img src={oneTrip.image} alt="trip image" />
            <section>
              <h5>
                {oneTrip.destination} ( {oneTrip.days} Days )
              </h5>
              <p>{oneTrip.description}</p>
              <h6>Price: {oneTrip.totalCost}$</h6>
              {oneTrip.totalCost <= 350 ? (
                <span className="deal">Great Deal</span>
              ) : null}
              {oneTrip.totalCost >= 1500 ? (
                <span className="premium">Premium</span>
              ) : null}
              {oneTrip.allInclusive ? (
                <span className="premium">All Inclusive</span>
              ) : null}
              <button
                onClick={() => {
                  handleDelete(oneTrip.id);
                }}
              >
                Delete
              </button>
            </section>
          </div>
        );
      })}
    </div>
  );
};
export default TravelList;
