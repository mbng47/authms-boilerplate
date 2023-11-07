export default function createServer({
  json, urlencoded, app, cors, compression, helmet, logger
}) {
  return Object.freeze({ server })

  function server({ host, port, routes }) {
    // const routes = handler.routes
    app.use(helmet());
    app.options('*', cors({ credentials: true, origin: true }));
    app.use(cors());
    app.use(compression());
    app.use(json());
    app.use(urlencoded({ extended: true }))

    app.use((req, res, next) => {
      logger.info(`Received request: ${req.method}, path: ${req.path}, ip: ${req.ip}`);
      next();
    });

    for (let route of routes) {
      app[route.method](route.path, route.component);
    };

    app.listen(port, host, () => {
      logger.info(`Listening on: http://${host}:${port}`);
      return;
    });
  }
}




