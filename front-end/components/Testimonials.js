export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      description:
        "I found my dream job in just a few clicks. The process was smooth and the team was extremely supportive!",
      name: "Alice Johnson",
      job: "Software Engineer",
      location: "San Francisco, CA",
    },
    {
      id: 2,
      description:
        "Thanks to this platform, I landed a remote role with a great company. Highly recommend to other job seekers!",
      name: "Michael Lee",
      job: "Product Manager",
      location: "Remote",
    },
    {
      id: 3,
      description:
        "An incredible experience—easy application, fantastic resources, and amazing support from the team.",
      name: "Fatima Ahmed",
      job: "UX Designer",
      location: "New York, NY",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-sky-900 mb-2">Hear what our gteate <br></br> job seekers say</h2>
         
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-50 border-r-2 border-sky-900 p-6 rounded shadow hover:shadow-lg transition-shadow duration-300"
            >
              {/* Decorative Dots */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-sky-900"></span>
                <span className="w-3 h-3 rounded-full bg-sky-900"></span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-500 italic mb-6">
                "{item.description}"
              </p>

              {/* Name / Role / Location */}
              <div className="mt-auto text-sm text-gray-800">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">
                  {item.job}, {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

