import React, { Component } from "react";
import CardImage from "../common/CardImageAesthetics";
//import "./AestheticsGrid.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getServices } from "../../actions/servicesActions";
import image1 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image2 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image3 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image4 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image5 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image6 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image7 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image8 from "../../assets/img/aesthetics_service_hairremoval.jpg";

class AestheticsGrid extends Component {
  constructor(props) {
    super(props);
    this.props.getServices();
  }
  componentDidMount() {
    
   //this.props.getServices()
  
    /* axios.get('/api/services/all')
    .then(res => console.log(`componentDidMount - ${JSON.stringify(res.data)}`)); */
  }
  render() {
   /*  const services = [
      {
        id: 1,
        title: "Laser Hair Removal",
        textMain: "long lasting hair removal",
        textSecondary: "long lasting hair removal",
        imgSRC: image1
      },
      {
        id: 2,
        title: "Botox",
        textMain: "look years younger",
        textSecondary: "look years younger",
        imgSRC: image2
      },
      {
        id: 3,
        title: "SculpSure",
        textMain: "ideal for waistline",
        textSecondary: "ideal for waistline",
        imgSRC: image3
      },
      {
        id: 4,
        title: "Acne Scars",
        textMain: "you don't need to live with them!",
        textSecondary: "you don't need to live with them!",
        imgSRC: image4
      },
      {
        id: 5,
        title: "JuveDerm",
        textMain: "specialized dermal fillers",
        textSecondary: "specialized dermal fillers",
        imgSRC: image5
      },
      {
        id: 6,
        title: "SkinCare",
        textMain: "expert advice and guidance",
        textSecondary: "expert advice and guidance",
        imgSRC: image6
      },
      {
        id: 7,
        title: "Weight Loss",
        textMain: "personalized health protocols",
        textSecondary: "personalized health protocols",
        imgSRC: image7
      },
      {
        id: 8,
        title: "IPL",
        textMain: "remove wrinkles and other blemishes",
        textSecondary: "remove wrinkles and other blemishes",
        imgSRC: image8
      }
    ]; */
    

   const { services } = this.props.services;
    let serviceItems;

      if(services === null) {
        serviceItems = <h4>No services found...</h4>;
      } 
      else {if (services.length > 0 ) {
        serviceItems = services.map((service, index) => (
          <div className="col-6">
          <CardImage key={service._id} title={service.heading} textMain={service.description1} imgSRC= {image1} /></div>
        ));
      } else {
        serviceItems = <h4>No services found...</h4>;
      }}
      
    
   
  //const servicesContent = (<div><h1>SERVICES GRID</h1></div>)

/*     const servicesContent = services.map(service => (
      <CardImage
        key={service._id}
        title={service.heading}
        textMain={service.description1}
        textSecondary={service.description2}
        imgSRC={service.imgSRC}
      />
    )
    );  */

    return (
      <div className="container-fluid">
        <div className="row no-gutters">{serviceItems}</div>
      </div>
    );
  }
}
AestheticsGrid.propTypes = {
  getServices: PropTypes.func.isRequired,
  services: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  services: state.services
});

export default connect(
  mapStateToProps,
  { getServices }
)(AestheticsGrid);
