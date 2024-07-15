import { Component, ReactNode } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "assets/react.svg";
import "./App.css";

export interface AppState {
  count: number;
}

export interface AppProps {}

class App extends Component<AppProps, AppState> {
  state: Readonly<AppState>;

  constructor(props: AppProps) {
    super(props);

    this.state = {
      count: 0
    }
  }

  render(): ReactNode {
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={this.setCount}>
            count is {this.state.count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }

  public setCount = (): void => {
    this.setState({
      count: this.state.count + 1
    });
  }
}

export default App;
