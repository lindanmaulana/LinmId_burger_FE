export interface card {
    id: number | string
    title: string
    urlLink: string
    background: string
}

export const dataCard: card[] = [
    {
        id: 1,
        title: "Orders",
        urlLink: "/dashboard/orders",
        background: "bg-devBlue"
    },
    {
        id: 2,
        title: "Payments",
        urlLink: "/dashboard/payments",
        background: "bg-devOrange"
    },
    {
        id: 3,
        title: "Users",
        urlLink: "/dashboard/users",
        background: "bg-devGreen"
    },
    {
        id: 4,
        title: "Reservations",
        urlLink: "/dashboard/reservations",
        background: "bg-devRed"
    },
]