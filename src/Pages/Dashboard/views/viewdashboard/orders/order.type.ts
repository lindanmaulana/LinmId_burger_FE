import { IconType } from "react-icons"
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa"

export interface sortData {
    id: number | string
    icon: IconType,
    value: string
}

export const dataSortData: sortData[] = [
    {
        id: 1,
        icon: FaSort,
        value: ""
    },
    {
        id: 2,
        icon: FaSortUp,
        value: "up"
    },
    {
        id: 3,
        icon: FaSortDown,
        value: "down"
    }
]