import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class Room {
  static async createRoom(roomName: string, roomSize: number) {
    let { uuid: roomID } = await prisma.room.create({
      data: {
        name: roomName,
        size: roomSize,
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
