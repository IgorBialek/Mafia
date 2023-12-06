const getMafiaCount = (size: number) => {
  if (size < 8) return 2;
  if (size < 11) return 3;
  if (size < 14) return 4;
  if (size < 17) return 5;
};

export default getMafiaCount;
