export const fetcher = async (url: string):Promise<any> => await fetch(url).then((res) => res.json());
