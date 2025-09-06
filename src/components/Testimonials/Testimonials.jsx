import React from "react";
import styles from "./Testimonials.module.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Tech Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Amazing shopping experience! Fast delivery and excellent customer service. I've been shopping here for months and never disappointed.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Gadget Lover",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The product quality is outstanding and prices are very competitive. Highly recommend this store to everyone!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Fashion Blogger",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Love the variety of products available. The website is easy to navigate and checkout process is smooth.",
      rating: 5
    }
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Customers Say</h2>
          <p className={styles.subtitle}>Don't just take our word for it - hear from our satisfied customers</p>
        </div>
        
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <FaQuoteLeft />
              </div>
              
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className={styles.star} />
                ))}
              </div>
              
              <p className={styles.content}>{testimonial.content}</p>
              
              <div className={styles.author}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className={styles.authorImage}
                />
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

