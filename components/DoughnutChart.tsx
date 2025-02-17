"use client"

import { DoughnutChartProps } from '@/types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  
  // const accountNames = accounts?.map((a) => a.name);
  // const balance = accounts?.map((a) => a.currentBalance);

  const data = {
    datasets : [{
      label: 'Banks',
      data: [1250, 2500, 3750],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }],
    labels: ['bank 1', 'bank 2', 'bank 3']
  }
  return (
    <Doughnut data={data} />
  )
}

export default DoughnutChart
