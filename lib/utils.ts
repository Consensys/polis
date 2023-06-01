export const createFilefromData = async (
  data: any,
  fileName: string
): Promise<File> => {
  const buffer = Buffer.from(JSON.stringify(data));

  const file = new File([buffer], fileName);
  return file;
};
