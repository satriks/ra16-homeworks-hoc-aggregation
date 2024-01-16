import { v4 } from "uuid"


interface Props {
    list : {month : string, amount : number}[]
}

 export default function MonthTable(props : Props) {
    // console.log('MonthTable', props);

    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <tr>
                    <th>Month</th>
                    <th>Amount</th>
                </tr>

                {props.list.map(item => (
                    <tr key={v4()}>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}

            </table>
        </div>
    );
}