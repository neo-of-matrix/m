const request: () => Promise<{
  msg: string;
  code: number;
  data: Record<string, string> | null;
}> = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        msg: "success",
        code: 200,
        data: null,
      });
    }, 3000);
  });
};
export default request;
