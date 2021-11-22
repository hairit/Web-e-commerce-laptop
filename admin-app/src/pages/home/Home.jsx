import "./home.css"
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import Chart from "../../components/chart/Chart"
import { userData } from "../../dummyData"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/widgetLg"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analystics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
