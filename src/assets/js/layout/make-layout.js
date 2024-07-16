function createLayout() {
  document.body.innerHTML = `    <header class="header">
    <button id="new-game-button" class="button new-game-btn">New game</button>
    <h1>Nonograms</h1>
    <button id="sound-button" class="sound-button light-button">
      <span class="sound-btn-img sound-bg-on"></span>
    </button>
    </button>
    <div class="change-theme">
      <button id="light-theme" class="theme-button light-button">
        <span class="light-btn-img"></span>
      </button>
      <button id="dark-theme" class="theme-button dark-button">
        <span class="dark-btn-img"></span>
      </button>
    </div>
    <button id="resume-button" class="button controls-button">Resume last game</button>
  </header>
  <div class="wrapper">
    <main id="game" class="game-block">
      <div class="welcome light">
        <div class="start light">
          <button class="button start-button start-game-button">
            Start game
          </button>
          <button class="button start-button results-button">
            Last results
          </button>
          <div class="lvl-buttons">
            <button id="easy-lvl" class="button lvl-button">Easy</button>
            <button id="medium-lvl" class="button lvl-button">Medium</button>
            <button id="hard-lvl" class="button lvl-button">Hard</button>
            <button id="random-lvl" class="button lvl-button">Random</button>
          </div>
        </div>
      </div>
      <div id="game-stats" class="game-controls">
        <button id="save-button" class="button controls-button">Save</button>
        <button id="reset-button" class="button controls-button">
          Reset
        </button>
        <button id="solution-button" class="button controls-button">
          Solution
        </button>
        <p id="game-timer">00:00</p>
      </div>
      <div class="levels-section">
        <button class="button level-button" style="opacity: 1">
          Alarm Clock</button
        ><button class="button level-button" style="opacity: 1">House</button
        ><button class="button level-button" style="opacity: 1">
          Question Mark</button
        ><button class="button level-button" style="opacity: 1">
          Scorpion</button
        ><button class="button level-button" style="opacity: 1">
          Turtle
        </button>
        <button id="back" class="button" style="opacity: 1">BACK</button>
      </div>
      <div class="game-field five">
        <div id="horizontal-tips-field" class="horizontal-tips"></div>
        <div class="fild-layout">
          <div id="vertical-tips-field" class="vertical-tips"></div>
          <div id="block-field"></div>
        </div>
      </div>
      <div class="results-window modal-hidden">
        <p class="win-task">Last Results:</p>
        <p class="result">--Empty--</p>
        <p class="result">--Empty--</p>
        <p class="result">--Empty--</p>
        <p class="result">--Empty--</p>
        <p class="result">--Empty--</p>
        <button class="results-back-button">Back</button>
      </div>
      <div class="game-win">
        <p class="game-win-message">Congratulations You Won</p>
        <p class="game-win-result"></p>
        <button class="game-win-button">Start New Game</button>
      </div>
    </main>
  </div>`;
}

export default createLayout;
