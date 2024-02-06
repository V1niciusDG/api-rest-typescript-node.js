import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Video } from '../../videos/entities/Video';
import { Subject } from '../../subjects/entities/Subjects';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => Video, (video) => video.room)
  videos: Video[];

  @ManyToMany(() => Subject, (subject) => subject.rooms)
  subjects: Subject[];
}
