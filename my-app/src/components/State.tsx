import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import { PieChart } from 'react-minimal-pie-chart';

const State = ({state}: any) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <h1>Details for {state.State}</h1> 
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col sm={6}>
                        <Table>
                            <thead>
                                <tr>
                                    <td>State</td>
                                    <td>{state.State}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Confirmed</td>
                                    <td>{state.Confirmed}</td>
                                </tr>
                                <tr>
                                    <td>Recovered</td>
                                    <td>{state.Recovered}</td>
                                </tr>
                                <tr>
                                    <td>Deceased</td>
                                    <td>{state.Deceased}</td>
                                </tr>
                                <tr>
                                    <td>Other</td>
                                    <td>{state.Other}</td>
                                </tr>
                            </tbody>
                        </Table>
                        </Col>
                        <Col>
                        <PieChart
                        
                            data={[
                                { title: 'Recovered', value: state.Recovered, color: 'green' },
                                { title: 'Deceased', value: state.Deceased, color: 'red' },
                                { title: 'Other', value: state.Other, color: 'Other' },
                        ]}
                        style={{height:400}}
                        />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
}

export default State;