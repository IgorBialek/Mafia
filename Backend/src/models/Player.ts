import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default class Player {
  static async createPlayer(
    username: string,
    roomID: string,
    isOwner: boolean = false
  ) {
    let { uuid: playerID } = await prisma.player.create({
      data: {
        username,
        isOwner,
        room: {
          connect: {
            uuid: roomID,
          },
        },
      },
    });

    return { playerID };
  }
}
