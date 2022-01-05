import React from "react";
import { Route } from "react-router-dom";
import { GameForm } from "./game/GameForm.js";
import { GameList } from "./game/GameList.js";
import { EventList } from "./game/EventList.js";
import { GameProvider } from "./game/GameProvider.js";
import { EventProvider } from "./game/EventProvider.js";

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

        <EventProvider>
          <Route exact path="/events">
            <EventList />
          </Route>
        </EventProvider>
      </main>
    </>
  );
};
