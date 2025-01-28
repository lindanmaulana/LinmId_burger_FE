import Card from "../components/card/Card"
import { card, dataCard } from "../components/card/card.type"

const DashboardCardData = () => {
    return (
        <div className="grid grid-cols-4 gap-6">
            {dataCard?.map((data: card) => (
                <Card title={data.title} urlLink={data.urlLink} className={data.background} />
            ))}
        </div>
    )
}

export default DashboardCardData