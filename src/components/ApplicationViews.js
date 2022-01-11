import React from "react";
import { Route } from "react-router-dom";
import { GameForm } from "./game/GameForm.js";
import { GameList } from "./game/GameList.js";
import { GameProvider } from "./game/GameProvider.js";

import { EventForm } from "./event/EventForm.js"
import { EventList } from "./event/EventList.js";
import { EventProvider } from "./event/EventProvider.js";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
          padding: "3em",
          border: "1px solid lightgray"
        }}
      >
        <GameProvider>
          <Route exact path="/">
            <h2>Level Up ⭐️ Home Page</h2>
          </Route>

          <Route exact path="/games">
            <GameList />
          </Route>

          <Route exact path="/games/new">
            <GameForm />
          </Route>
        </GameProvider>

        <GameProvider>
          <EventProvider>
            <Route exact path="/events">
              <EventList />
            </Route>

            <Route exact path="/events/new">
              <EventForm />
            </Route>
          </EventProvider>
        </GameProvider>
      </main>
    </>
  );
};
