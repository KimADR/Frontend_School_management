"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  // {
  //   name: '18-24',
  //   uv: 31.47,
  //   pv: 2400,
  //   fill: '#8884d8',
  // },
  // {
  //   name: '25-29',
  //   uv: 26.69,
  //   pv: 4567,
  //   fill: '#83a6ed',
  // },
  // {
  //   name: '30-34',
  //   uv: 15.69,
  //   pv: 1398,
  //   fill: '#8dd1e1',
  // },
  // {
  //   name: '35-39',
  //   uv: 8.22,
  //   pv: 9800,
  //   fill: '#82ca9d',
  // },
  // {
  //   name: '40-49',
  //   uv: 8.63,
  //   pv: 3908,
  //   fill: '#a4de6c',
  // },
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Grils',
    count: 53,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#C3EBFA',
  },
];

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src='/moreDark.png' alt='' width={20} height={20}/>
        </div>
        {/* CHART */}
        <div className='relative w-full h-[75%]'>
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt='' width={50} height={50} 
      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>
        {/* BOTTOM */}
        <div className='flex justify-center gap-16'>
          <div className='flex flex-col gap-1'>
            <div className='w-5 h-5 bg-lamasky rounded-full'/>
            <h1 className='font-bold'>1,234</h1>
            <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='w-5 h-5 bg-lamaYellow rounded-full'/>
            <h1 className='font-bold'>1,234</h1>
            <h2 className='text-xs text-gray-300'>Girls (45%)</h2>
          </div>
        </div>
    </div>
  )
}

export default CountChart