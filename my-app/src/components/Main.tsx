import { useHistory } from "react-router-dom";
import { Table } from "reactstrap";

const Main = ({data}: any) => {

    const history = useHistory();

    const TableRow = ({data} : any) => {
        return(
            data.map((row: any) => {
                return(
                        <tr key={row.State} onClick={() => history.push(`/state/${row.State}`)}>
                            <td>{row.State}</td>
                            <td>{row.Confirmed}</td>
                            <td>{row.Recovered}</td>
                            <td>{row.Deceased}</td>
                            <td>{row.Other}</td>
                        </tr>
                )
            })
        )
    }
      

        return(
            <>
                <h1>Covid Data for India</h1>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deceased</th>
                            <th>Other</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow data={data} />
                    </tbody>
                </Table>
            </>
        )
    
}

export default Main;