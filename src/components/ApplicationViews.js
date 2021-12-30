import React from "react";
import { Route } from "react-router-dom";
import { GameList } from "./game/GameList.js";
import { GameProvider } from "./game/GameProvider.js";

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
            <GameList />
          </Route>
        </GameProvider>
      </main>
    </>
  );
};
