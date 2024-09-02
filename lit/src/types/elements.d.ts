import { LitApp } from "components/lit-app/lit-app";
import { LitCounter } from "components/lit-counter/lit-counter";

/**
 * @description
 * Declare all of your elements here.
 */
declare global {
  interface HTMLElementTagNameMap {
    "lit-app": LitApp;
    "lit-counter": LitCounter;
  }
}
