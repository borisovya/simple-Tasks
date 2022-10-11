import React, {useState} from 'react';
import {RequestApi} from "./RequestApi";
import {SubmitHandler, useForm} from "react-hook-form";
import loadingGear from '../h10/Pic/preloader.svg'

const Hw13 = () => {

    let [response, setResponse] = useState('')


    return (
        <div>
            <Request setResponse={setResponse}/>
            {response}
        </div>
    );
};


type RequestPropsType = {
    setResponse: (response: string) => void
}


type Inputs = {
    checkbox: boolean
};

const Request = (props: RequestPropsType) => {

    let [disabled, setDisabled] = useState<boolean>(false)

    const {register, handleSubmit} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        setDisabled(!disabled)
        RequestApi.sendRequest({success: data.checkbox})
            .then((response) => {
                setDisabled(disabled)
                if (response) {
                    //console.log(response.data)
                    props.setResponse(response.data.errorText)
                }
            })
            .catch((error) => {
                setDisabled(disabled)
                console.log(error)
                props.setResponse(error.response.data.errorText)
            })

    }


    return <div>

        {disabled && <div><img style={{height: '50px', width: '50px'}} src={loadingGear}/></div>}
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={'checkbox'} {...register("checkbox")} />
            <input disabled={disabled} type="submit"/>
        </form>

    </div>;
}

export default Hw13;