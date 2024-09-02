const universalProxyHandler: ProxyHandler<any> = {
  get(target, property, receiver) {
    const value = Reflect.get(target, property, receiver);

    if (typeof value === "object" && value !== null) {
      // Handle arrays, maps, sets, dates, and regular expressions
      if (Array.isArray(value)) {
        return new Proxy(value, arrayProxyHandler);
      }
      if (value instanceof Map) {
        return new Proxy(value, mapProxyHandler);
      }
      if (value instanceof Date) {
        return new Proxy(value, dateProxyHandler);
      }
      if (value instanceof RegExp) {
        return new Proxy(value, regexpProxyHandler);
      }
      // Recursively proxy objects
      return new Proxy(value, universalProxyHandler);
    }

    return value;
  },

  set(target, property, value, receiver) {
    console.log(`Setting ${String(property)} to ${value}`);
    return Reflect.set(target, property, value, receiver);
  },

  deleteProperty(target, property) {
    console.log(`Deleting ${String(property)}`);
    return Reflect.deleteProperty(target, property);
  },

  // Additional traps can be added here if needed
};

// Proxy handlers for different data structures
const arrayProxyHandler: ProxyHandler<any[]> = {
  get(target, property, receiver) {
    const value = Reflect.get(target, property, receiver);

    if (typeof property === 'symbol' || isNaN(Number(property))) {
      return value;
    }

    // Handle array-specific behavior
    console.log(`Array property ${property} accessed`);
    return value;
  },

  set(target, property, value, receiver) {
    console.log(`Setting array index ${String(property)} to ${value}`);
    return Reflect.set(target, property, value, receiver);
  },

  deleteProperty(target, property) {
    console.log(`Deleting array index ${String(property)}`);
    return Reflect.deleteProperty(target, property);
  },
};

const mapProxyHandler: ProxyHandler<Map<any, any>> = {
  get(target, property, receiver) {
    const value = Reflect.get(target, property, receiver);
    console.log(`Map property ${String(property)} accessed`);
    return value;
  },

  set(target, property, value, receiver) {
    console.log(`Setting map key ${String(property)} to ${value}`);
    return Reflect.set(target, property, value, receiver);
  },

  deleteProperty(target, property) {
    console.log(`Deleting map key ${String(property)}`);
    return Reflect.deleteProperty(target, property);
  },
};

const dateProxyHandler: ProxyHandler<Date> = {
  get(target, property, receiver) {
    const value = Reflect.get(target, property, receiver);
    console.log(`Date property ${String(property)} accessed`);
    return value;
  },

  set(target, property, value, receiver) {
    console.log(`Setting Date property ${String(property)} to ${value}`);
    return Reflect.set(target, property, value, receiver);
  },
};

const regexpProxyHandler: ProxyHandler<RegExp> = {
  get(target, property, receiver) {
    const value = Reflect.get(target, property, receiver);
    console.log(`RegExp property ${String(property)} accessed`);
    return value;
  },

  set(target, property, value, receiver) {
    console.log(`Setting RegExp property ${String(property)} to ${value}`);
    return Reflect.set(target, property, value, receiver);
  },
};

const DefineWebClass = (constructor: CustomElementConstructor): void => {
  constructor.prototype.state = new Proxy(constructor.prototype, universalProxyHandler);
  customElements.define("web-component", constructor);
};

@DefineWebClass
class WebComponent extends HTMLElement {
  private isToggled: boolean;
  private settings: Set<string> = new Set();
  private state: WebComponent;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  connectedCallback(): void {
    this.shadowRoot.innerHTML = /*html*/ `
      <button type="button" aria-checked="false">Toggle Value</button>
    `;

    this.shadowRoot.querySelector("button").addEventListener("click", this.toggleHandler);
  }

  disconnectedCallback(): void {
    this.shadowRoot.querySelector("button").removeEventListener("click", this.toggleHandler);
  }

  private toggleHandler(event: MouseEvent): void {
    const target: HTMLButtonElement = event.target as HTMLButtonElement;
    this.state.isToggled = !this.state.isToggled;
    this.state.settings.add(Math.random().toString(16).slice(2));

    if (this.state.isToggled) {
      target.ariaChecked = "true";
      target.textContent = "Toggle Value - Toggled";
    } else {
      target.ariaChecked = "false";
      target.textContent = "Toggle Value";
    }
  }
}

export default WebComponent;
