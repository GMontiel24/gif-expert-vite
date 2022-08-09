import React, { FC, ChangeEvent, FormEvent, useState } from "react";

interface AddCategoryProps {
    // setCategories: React.Dispatch<React.SetStateAction<string[]>>;
    onNewCategory: (value: string) => void;
}

export const AddCategory: FC<AddCategoryProps> = ({
    onNewCategory
}) => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories(prevState => [...prevState, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Buscar gifs'
                onChange={handleOnChange}
                value={inputValue} />
        </form>
    )
}