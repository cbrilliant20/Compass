import "./Resources.css"
import { resources } from "../../Assets/ResourcesData"


const Resources = () => {


  return (
    <div className="resources-container">
      <h1> Travel Resources</h1>
      <div className="resource-card-container">
        <h2>Flights</h2>
        
          {resources.map((item) => (
            <div className="resource-card">
              <img src={item.imgUrl} alt="" className="resource-card-img" />
              <div className="resource-card-content">
              <p className="resource-card-name">{item.name} <br/> {item.description}</p>
              <button className="resource-card-button"><a href={item.siteUrl} target="_blank">Visit</a></button>
              </div>
              </div>
          ))}

        </div>
        
      </div>
  )
}

export default Resources