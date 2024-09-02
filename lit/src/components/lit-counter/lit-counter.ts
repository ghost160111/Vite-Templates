import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("lit-counter")
export class LitCounter extends LitElement {
  @property({ type: Number })
  private count: number = 10;

  protected render(): TemplateResult {
    return html`
      Count: ${this.count}
    `;
  }
}
