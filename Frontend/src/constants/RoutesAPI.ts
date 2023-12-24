export const API_URL = `http://${process.env.EXPO_PUBLIC_API_ADRRESS}:3000`;

export const ApiRoutes = {
  room: {
    create: `${API_URL}/room/create`,
  },
};
