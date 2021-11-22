import "./widgetLg.css"

export default function WidgetLg() {

        const Button = ({type}) =>{
            return <button className={"widgetLgButton " + type}>{type}</button>
        }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">
                Latest transactions
            </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://br-art.vn/wp-content/uploads/2017/11/bo-anh-chan-dung-thu-hut-long-nguoi-1.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Vân Mộng</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatuss">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://br-art.vn/wp-content/uploads/2017/11/bo-anh-chan-dung-thu-hut-long-nguoi-1.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Vân Mộng</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatuss">
                        <Button type="Declined"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://br-art.vn/wp-content/uploads/2017/11/bo-anh-chan-dung-thu-hut-long-nguoi-1.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Vân Mộng</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatuss">
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://br-art.vn/wp-content/uploads/2017/11/bo-anh-chan-dung-thu-hut-long-nguoi-1.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Vân Mộng</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatuss">
                        <Button type="Approved"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
