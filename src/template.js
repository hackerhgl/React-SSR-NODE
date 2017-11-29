export default ({ body, title, initialState }) => {
  // <link rel="stylesheet" href="/assets/index.css" />
  return `
    <!DOCTYPE html>
    <html>
      <head>
        ${
          initialState
            ? `<script>window.__APP_INITIAL_STATE__ = ${initialState}</script>`
            : ''
        }
        <title>${title}</title>
      </head>
      
      <body>
        <div id="root">${body ? body : ''}</div>
      </body>
      
      <script src="/assets/bundle.js"></script>
    </html>
  `;
};
