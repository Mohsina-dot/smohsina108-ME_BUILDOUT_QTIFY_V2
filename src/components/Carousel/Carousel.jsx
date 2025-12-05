import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import LeftNav from "../Navigation/LeftNav";
import RightNav from "../Navigation/RightNav";
import "swiper/css";
import "swiper/css/navigation";
import AlbumCard from "../Card/Card";

function Carousel({ data }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
    }}
      spaceBetween={20}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {data.map((album) => (
        <SwiperSlide key={album.id}>
          <AlbumCard
            image={album.image}
            title={album.title}
            follows={album.follows}
          />
        </SwiperSlide>
      ))}
      <div className="custom-prev">
      <LeftNav />
      </div>
      <div className="custom-next">
      <RightNav />
      </div>
    </Swiper>
  );
}

export default Carousel;
