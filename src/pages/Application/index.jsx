// Redux
import { useSelector } from 'react-redux';
import { pageConfig } from '../../redux/slices/reducers/pageReducers';
import Auth from '../Auth';
import Error from '../Error';
import Home from '../Home';
import Map from "../Map";

const Application = () => {
    const { page } = useSelector((state) => state.page);
    const switchComponent = (page) => {
        console.log(page)
        switch(page){
            case pageConfig.home:
                return <Home/>
            case pageConfig.map:
                return <Map/>
            case pageConfig.auth:
                return <Auth/>
            case pageConfig.error:
                return <Error/>
            default:
                return <Home/>
        }
    }
    return (
        <>
            {switchComponent(page)}
        </>
    )
}

export default Application;