export const getFieldValues = <T, K extends keyof T>(data: T[], key: K): T[K][] => {
    return data.map((item) => item[key]);
};
