import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    group_name: 'Group A',
    boys: 100,
  },
  {
    group_name: 'Group B',
    boys: 500,
  },
  {
    group_name: 'Group C',
    boys: 1000,
  },
  {
    group_name: 'Group D',
    boys: 1500,
  },
  {
    group_name: 'Group E',
    boys: 2000,
  },
  {
    group_name: 'Group F',
    boys: 2500,
  },
  {
    group_name: 'Group G',
    boys: 3000,
  },
]

const BarCharts = () => {
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 50,
          }}
        />
        <Bar dataKey="boys" fill="#1f77b4" barSize="10%" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarCharts
