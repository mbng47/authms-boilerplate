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
    app.use(json()); // app.use(express.json());
    app.use(urlencoded({ extended: true })) // app.use(express.urlencoded());

    app.get('/', (req, res) => {
      // res.end('foerzta');
      res.json({ data: 'foerzta' });
    });

    app.listen(port, host, () => {
      console.log(`Listening on: http://${host}:${port}`);
      return;
    });
  }
}

