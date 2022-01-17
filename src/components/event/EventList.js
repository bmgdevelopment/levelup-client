import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider.js";
import { useHistory } from "react-router-dom";
import "./Events.css";


export const EventList = () => {
  const { events, getEvents, joinEvent, leaveEvent } = useContext(EventContext);
  const history = useHistory()

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
    <button
      className="btn btn-2 btn-sep icon-create"
      onClick={() => {
        history.push({ pathname: "/events/new"});
      }}
    >
      Schedule New Event
    </button>

    <article className="events">
      <header className="events__header">
        <h1>Level Up Game Events</h1>
      </header>
      {events.map((event) => {
        return (
          <section key={event.id} className="registration">
            <div className="registration__game">{event.game.title}</div>
            <div>{event.description}</div>
            <div>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })} 
               @ {event.time}
            </div>

            <button className="btn btn-2" onClick={() => joinEvent(event.id)}>
              Join
            </button>
          </section>
        );
      })}
    </article>
    </>
  );
};
