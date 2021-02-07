import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import State from "./components/State";

import './App.css';
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";


function App() {
    
    const [data, setData] = useState(new Array());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3100/covid-data`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
    },[]);
    
    if (loading && data === undefined) {
        return (
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
        )
    }

    const StateComponent = (props:any) => {
        return(
            <State state={data.filter(s => s.State === props.match.params.id)[0]} />
        )
    }

  return (
    <BrowserRouter>
    <Header/>
        <Switch>
            <Route path="/state/:id" component={StateComponent} />
            <Route path="/" component={() => (<Main data={data} />) } />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
