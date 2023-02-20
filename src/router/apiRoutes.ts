import { Request, Response } from 'express';

const apiRoutes = [
    { method: 'GET',  path: '/rota1', handler: (req: Request, res: Response) => { res.json({ message: 'Olá da rota 1!' }) } },
    { method: 'POST',  path: '/rota2', handler: (req: Request, res: Response) => { res.json({ message: 'Olá da rota 2!' }) } },
    { method: 'DELETE',  path: '/rota3', handler: (req: Request, res: Response) => { res.json({ message: 'Olá da rota 3!' }) } },
]



export default apiRoutes;