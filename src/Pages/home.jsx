import { Fragment } from "react";
import HeaderPhoto from "../Components/HomeComponents/headerPhoto";
import FoodCarousel from "../Components/Carousel/foodCarousel";
import ShowProducts from "../Components/HomeComponents/showProducts";
import MensSportwearCarousel from "../Components/Carousel/MensSportswearCarousel";
import AccessoriesCarousel from "../Components/Carousel/accessoriesCarousel";
import AdvertisePhotos from "../Components/HomeComponents/advertisePhotos";
import WomensSportwearCarousel from "../Components/Carousel/womensSportwearCarousel";
import ShakerCarousel from "../Components/Carousel/shakerCarousel";
import { BackTop } from 'antd';
import { UpOutlined } from "@ant-design/icons";

const Home = () => {

  const style = {
    height: 55,
    width: 55,
    lineHeight: '60px',
    borderRadius: 50,
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    boxShadow: "2px 2px 2px 2px #9E9E9E",

  };


  return (
    <Fragment>
      <HeaderPhoto />
      <FoodCarousel />
      <ShowProducts />
      <MensSportwearCarousel />
      <AccessoriesCarousel />
      <AdvertisePhotos />
      <WomensSportwearCarousel />
      <ShakerCarousel />

      <div>     
        <BackTop>
          <div style={style}><UpOutlined /></div>
        </BackTop>
      </div>
    </Fragment>
  );
}

export default Home;