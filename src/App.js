
import React, {useEffect, useState} from "react";
import {getData, getData2} from "./api/api";
// import {getData} from "./api/api";

function App() {

    const[comp, setComp] = useState('')

    useEffect(() =>{
        console.log('JKJKj')
        // getData().then(res =>{
        //     console.log(res)
        // })

        getData2()
    },[])
//200w_53142-184150-3.jpg
    //data/ua-lviv/images/159/53187-913_-8183/____/200w_53187-986304.jpg

    //images/159/53142-_348__1464/____
  return (
    <div>
        HHHH
        <img src={"https://lviv.ua.museum-digital.org/data/ua-lviv/images/159/53142-_348__1464/____/200w_53142-184150-3.jpg"}/>
        {/*<div dangerouslySetInnerHTML={{__html:comp}}>*/}

        {/*</div>*/}
    </div>
  );
}

export default App;
