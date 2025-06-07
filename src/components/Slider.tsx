// import {Swiper, SwiperSlide} from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    "image": "/images/projects/cadium.png",
    "title": "Avatar: The Way of Water",
    "subTitle": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    "interval": 1500
  },
  {
    "image": "/images/projects/tasia.png",
    "title": "Black Adam",
    "subTitle": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    "interval": 500
  },
  {
    "image": "/images/projects/solute.png",
    "title": "Black Panther: Wakanda Forever",
    "subTitle": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "interval": 2500
  },
  {
    "image": "/images/projects/datebook.png",
    "title": "Black Panther: Wakanda Forever",
    "subTitle": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "interval": 2500
  },
  {
    "image": "/images/projects/neneo.png",
    "title": "Black Panther: Wakanda Forever",
    "subTitle": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "interval": 2500
  },
  {
    "image": "/images/projects/wannasweet.png",
    "title": "Black Panther: Wakanda Forever",
    "subTitle": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "interval": 2500
  },
  {
     "image": "/images/projects/quizlend.png",
    "title": "Black Panther: Wakanda Forever",
    "subTitle": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "interval": 2500
  }  
]


export const SliderProject = () => {
    const settings = {
    dots: true,        
    infinite: true,     
    speed: 500,     
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="absolute top-[100px] w-[100%] h-[200px] z-5" style={{padding: '50px' }}>
      <Slider {...settings}>
       {slides.map((slide, index) => (
          <div key={index} style={{ margin: "10px" }}>
            <img className="rounded-lg" src={slide.image} alt={slide.title}/>
          </div>
      ))}
      </Slider>
    </div>
  );

}