import React, { Suspense } from "react";
import { wrestlers } from "./api";
import { Spinner } from "./components/Spinner";
import Wrestler from "./components/Wrestler";
import WrestlerDetail from "./components/WrestlerDetail";

class App extends React.Component {
  state = {
    currentId: null,
    showDetail: false
  };

  handleWrestlerClick = id => {
    this.setState({ currentId: id, showDetail: true });
  };

  handleGoBack = () => {
    this.setState({ showDetail: false, currentId: null });
  };

  render() {
    const { currentId, showDetail } = this.state;
    return (
      <div className="app">
        {!showDetail ? (
          <div>
            <h2>This is our Home Page</h2>
            {wrestlers.map(wrestler => {
              return (
                <Wrestler
                  wrestler={wrestler}
                  key={wrestler.id}
                  onWrestlerClick={this.handleWrestlerClick}
                />
              );
            })}
          </div>
        ) : (
          <Suspense fallback={<Spinner size="large" />}>
            <WrestlerDetail wrestlerId={currentId} goBack={this.handleGoBack} />
          </Suspense>
        )}
      </div>
    );
  }
}

export default App;
