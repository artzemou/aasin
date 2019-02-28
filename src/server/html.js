const Html = ({ body, title, reduxState, styles }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="google-site-verification" content="p14BDIqD5_MS_SZTZJau1LG5wgP4Gp4dCAUNyyuAjvs" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/css/swiper.min.css">
      <link href="https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">


    </head>
    <body>
      <div id="root">${body}</div>
      <script>
         window.__REDUX_STATE__ = ${JSON.stringify(reduxState).replace(/</g, '\\u003c')}
      </script>
      <script src="/public/client.js"></script>
    </body>
  </html>
`;

export default Html;
