import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "./GameProvider.js";
import { useHistory } from "react-router-dom";

export const GameForm = () => {
  const history = useHistory();
  const { createGame, getGameTypes, gameTypes } = useContext(GameContext);


  const [currentGame, setCurrentGame] = useState({
    title: "",
    maker: "",
    gameTypeId: 0,
    numberOfPlayers: 1,
    skillLevel: 1
  });

  useEffect(() => {
    getGameTypes();
  }, []);
 
  
  const changeGameKeys = (event) => {
    const newGameState = {...currentGame };

    newGameState[event.target.name] = event.target.value;

    setCurrentGame(newGameState);
  };
    

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Register New Game</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            className="form-control"
            value={currentGame.title}
            onChange={changeGameKeys}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="maker">Maker: </label>
          <input
            type="text"
            name="maker"
            required
            autoFocus
            className="form-control"
            value={currentGame.maker}
            onChange={changeGameKeys}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="numberOfPlayers">Number of Players ( total numeric quantity ): </label>
          <input
            type="number"
            name="numberOfPlayers"
            required
            min={1}
            max={20}
            autoFocus
            className="form-control"
            value={currentGame.numberOfPlayers}
            onChange={changeGameKeys}
          />
        </div>
      </fieldset>
      
      <fieldset>
        <div className="form-group">
          <label htmlFor="skillLevel">Skill Level: </label>
          <select
            type="number"
            name="skillLevel"
            required
            autoFocus
            className="form-control"
            value={currentGame.skillLevel}
            onChange={changeGameKeys}
          >
            <option value="0">Select a skill level</option>
            <option value="1">Beginner</option>
            <option value="2">Experienced</option>
            <option value="3">Professional</option>
            <option value="4">Expert</option>
          </select>
        </div>
      </fieldset>
      
      <fieldset>
        <div className="form-group">
          <label htmlFor="gameTypeId">Game Type: </label>
          <select
            type="number"
            name="gameTypeId"
            required
            min={1}
            max={20}
            autoFocus
            className="form-control"
            value={currentGame.gameTypeId}
            onChange={changeGameKeys}
          >
            <option value="0">Select a game type</option>
            {gameTypes.map(type => {
              return(
                <option value={type.id} key={type.id}>{type.label}</option>
              )
            })}
          </select>
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault();

          const game = {
            maker: currentGame.maker,
            title: currentGame.title,
            numberOfPlayers: parseInt(currentGame.numberOfPlayers),
            skillLevel: parseInt(currentGame.skillLevel),
            gameTypeId: parseInt(currentGame.gameTypeId),
          };

          // Send POST request to your API
          createGame(game).then(() => history.push("/games"));
        }}
        className="btn btn-primary"
      >
        Create
      </button>
    </form>
  );
}; 
