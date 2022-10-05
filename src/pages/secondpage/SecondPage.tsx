import Axios from "axios"
import React, {useState, useEffect} from "react"
import { IData } from "../../components/interfaces"
import  {SecondComponent}  from "../../components/SecondComponent"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import "./style.scss"


export const SecondPage: React.FC = () => {
    const [objectData, setObjectData] = useState<IData[]>([])
    const navigate = useNavigate()
    const handleNavBack = () => {
        navigate('/', {replace:true})
    }
    let { id } = useParams();
  console.log(id, "param ID")
    useEffect(() => {
        Axios.get(`https://api.spacexdata.com/v4/dragons`)
        .then(res=> {
            console.log(res.data, "res") 
            setObjectData([objectData, ...res.data])
        })
    },[])
    return(
        <div>
            <div className="">
                <button onClick={handleNavBack}>Go Back</button>
            </div>
            <div className="data-container">
                {objectData.length ?
                    objectData.map(data =>
                    <SecondComponent key={data.name} data={data}/>
                    ) : <SecondComponent data={objectData}/>
                }
            </div>
        </div>
    )
}