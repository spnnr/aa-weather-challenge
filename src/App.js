import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="app__cities">
          <button type="button" className="btn"><span className="btn__text btn__text--active">Ottawa</span></button>
          <button type="button" className="btn"><span className="btn__text">Toronto</span></button>
          <button type="button" className="btn"><span className="btn__text">Vancouver</span></button>
        </header>
        <main className="weather">
          <div className="weather__today">Today</div>
          <div className="weather__future">
            <div className="day">other day</div>
            <div className="day">other day</div>
            <div className="day">other day</div>
            <div className="day">other day</div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
