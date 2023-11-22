-- CreateTable
CREATE TABLE "Player" (
    "uuid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "roomUuid" TEXT NOT NULL,
    "role" TEXT,
    "ready" BOOLEAN NOT NULL DEFAULT false,
    "isOwner" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Room" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "phase" TEXT NOT NULL DEFAULT 'lobby',

    CONSTRAINT "Room_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Vote" (
    "uuid" TEXT NOT NULL,
    "roomUuid" TEXT NOT NULL,
    "voterUuid" TEXT NOT NULL,
    "targetUuid" TEXT NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_roomUuid_key" ON "Player"("roomUuid");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_roomUuid_fkey" FOREIGN KEY ("roomUuid") REFERENCES "Room"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_roomUuid_fkey" FOREIGN KEY ("roomUuid") REFERENCES "Room"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_voterUuid_fkey" FOREIGN KEY ("voterUuid") REFERENCES "Player"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_targetUuid_fkey" FOREIGN KEY ("targetUuid") REFERENCES "Player"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
