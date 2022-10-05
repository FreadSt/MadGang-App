import "./style.scss"
import { Link } from "react-router-dom";

export const SecondComponent = (props: {data : any}) => {
    const {data} = props
    return(
        <div className="cards-container">
            {!data || data.length === 0 ? <div/> :
                <Link to={`/secondpage/${data.id}`}>
                    <div className="secondpage-images">
                        <img src={data.flickr_images}/>
                        <h2 className='image-name'>{data.name}</h2>
                    </div>
                </Link>
            }
        </div>
    )
}