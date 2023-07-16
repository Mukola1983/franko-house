// import axios from './axios';
import axios from "axios";




export const getData = async () => {

    try {

        const result = await axios.get(`https://lviv.ua.museum-digital.org/json/object/53142`, {
            // headers: {
            //     responseType: 'application/json; charset=utf-8',
            //     'Access-Control-Allow-Origin': '*',
            // }
        });
        console.log(result.data)
        return result.data
    }catch (e) {
        console.log(e)
    }
};

//https://lviv.ua.museum-digital.org/json/object/52682
//https://lviv.ua.museum-digital.org/json/object/53142
//https://lviv.ua.museum-digital.org/objects?&s=institution%3A159&output=json&mod=complete
export const getData2 = async () =>{
    const response = await fetch("https://lviv.ua.museum-digital.org/json/object/53142");
    // const response = await fetch("https://lviv.ua.museum-digital.org/objects?&s=institution%3A159&output=json&mod=complete");
    const movies = await response.json();
    console.log(movies);
}
