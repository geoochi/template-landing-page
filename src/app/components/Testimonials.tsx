import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "StreamLine has revolutionized our team's workflow. We're more productive than ever!",
      author: "Jane Doe",
      company: "Tech Innovators Inc.",
    },
    {
      quote: "The automation features have saved us countless hours. It's a game-changer.",
      author: "John Smith",
      company: "Global Solutions Ltd.",
    },
  ]

  return (
    <section id="testimonials" className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 md:py-24 lg:py-32 px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={`/placeholder.svg?height=40&width=40`}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

