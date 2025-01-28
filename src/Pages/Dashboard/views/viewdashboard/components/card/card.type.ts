export interface card {
    id: number | string
    title: string
    urlLink: string
    background: string
}

export const dataCard: card[] = [
    {
        id: 1,
        title: "Products",
        urlLink: "/dashboard/products",
        background: "bg-devBlue"
    },
    {
        id: 2,
        title: "Products",
        urlLink: "/dashboard/products",
        background: "bg-devOrange"
    },
    {
        id: 3,
        title: "Products",
        urlLink: "/dashboard/products",
        background: "bg-devGreen"
    },
    {
        id: 4,
        title: "Products",
        urlLink: "/dashboard/products",
        background: "bg-devRed"
    },
]