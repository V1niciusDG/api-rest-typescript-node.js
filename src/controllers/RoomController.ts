import { Request, Response } from 'express';
import { RoomRepository } from '../repositories/roomRepository';

export class RoomController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
      const newRoom = RoomRepository.create({ name, description });
      await RoomRepository.save(newRoom);

      return res.status(200).json(newRoom);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
