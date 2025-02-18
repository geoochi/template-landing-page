import { Check } from 'lucide-react'
import { Button } from './ui/button'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$9',
      features: ['Task Management', '5 Team Members', 'Basic Analytics'],
    },
    {
      name: 'Pro',
      price: '$29',
      features: [
        'Task Management',
        'Unlimited Team Members',
        'Advanced Analytics',
        'Automation',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'All Pro Features',
        'Dedicated Support',
        'Custom Integrations',
      ],
    },
  ]

  return (
    <section id='pricing' className='w-full bg-white'>
      <div className='max-w-7xl mx-auto py-12 md:py-24 lg:py-32 px-4 md:px-6'>
        <h2 className='text-3xl font-bold text-center mb-12'>Pricing Plans</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {plans.map((plan, index) => (
            <div key={index} className='border rounded-lg p-6 flex flex-col'>
              <h3 className='text-xl font-semibold mb-2'>{plan.name}</h3>
              <p className='text-3xl font-bold mb-4'>{plan.price}</p>
              <ul className='mb-6 flex-grow'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='flex items-center mb-2'>
                    <Check className='h-5 w-5 text-green-500 mr-2' />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={'outline'}>Choose Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
