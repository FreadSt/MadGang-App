import Axios from "axios"
import React, {useState, useEffect} from "react"
import { CarouselComponent } from "../../components/carousel/CarouselComponent"
import { IData } from "../../components/interfaces"
import { MainComponent } from "../../components/MainComponent"
import { useNavigate } from "react-router-dom";
import "./style.scss"


export const MainPage: React.FC = () => {
    const [objectData, setObjectData] = useState<IData[]>([])
    const navigate = useNavigate()
    
    const handleNav = () => {
        navigate('/secondpage', {replace:true})
    }
    
    useEffect(() => {
        Axios.get(`https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f`)
        .then(res=> {
            console.log(res.data, "res") 
            setObjectData([...objectData, res.data])
            console.log(objectData, "objData")
            return res    
        })
    },[])
    return(
        <div>
            <h1>MadApp</h1>
            <CarouselComponent/>
            <button className="mainpage-btn" onClick={handleNav}>To Dragons</button>
            <div className="data-container">
                {objectData.length ?
                    objectData.map(data =>
                    <MainComponent key={data.name} data={data}/>
                    ) : <MainComponent data={objectData}/>
                }
            </div>
        </div>
    )
}