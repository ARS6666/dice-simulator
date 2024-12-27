import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const dice = document.querySelector("#dice");
    const rollBtn = document.querySelector("#rollBTN");

    if (dice && rollBtn) {
      rollBtn.addEventListener("click", randomDice);
    }

    function randomDice() {
      const random = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
      rollDice(random);
    }

    function rollDice(random) {
      dice.style.animation = "rolling 2s"; // Adjusted the animation duration
      setTimeout(() => {
        dice.style.animation = "none";
        switch (random) {
          case 1:
            dice.style.transform = "rotateX(0deg) rotateY(0deg)";
            break;
          case 6:
            dice.style.transform = "rotateX(180deg) rotateY(0deg)";
            break;
          case 2:
            dice.style.transform = "rotateX(-90deg) rotateY(0deg)";
            break;
          case 5:
            dice.style.transform = "rotateX(90deg) rotateY(0deg)";
            break;
          case 3:
            dice.style.transform = "rotateX(0deg) rotateY(90deg)";
            break;
          case 4:
            dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
            break;
          default:
            break;
        }
      }, 2000); // Adjusted to match the animation duration
    }
  }, []);

  return (
    <>
      <div class="container">
        <div class="dice" id="dice">
          <div class="face front"></div>
          <div class="face back"></div>
          <div class="face top"></div>
          <div class="face bottom"></div>
          <div class="face right"></div>
          <div class="face left"></div>
        </div>
        <button class="roll" id='rollBTN'>
          Roll dice
        </button>
      </div>

    </>
  );
}

export default App;
