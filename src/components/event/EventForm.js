import React, { useContext, useState, useEffect } from "react";
import { EventContext } from "../game/EventProvider";
import { useHistory } from "react-router-dom";

export const EventForm = () => {
    const { createEvent, getEvents } = useContext(EventContext);
    const history = useHistory();
    
    const [currentEvent, setEvent] = useState({
        gamerId: 0,
        description: "",
        gameId: 0,
        date: "",
        time: ""
    });
  
    useEffect(() => {
        getEvents();
    }, []);



    const changeEventState = (domEvent) => {
        const newEventState = {...currentEvent}

        newEventState.gamerId = domEvent.target.value;
        newEventState.description = domEvent.target.value;
        newEventState.gameId = domEvent.target.value;
        newEventState.date = domEvent.target.value;
        newEventState.time = domEvent.target.value;

        setEvent(newEventState)
    };

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Schedule New Event</h2>
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
            {games.map((game) => (
              <option></option>
            ))}
          </select>
        </div>
      </fieldset>

      {/* Create the rest of the input fields */}

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          // Create the event

          // Once event is created, redirect user to event list
        }}
        className="btn btn-primary"
      >
        Create Event
      </button>
    </form>
  );
};