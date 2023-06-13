export const getErrorMessage = (str: string) => {
  try {
    const obj: Record<string, string | undefined> = JSON.parse(str);
    return Object.values(obj)[0];
  } catch {
    return undefined;
  }
};
