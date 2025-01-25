import { foodCategorie, SET_BURGER, SET_FRIES, SET_PASTA, SET_PIZZA } from "../../redux/slices/client/HomeFood"

export interface actionFoodList {
    id: number | string
    title: string
    setType: foodCategorie
}

export const dataActionFood: actionFoodList[] = [
    {
        id: 1,
        title: "All",
        setType: ""
    },
    {
        id: 2,
        title: "Burger",
        setType: SET_BURGER
    },
    {
        id: 3,
        title: "Pizza",
        setType: SET_PIZZA
    },
    {
        id: 4,
        title: "Pasta",
        setType: SET_PASTA
    },
    {
        id: 5,
        title: "Fries",
        setType: SET_FRIES
    },
]