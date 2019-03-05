import React, { Component } from "react";
import CardImage from "../common/CardImage";
import "./Aesthetics.css";
import image1 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image2 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image3 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image4 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image5 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image6 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image7 from "../../assets/img/aesthetics_service_hairremoval.jpg";
import image8 from "../../assets/img/aesthetics_service_hairremoval.jpg";

class Aesthetics extends Component {
  render() {
    const services = [
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
    ];

    const servicesContent = services.map(service => (
      <CardImage
        key={service.id}
        title={service.title}
        textMain={service.textMain}
        textSecondary={service.textSecondary}
        imgSRC={service.imgSRC}
      />
    ));

    return (
      <div className="container-fluid">
        <div className="row no-gutters">{servicesContent}</div>
      </div>
    );
  }
}

export default Aesthetics;
