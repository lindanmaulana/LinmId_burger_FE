import { NavLink } from "react-router-dom"
import { DataNavlist } from "./types"

const NavList = () => {
    return (
        <nav>
            <ul className="flex items-center gap-8">
                {DataNavlist?.map(list => (
                    <li key={list.id}>
                        <NavLink className={({isActive}) => isActive ? "text-devOrange" : "text-white"} to={list.to}>{list.title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavList