const testimonials = [
  {
    text: "PrebuiltUI helped us move faster without sacrificing design quality. The components feel production-ready.",
    name: "Cristofer Levin",
    role: "Frontend engineer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    text: "The attention to detail in PrebuiltUI is impressive. Saved me hours of repetitive work and time. Highly recommended.",
    name: "Rohan Mehta",
    role: "Startup founder",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    text: "We were able ship faster using PrebuiltUI. The consistency across components made UI feel polished.",
    name: "Jason Kim",
    role: "Product designer",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
  },
  {
    text: "PrebuiltUI feels like it was built by people who actually ship products. Components are clean and easy to use.",
    name: "Alex Turner",
    role: "Full stack developer",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
  },
  {
    text: "PrebuiltUI helped us maintain design consistency across multiple projects. It's now a core part of design.",
    name: "Sofia Martinez",
    role: "UX designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
  },
  {
    text: "Our team productivity improved noticeably after adopting PrebuiltUI. It reduced design handoff friction.",
    name: "Daniel Wong",
    role: "UI designer",
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-white" : "text-yellow-400"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <StarRating />

      <p className="testimonial-text">{testimonial.text}</p>

      <div className="testimonial-user">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="testimonial-avatar"
        />

        <div>
          <p className="testimonial-name">{testimonial.name}</p>

          <p className="testimonial-role">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

function Testimonial() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <section className="testimonial-section geist-font">
      <div className="testimonial-container">
        {/* Heading */}
        <div className="testimonial-heading">
          <div className="testimonial-badge cursor-none">
            <span>Loved by clients</span>
          </div>

          <h2>What people are saying</h2>

          <p>
            Real feedback from founders, developers and teams building
            production-ready products.
          </p>
        </div>

        {/* First Row */}
        <div className="testimonial-row-wrapper">
          <div className="testimonial-fade testimonial-fade-left" />
          <div className="testimonial-fade testimonial-fade-right" />

          <div className="testimonial-track animate-scroll">
            {[...firstRow, ...firstRow].map((testimonial, index) => (
              <TestimonialCard
                key={`first-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="testimonial-row-wrapper">
          <div className="testimonial-fade testimonial-fade-left" />
          <div className="testimonial-fade testimonial-fade-right" />

          <div className="testimonial-track animate-scroll-reverse">
            {[...secondRow, ...secondRow].map((testimonial, index) => (
              <TestimonialCard
                key={`second-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
