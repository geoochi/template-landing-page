import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Streamline Your Workflow
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Boost productivity and simplify your business processes with StreamLine. The all-in-one SaaS solution for
            modern teams.
          </p>
          <Button size="lg">Start Free Trial</Button>
        </div>
      </div>
    </section>
  )
}

