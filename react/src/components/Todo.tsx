import { Component, createRef, FormEvent, ReactNode, RefObject } from "react";
import "./Todo.css";

interface TodoItem {
  id: number;
  title: string;
  description: string;
}

export interface TodoState {
  store: TodoItem[];
  title: string;
  description: string;
}

export interface TodoProps {
}

class Todo extends Component<TodoProps, TodoState> {
  state: Readonly<TodoState> = {
    title: "",
    description: "",
    store: [],
  };

  todoListRef: RefObject<HTMLUListElement> = createRef<HTMLUListElement>();

  render(): ReactNode {
    return (
      <>
        <div className="todo-app">
          <h1>Todo list</h1>
          <input type="text" onInput={(evt: FormEvent<HTMLInputElement>) => this.onInputSetValue("title", evt)} value={this.state.title} />
          <input type="text" onInput={(evt: FormEvent<HTMLInputElement>) => this.onInputSetValue("description", evt)} value={this.state.description} />
          <button type="button" onClick={this.setTodo}>Add todo</button>
          <ul className="todo-list" ref={this.todoListRef}>{this.generateTodos()}</ul>
        </div>
      </>
    );
  }

  setTodo = (): void => {
    if (this.state.title && this.state.description) {
      this.setState({
        store: [...this.state.store, {
          id: this.state.store.length - 1,
          title: this.state.title,
          description: this.state.description
        }],
        title: "",
        description: ""
      }, () => {
        this.todoListRef.current.children.item(this.state.store.length - 1).animate([
          { opacity: 0 }, { opacity: 1 }
        ], {
          easing: "ease",
          duration: 1000
        });
      });
    }
  }

  generateTodos = (): ReactNode => {
    return this.state.store.map((todo: TodoItem) =>
      <li key={todo.id}>
        <div>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      </li>
    );
  }

  onInputSetValue = (key: string, event: FormEvent<HTMLInputElement>): void => {
    const inputNode: HTMLInputElement = event.target as HTMLInputElement;
    const value: string = inputNode.value;

    this.setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  }
}

export default Todo;
