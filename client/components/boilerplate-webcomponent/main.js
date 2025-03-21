import { html, css, LitElement } from 'lit';

export class BoilerplateWebcomponent extends LitElement {
  // createRenderRoot() {
  //   return this;
  // }

  static styles = css`
    p {
      color: #444;
    }

    @media (prefers-color-scheme: dark) {
      p {
        color: white;
      }
    }

    .tasks-guide {
      font-family:
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        sans-serif;
      padding: 1rem;
      border-radius: 8px;
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      max-width: 600px;
      margin: 1rem auto;
    }

    h3 {
      margin-top: 0;
      color: #0d6efd;
    }

    ul {
      padding-left: 1.5rem;
    }

    li {
      margin-bottom: 0.5rem;
    }

    code {
      background-color: #e9ecef;
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family: monospace;
    }

    @media (prefers-color-scheme: dark) {
      .tasks-guide {
        background-color: #212529;
        border-color: #495057;
        color: #e9ecef;
      }

      h3 {
        color: #6ea8fe;
      }

      code {
        background-color: #343a40;
        color: #e9ecef;
      }
    }
  `;

  static properties = {
    name: { type: String }
  };

  constructor() {
    super();
    this.name = 'webcomponent';
  }

  render() {
    return html`
      <div class="tasks-guide">
        <h3>Available pnpm tasks:</h3>
        <ul>
          <li>
            <strong>pnpm dev</strong>: Starts the server in dev mode. Concurrently runs nodemon,
            browsersync and esbuild. Exposes nodemon to the chrome dev tools via the
            <code>--inspect</code> flag.
          </li>
          <li><strong>pnpm client</strong>: Concurrently runs browsersync and esbuild.</li>
          <li>
            <strong>pnpm nodemon</strong>: Starts the server with nodemon to watch for changes and
            restart the server automatically. Exposes nodemon to the chrome dev tools via the
            --inspect flag.
          </li>
          <li>
            <strong>pnpm browsersync</strong>: Starts the browsersync server to watch for changes in
            the client files and reload the browser automatically.
          </li>
          <li>
            <strong>pnpm esbuild</strong>: Starts the esbuild server to watch for changes in the
            client files and rebuild the client files automatically.
          </li>
          <li><strong>pnpm start</strong>: Starts the server in production mode. Express only.</li>
        </ul>
        <p>Customize these tasks on the project's <code>package.json</code>.</p>
      </div>
    `;
  }
}

customElements.define('boilerplate-webcomponent', BoilerplateWebcomponent);
