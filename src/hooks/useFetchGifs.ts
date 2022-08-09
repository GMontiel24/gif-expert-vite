import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { Images } from "../lib";


export const useFetchGifs = (category: string) => {

    const [images, setImages] = useState<Images[]>([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setisLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
