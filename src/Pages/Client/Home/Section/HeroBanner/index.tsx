import { ImageBurger } from "../../../../../assets/images/burger"
import LayoutContainer from "../../../../../Components/Layouts/LayoutContainer"
import LayoutSection from "../../../../../Components/Layouts/LayoutSection"

const HeroBanner = () => {
    return (
        <LayoutSection className="bg-center bg-cover" style={{backgroundImage: `url(${ImageBurger.heroBg})`}}>
            <LayoutContainer className="h-screen max-w-6xl">
                <h3></h3>
            </LayoutContainer>
        </LayoutSection>
    )
}

export default HeroBanner