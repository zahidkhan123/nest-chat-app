import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('messages')
export class Messages {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20, nullable: true })
    content: string;

}