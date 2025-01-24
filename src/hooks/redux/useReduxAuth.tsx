import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const useReduxAuth = () => {
    const {role, token} = useSelector((state: RootState) => state.auth)

    return {
        role,
        token
    }
}

export default useReduxAuth