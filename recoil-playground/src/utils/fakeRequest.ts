export const fakeRequest = () => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(Math.round(Math.random() * 100));
    }, 1000);
  });
};
