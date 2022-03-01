import {useEffect} from "react";

const Observer = ({ foodtruckId, lat, lng, didUpdate, truckName, closeAt }) => {
    useEffect(() => {
        if(foodtruckId && truckName)
          didUpdate({foodtruckId, lat, lng, truckName, closeAt});
    }, [lat, lng, didUpdate])
    return null // component does not render anything
}

export default Observer;