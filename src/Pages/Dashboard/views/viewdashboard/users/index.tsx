import useQueryUsers from "../../../../../hooks/query/users/useQueryUsers"
import PageDataLayout from "../layouts/PageDataLayout"

const ViewDashboardUsers = () => {
    const {dataUser, loadingUser, errorUser} = useQueryUsers()
    
    if(loadingUser) return <p>Loading...</p>

    if(errorUser) return <p>Error...</p>

    return (
        <PageDataLayout>
            Users
        </PageDataLayout>
    )
}

export default ViewDashboardUsers