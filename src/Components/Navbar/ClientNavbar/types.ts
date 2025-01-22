export interface navlist {
    id: number
    title: string
    to: string
}

export const DataNavlist: navlist[] = [
    {
        id: 1,
        title: "HOME",
        to: "/"
    },
    {
        id: 2,
        title: "MENU",
        to: "/menu"
    },
    {
        id: 3,
        title: "ABOUT",
        to: "/about"
    },
    {
        id: 4,
        title: "BOOK TABLE",
        to: "/book-table"
    },
]