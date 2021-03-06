import React, { useContext, useState, useEffect } from "react";
import { EventContext } from "./EventProvider";
import { GameContext } from "../game/GameProvider";
import { useHistory } from "react-router-dom";

export const EventForm = () => {
    const { createEvent } = useContext(EventContext);
    const { games, getGames } = useContext(GameContext);
    const history = useHistory();

    const [currentEvent, setEvent] = useState({
        gamerId: 1,
        description: "",
        gameId: 1,
        datetime: ""  
    });
  
    useEffect(() => {
        getGames();
    }, []);


    const changeEventState = (domEvent) => {
        const newEventState = {...currentEvent}

        newEventState[domEvent.target.name] = domEvent.target.value;
       
        setEvent(newEventState)
    };

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Schedule New Event</h2>
      
      {/* AREA FOR GAMER ID? */}

      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            required
            autoFocus
            className="form-control"
            value={currentEvent.description}
            onChange={changeEventState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="gameId">Game: </label>
          <select
            name="gameId"
            className="form-control"
            value={currentEvent.gameId}
            onChange={changeEventState}
          >
            <option value="0">Select a game...</option>
            {games.map((game) => {
              return (
              <option value={game.id} key={game.id}>{game.title}</option>
            )}
            )}
          </select>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="datetime">Date and Time: </label>
          <input
            type="datetime-local"
            name="datetime"
            required
            autoFocus
            className="form-control"
            min="2022-01-01T00:00" 
            max="2029-12-31T00:00"
            value={currentEvent.datetime}
            onChange={changeEventState}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const tConvert = (time) => {
            // Check correct time format and split into components
            time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
          
            if (time.length > 1) { // If time format correct
              time = time.slice (1);  // Remove full string match value
              time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
              time[0] = +time[0] % 12 || 12; // Adjust hours
            }
            return time.join (''); // return adjusted time or original string
          }
          
          const convertTime = tConvert(currentEvent.datetime.slice(11))

          const registeredEvent = {
            gamerId: currentEvent.gamerId,
            description: currentEvent.description,
            gameId: currentEvent.gameId,
            date: currentEvent.datetime.slice(0,10),
            time: convertTime
            }

            createEvent(registeredEvent).then(() => history.push("/events"))
        }}
        className="btn btn-primary"
      > 
        Create Event
      </button>
    </form>
  );
};
