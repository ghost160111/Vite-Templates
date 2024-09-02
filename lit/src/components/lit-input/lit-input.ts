import { LitElement, TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lit-input")
export class LitInput extends LitElement {
  @property({ type: String })
  private text: string = "";

  constructor() {
    super();
    this.onInputHandler = this.onInputHandler.bind(this);
  }

  protected render(): TemplateResult {
    return html`
      <input
        class="input-text"
        type="text"
        value="${this.text}"
        @input="${this.onInputHandler}"
      />
      <p>Here is the result: ${this.text}</p>
    `;
  }

  private onInputHandler(evt: InputEvent): void {
    const target: HTMLInputElement = evt.target as HTMLInputElement;
    this.text = target.value;
  }
}
