import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

const useReduxFood = () => {
    const {categorie, idActive, total} = useSelector((state: RootState) => state.client.FeaturesHomeFood)
    
  return {
    categorie,
    idActive,
    total
  }
}

export default useReduxFood
