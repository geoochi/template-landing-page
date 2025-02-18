import { Button } from './ui/button'

export default function CTA() {
  return (
    <section className='w-full bg-blue-600 text-white'>
      <div className='max-w-7xl mx-auto py-12 md:py-24 lg:py-32 px-4 md:px-6 text-center'>
        <h2 className='text-3xl font-bold mb-4'>
          Ready to Streamline Your Workflow?
        </h2>
        <p className='mb-8 max-w-[600px] mx-auto'>
          Join thousands of satisfied customers and take your productivity to
          the next level with StreamLine.
        </p>
        <Button size='lg' variant='secondary'>
          Start Your Free Trial
        </Button>
      </div>
    </section>
  )
}
