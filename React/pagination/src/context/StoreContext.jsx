import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = (props) => {


    const [recipes, setRecipes] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setRecipes(data.recipes);
        console.log(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    // pagination................................................

    const PAGE_SIZE = 10;

    const [currPage, setCurrPage] = useState(0);

    const totalRecipes = recipes.length;
    const noOfPages = Math.ceil(totalRecipes / PAGE_SIZE);
    const startPage = currPage * PAGE_SIZE;
    const endPage = startPage + PAGE_SIZE;

    const storeValues = {
        recipes,
        setRecipes,
        noOfPages,
        currPage,
        noOfPages,
        startPage,
        endPage
    }

    return (
        <StoreContext value={storeValues}>
            {props.children}
        </StoreContext>
    )
};

