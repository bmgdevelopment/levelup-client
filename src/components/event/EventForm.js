import React, { useContext, useState, useEffect } from "react";
import { EventContext } from "./EventProvider";
import { GameContext } from "../game/GameProvider";
import { useHistory } from "react-router-dom";

export const EventForm = () => {
    const { createEvent, getEvents } = useContext(EventContext);
    const { games, getGames } = useContext(GameContext);
    const history = useHistory();
    const registerDateTime = Date(Date.now()).slice(0, 24) //'Tue Jan 11 2022 01:34:47'
    const dateOnly = registerDateTime.slice(0,15) //'Tue Jan 11 2022' or slice(4, 15) for 'Jan 11 2022'
    const timeOnly = registerDateTime.slice(16) //'01:34:47'


    const [currentEvent, setEvent] = useState({
        gamerId: 0,
        description: "",
        gameId: 0,
        date: "",
        time: "",
        datetime: ""
    });
  
    useEffect(() => {
        getGames();
    }, []);



    const changeEventState = (domEvent) => {
        const newEventState = {...currentEvent}

        newEventState[event.target.name] = domEvent.target.value;
       
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
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            required
            autoFocus
            className="form-control"
            required pattern="\d{4}-\d{2}-\d{2}"
            value={currentEvent.date}
            onChange={changeEventState}
          />
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