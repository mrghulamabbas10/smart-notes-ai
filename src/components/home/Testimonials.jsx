import { StarIcon } from "../assets/star-icon";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah White",
    role: "General Practitioner",
    avatar: "/images/docter1.png?width=142",
    quote: "I no longer spend hours on notes.",
    description: "Smart Notes AI makes my workflow smooth and efficient.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nurse James Allen",
    role: "Software Engineer",
    avatar: "/images/docter2.png?width=140",
    quote: "Our team collaboration has improved drastically!",
    description:
      "With Smart Notes AI, managing patient records has never been easier. Its a lifesaver!",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Robert Miles",
    role: "Orthopedic Surgeon",
    avatar: "/images/docter3.png?width=132",
    quote: "The service is incredibly efficient.",
    description:
      "It cuts down on time-consuming paperwork, improving patient care.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="w-full bg-white py-16 lg:py-[130px] px-6 lg:px-[120px]">
      <div className="container mx-auto max-w-[1200px]">
        <div className="text-center mb-12 lg:mb-[60px]">
          <h2 className="text-4xl lg:text-[56px] font-bold leading-tight">
            What our users are saying
          </h2>

          <p className="text-lg text-gray-600 max-w-[583px] mx-auto">
            Simplify project planning, streamline collaboration, and boost
            productivity all with SmartNotes AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-[#F8F4F1] rounded-[20px] p-8 lg:p-[35px] flex flex-col h-full bg-white hover:shadow-lg transition-shadow duration-300 md:static sticky top-24"
            >
              <div className="flex gap-1 mb-6 lg:mb-8">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 lg:w-8 lg:h-8" />
                ))}
              </div>

              <div className="flex-1 space-y-4 lg:space-y-[22px]">
                <h4 className="text-xl lg:text-2xl font-medium text-gray-600-dark leading-snug">
                  {testimonial.quote}
                </h4>

                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  {testimonial.description}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 lg:mt-[32px]">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-base text-gray-600-dark">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
