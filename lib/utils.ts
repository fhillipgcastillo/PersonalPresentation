export const fetcher = async (url: string): Promise<any> => await fetch(url).then((res) => res.json());
export const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
