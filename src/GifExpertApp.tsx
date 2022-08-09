import { FC, useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp: FC = () => {

    const [categories, setCategories] = useState<Array<string>>(['Dragon Ball Z', 'Inuyasha']);


    const onAddCategory = (newCategory: string) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }



    return (
        <>
            <h1>Chispita buscate un gif</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />
            <br />
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}
