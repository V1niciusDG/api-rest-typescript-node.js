import { Request, Response } from 'express';
import { RoomRepository } from '../repositories/roomRepository';
import { VideoRepository } from '../repositories/videoRepository';

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

  async createVideo(req: Request, res: Response) {
    const { title, url } = req.body;
    const { idRoom } = req.params;

    try {
      const room = await RoomRepository.findOneBy({ id: Number(idRoom) });

      if (!room) {
        return res.status(404).json({ message: 'Aula não existe' });
      }

      const newVideo = VideoRepository.create({
        title,
        url,
        room,
      });
      await VideoRepository.save(newVideo);

      return res.status(201).json(newVideo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
