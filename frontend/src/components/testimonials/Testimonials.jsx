import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Ananya Sharma",
      position: "B.Tech Student",
      message:
        "The platform made complex topics simple and engaging. I especially loved the hands-on coding challenges!",
      image: "https://i.pravatar.cc/150?img=47",
    },
    {
      id: 2,
      name: "Rahul Verma",
      position: "Aspiring Web Developer",
      message:
        "Thanks to this platform, I built my first full-stack project and landed an internship!",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 3,
      name: "Sneha Kapoor",
      position: "Final Year CS Student",
      message:
        "Interactive lectures and real-world examples made learning super effective. Highly recommended!",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 4,
      name: "Arjun Mehta",
      position: "Data Science Enthusiast",
      message:
        "The machine learning courses are top-tier. I appreciated the real datasets and projects.",
      image: "https://i.pravatar.cc/150?img=33",
    },
    
    {
      id: 5,
      name: "Kunal Joshi",
      position: "UI/UX Design Student",
      message:
        "The design principles and Figma tutorials were beginner-friendly and very effective!",
      image: "https://i.pravatar.cc/150?img=55",
    },
    {
      id: 6,
      name: "Ishita Malhotra",
      position: "Backend Developer",
      message:
        "Loved the Node.js and MongoDB deep dive — really helped in building scalable apps.",
      image: "https://i.pravatar.cc/150?img=23",
    },
    {
      id: 7,
      name: "Megha Das",
      position: "AI/ML Beginner",
      message:
        "Learning Python and ML from scratch here was a smooth experience. Highly structured!",
      image: "https://i.pravatar.cc/150?img=58",
    },
   
    {
      id: 8,
      name: "Aanya Singh",
      position: "Software Intern",
      message:
        "The real-world project examples helped me ace my internship assignments. Thank you!",
      image: "https://i.pravatar.cc/150?img=35",
    },
    {
      id: 9,
      name: "Dev Mehta",
      position: "Cybersecurity Learner",
      message:
        "The ethical hacking and cybersecurity fundamentals were very insightful and up-to-date.",
      image: "https://i.pravatar.cc/150?img=44",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Learners Say</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonialsData.map((e) => (
          <SwiperSlide key={e.id}>
            <div className="testimonial-card">
              <div className="student-image">
                <img src={e.image} alt={e.name} />
              </div>
              <p className="message">“{e.message}”</p>
              <div className="info">
                <p className="name">{e.name}</p>
                <p className="position">{e.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
