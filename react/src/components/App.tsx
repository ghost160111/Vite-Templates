import { Component, ReactNode } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "assets/react.svg";
import "./App.css";
import Todo from "./Todo";

export interface AppState {
  count: number;
  viteURL: string;
  reactURL: string;
}

export interface AppProps {
  msg: string;
}

class App extends Component<AppProps, AppState> {
  state: Readonly<AppState>;

  constructor(props: AppProps) {
    super(props);

    this.state = {
      count: 0,
      viteURL: "https://vitejs.dev",
      reactURL: "https://react.dev",
    };
  }

  render(): ReactNode {
    return (
      <>
        <div>
          <a href={this.state.viteURL} target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href={this.state.reactURL} target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>{this.props.msg}</h1>
        <div className="card">
          <button onClick={this.setCount}>count is {this.state.count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Todo />
      </>
    );
  }

  public setCount = (): void => {
    this.setState({
      count: this.state.count + 1,
    });
  };
}

export default App;
