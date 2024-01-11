import { Request, Response } from 'express';

export class SubjectController {
  async create(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      return res.json('nome obrigatório');
    }

    try {
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
