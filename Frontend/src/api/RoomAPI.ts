import axios from 'axios';

import { ResponseAPI } from '../../../Types/ResponseAPI';
import { ApiRoutes } from '../constants/RoutesAPI';
import { CreateRoomFormValues } from '../screens/home/CreateRoomScreen';

export const createRoom = async (
  data: CreateRoomFormValues & { username: string }
) => {
  const { username, name, size, isPrivate } = data;

  return axios.post<ResponseAPI & { roomID: string; playerID: string }>(
    ApiRoutes.room.create,
    {
      username,
      roomName: name,
      roomSize: size,
      isPrivate,
    }
  );
};
