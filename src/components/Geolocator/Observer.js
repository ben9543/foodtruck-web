import {useEffect} from "react";

const Observer = ({ foodtruckId, lat, lng, didUpdate, name }) => {
    useEffect(() => {
        if(foodtruckId && name)
          didUpdate({foodtruckId, lat, lng, name});
    }, [lat, lng, didUpdate])
    return null // component does not render anything
}

export default Observer;