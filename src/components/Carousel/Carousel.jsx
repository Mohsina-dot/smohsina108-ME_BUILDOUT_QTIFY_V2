import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import LeftNav from "../Navigation/LeftNav";
import RightNav from "../Navigation/RightNav";
import AlbumCard from "../Card/Card";

function Carousel({ data, renderItem, className }) {
  return (
    <div className={className}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".slider-prev-btn",
          nextEl: ".slider-next-btn",
        }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data.map((item, idx) => (
          <SwiperSlide key={item.id ?? idx}>
            {renderItem ? (
              renderItem(item)
            ) : (
              <AlbumCard
                image={item.image}
                title={item.title}
                follows={item.follows}
              />
            )}
          </SwiperSlide>
        ))}

        <div className="custom-prev slider-prev-btn">
          <LeftNav />
        </div>

        <div className="custom-next slider-next-btn">
          <RightNav />
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
