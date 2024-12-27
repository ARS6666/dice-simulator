import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const dice = document.querySelector("#dice");
    const rollBtn = document.querySelector("#rollBTN");
    const text = document.querySelector("#stattext");

    if (dice && rollBtn) {
      rollBtn.addEventListener("click", randomDice);
    }

    function randomDice() {
      const random = Math.floor(Math.random() * 6) + 1;
      rollDice(random);
    }

    function rollDice(random) {
      dice.style.animation = "rolling 3s";
      setTimeout(() => {
        dice.style.animation = "none";
        switch (random) {
          case 1:
            dice.style.transform = "rotateX(0deg) rotateY(0deg)";
            text.textContent = '1'
            break;
          case 6:
            dice.style.transform = "rotateX(180deg) rotateY(0deg)";
            text.textContent = '6'
            break;
          case 2:
            dice.style.transform = "rotateX(-90deg) rotateY(0deg)";
            text.textContent = '2'
            break;
          case 5:
            dice.style.transform = "rotateX(90deg) rotateY(0deg)";
            text.textContent = '5'
            break;
          case 3:
            dice.style.transform = "rotateX(0deg) rotateY(90deg)";
            text.textContent = '3'
            break;
          case 4:
            dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
            text.textContent = '4'
            break;
          default:
            break;
        }
      }, 3050);
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
        <h5 style={{ paddingTop: "40px" }}>YOUR NUMBER :<span id="stattext"></span></h5>
        <button class="roll" id='rollBTN'>
          Roll dice
        </button>
      </div>

    </>
  );
}

export default App;
