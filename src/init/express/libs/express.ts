export default function createServer({
  json, urlencoded, app, cors, compression, helmet, logger
}) {
  return Object.freeze({ server })

  function server({ host, port }) {
    // const routes = handler.routes
    app.use(helmet());
    app.options('*', cors({ credentials: true, origin: true }));
    app.use(cors());
    app.use(compression());
    app.use(json());
    app.use(urlencoded({ extended: true }))

    app.get('/', (req, res) => {
      logger.info(`Received request: ${req.method}, path: ${req.path}, ip: ${req.ip}`);
      res.json({ data: 'foerzta' });
    });

    app.post('/', (req, res) => {
      logger.info(`Received request: ${req.method}, path: ${req.path}, ip: ${req.ip}`);
      res.json(req.body);
    });

    app.listen(port, host, () => {
      console.log(`Listening on: http://${host}:${port}`);
      return;
    });
  }
}


