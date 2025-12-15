import { format, parseISO } from 'date-fns'
import { useMemo } from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useFilter } from '../context/FilterContext'

const TimeSeriesChart = () => {
  const { filteredData, updateFilter } = useFilter()

  const chartData = useMemo(() => {
    const grouped = {}
    
    filteredData.forEach(item => {
      const date = item.date
      if (!grouped[date]) {
        grouped[date] = { date, revenue: 0, sales: 0 }
      }
      grouped[date].revenue += item.amount
      grouped[date].sales += 1
    })

    return Object.values(grouped).sort((a, b) => 
      new Date(a.date) - new Date(b.date)
    )
  }, [filteredData])

  const handleClick = (data) => {
    if (data && data.activePayload) {
      const clickedDate = data.activePayload[0].payload.date
      console.log('Clicked date:', clickedDate)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Sales Trend Over Time
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData} onClick={handleClick}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(date) => format(parseISO(date), 'MMM dd')}
            style={{ fontSize: '12px' }}
          />
          <YAxis style={{ fontSize: '12px' }} />
          <Tooltip 
            formatter={(value, name) => [
              name === 'revenue' ? `$${value.toFixed(2)}` : value,
              name === 'revenue' ? 'Revenue' : 'Sales Count'
            ]}
            labelFormatter={(date) => format(parseISO(date), 'MMM dd, yyyy')}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ fill: '#3b82f6' }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TimeSeriesChart
