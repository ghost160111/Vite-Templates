import { LitElement, TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import litLogo from "../../assets/lit.svg";
import viteLogo from "/vite.svg";
import styles from "./lit-app.css?inline";
import { parseCss } from "utils/functions/parseCss";
import "../lit-counter/lit-counter";
import "../lit-input/lit-input";
import "../WebComponent";

// THIS MODULE IS AN ENTRY POINT OF YOUR APPLICATION, KEEP IN MIND TO IMPORT ALL OF YOUR ELEMENTS TO THIS MODULE

@customElement("lit-app")
export class LitApp extends LitElement {
  static styles = parseCss(styles);

  @property({ type: String })
  private docsHint: string = "Click on the Vite and Lit logos to learn more";

  @property({ type: Number })
  private count: number = 0;

  protected render(): TemplateResult {
    return html`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          <lit-counter .count="${this.count}"></lit-counter>
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
      <p>Here is the local reference for counter value: ${this.count}</p>
      <lit-input></lit-input>
      <web-component></web-component>
    `
  }

  private _onClick(): void {
    this.count++;
  }
}
