import { API } from "../Config";

export const listHotels = () => {
    return fetch(`${API}/hotels/list`, {
        method: "GET",
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {return data;})
};

