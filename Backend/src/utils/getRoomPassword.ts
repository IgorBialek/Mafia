const getRoomCode = () => {
  const random = Math.floor(Math.random() * 1000000); // Adjust the range as needed
  const paddedRandom = String(random).padStart(6, "0"); // Ensure it is 6 digits

  const roomCode = `${paddedRandom}`;

  return roomCode;
};

export default getRoomCode;
