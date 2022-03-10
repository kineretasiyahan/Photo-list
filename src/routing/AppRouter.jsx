import { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Home from '../components/pages/home/Home';
import AddPhoto from '../components/pages/photo/AddPhoto'
import CurrentPhoto from "../components/pages/photo/CurrentPhoto";
import { getData } from '../services/service';

const AppRouter = () => {
    const [data, setData] = useState([]);
    useEffect(async() => {
        await getData()
        .then((response) => setData(response))
        .catch((error) => {
          return error;
        });
      }, []);
    return (
        <div>
            <Switch>
                <Route exact path="/" ><Home setData={setData} data={data}/></Route>
                <Route path="/AddPhoto" ><AddPhoto setData={setData} data={data}/></Route>
                <Route path='/CurrentPhoto' ><CurrentPhoto setData={setData} data={data}/></Route>
            </Switch>
        </div>
    )
}
export default AppRouter;