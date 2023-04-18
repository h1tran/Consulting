class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML =
      `<header>
        <nav>
          <ul>
            <li>
              <a href = "index.html">Home</a>
            </li>
            <li>
              <a href = "Services.html">Services</a>
            </li>
            <li>
              <a href = "Contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </header>`;
  }
}

customElements.define('header-component', Header);