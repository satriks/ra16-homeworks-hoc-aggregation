import { v4 } from "uuid"

interface Props {
    list : {date : string, amount : number}[]
}

export default function SortTable(props : Props) {
    // console.log('SortTable', props);

    return (
        <div>
            <h2>Sort Table</h2>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr key={v4()}>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}