import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <>
            <SectionTitle
                subHeading='From 11:00am to 10:00pm' heading='ORDER ONLINE'
            ></SectionTitle>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className='text-2xl lg:text-4xl text-center text-white -mt-16'>Salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className='text-2xl lg:text-4xl text-center text-white -mt-16'>Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className='text-2xl lg:text-4xl text-center text-white -mt-16'>Pasta</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className='text-2xl lg:text-4xl text-center text-white -mt-16'>Cake</h1>
                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default Category;