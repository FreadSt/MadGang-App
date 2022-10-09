import Axios from "axios"
import React, {useState, useEffect} from "react"
import { IData } from "../../components/interfaces"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import "./style.scss"


export const ThirdPage: React.FC = () => {
    const [objectData, setObjectData] = useState<IData|null>()
    const navigate = useNavigate()
    const handleNavBack = () => {
        navigate('/secondpage', {replace:true})
    }
    const handleNav = () => {
        navigate('/', {replace:true})
    }
    let { id } = useParams();
  console.log(id, "param ID")
    useEffect(() => {
        Axios.get(`https://api.spacexdata.com/v4/dragons/${id}`)
        .then(res=> {
            console.log(res.data, "res") 
            setObjectData(res.data)
        })
    },[])
    return(
        <div className="data-container">
            <div className="list-btn">
                <button onClick={handleNavBack}><span>Return</span></button>
            </div>
            
            <div className="list-box">
              <img src={objectData?.flickr_images}/>
              <h2 className='image-name'>{objectData?.name}</h2>
              <div className='description'>Description: 
                    <p>{objectData?.description}</p>
              </div>
              <a href={objectData?.wikipedia}>Link to Wiki</a>
              <p>Date: {objectData?.first_flight}</p>
              <p>Weight: {objectData?.dry_mass_kg}</p>
            </div>

            <div className="list-btn">
                <button onClick={handleNav}><span>To Main Page</span></button>
            </div>
        </div>
    )
}