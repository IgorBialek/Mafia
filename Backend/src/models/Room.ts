import { PrismaClient } from '@prisma/client';

import getRoomCode from '../utils/getRoomPassword';

const prisma = new PrismaClient();

export default class Room {
  static async createRoom(
    roomName: string,
    roomSize: number,
    isPrivate: boolean
  ) {
    if (isPrivate) {
      var password = await getRoomCode();
    }

    let { uuid: roomID } = await prisma.room.create({
      data: {
        name: roomName,
        size: roomSize,
        isPrivate,
        password,
      },
    });

    return { roomID };
  }

  static async getByQuery(query: string) {
    let rooms = await prisma.room.findMany({
      where: {
        name: {
          contains: query,
        },
      },
    });

    return rooms;
  }
}
