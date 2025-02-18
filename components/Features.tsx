import { CheckCircle, Zap, BarChart } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <CheckCircle className='h-6 w-6 text-blue-500' />,
      title: 'Task Management',
      description: 'Organize and prioritize your tasks with ease.',
    },
    {
      icon: <Zap className='h-6 w-6 text-blue-500' />,
      title: 'Automation',
      description: 'Automate repetitive tasks and save time.',
    },
    {
      icon: <BarChart className='h-6 w-6 text-blue-500' />,
      title: 'Analytics',
      description: 'Gain insights with powerful analytics and reporting.',
    },
  ]

  return (
    <section id='features' className='w-full bg-white'>
      <div className='max-w-7xl mx-auto py-12 md:py-24 lg:py-32 px-4 md:px-6'>
        <h2 className='text-3xl font-bold text-center mb-12'>Key Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              <div className='mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
