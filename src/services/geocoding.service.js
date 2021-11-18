import {geocodingApi} from '@/config/app.config';

export default class GeoCoding {
    static getAddress(latitude, longitude){
        return fetch(geocodingApi + `&latlng=${latitude},${longitude}`)
        .then(res => res.json())
        .then(response => response)
    }
}
    