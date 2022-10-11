import React, {useState} from 'react';
import {RequestApi} from "./hw13Api";

const Hw13 = () => {

    let [message, setMessage] = useState('')
    let [error, setError] = useState('')

    return (
        <div>
            <Request setMessage={setMessage} setError={setError}/>
            {error ? error : message}
        </div>
    );
};




type RequestPropsType = {
    setMessage: (message: string) => void
    setError: (error: string) => void
}


const Request = (props: RequestPropsType) => {

    const onClickHandler = () => {
        RequestApi.sendRequest({success: true})
            .then(r => {
                if (r.data) {
                    props.setMessage(r.data.info)

                }
            })
            .catch((error) => {
                props.setError(error.response.data.info)
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })

    }

    return <div>
        <input type={'checkbox'}/>
        <button onClick={onClickHandler}>Submit</button>
    </div>
}

export default Hw13;