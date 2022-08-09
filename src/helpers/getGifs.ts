import { Images } from "../lib";

export const getGifs = async (category: string): Promise<Images[]> => {
    const url = `https://api.giphy.com/v1/stickers/search?api_key=fCTC1lwGiHSJ2jObngR5Orz9pS0V5lB6&q=${category}&limit=10&offset=0&rating=g&lang=en`;
    const response = await fetch(url);
    const { data = [] } = await response.json();
    
    const gifs = data.map((img: any) => {
        return {
            id: img.id,
            title: img.title === '' ? 'Sin titulo' : img.title,
            url: img.images.downsized_medium.url
        } as Images
    });

    return gifs;
}
