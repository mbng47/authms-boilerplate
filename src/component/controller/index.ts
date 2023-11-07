import { logger } from '../../logger';

const get = (req, res) => res.json({ data: 'foerzta' });
const post = (req, res) => res.json({ data: req.body });

const routes = [
    { path: '/', method: 'get', component: get },
    { path: '/', method: 'post', component: post },
];

export { routes };