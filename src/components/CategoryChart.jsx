import { useMemo } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useFilter } from '../context/FilterContext'

const CategoryChart = () => {
  const { filteredData, updateFilter, filters } = useFilter()

  const chartData = useMemo(() => {
    const grouped = {}
    
    filteredData.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = { category: item.category, revenue: 0, count: 0 }
      }
      grouped[item.category].revenue += item.amount
      grouped[item.category].count += 1
    })

    return Object.values(grouped).sort((a, b) => b.revenue - a.revenue)
  }, [filteredData])

  const handleClick = (data) => {
    if (data && data.activePayload) {
      const category = data.activePayload[0].payload.category
      updateFilter('selectedCategory', 
        filters.selectedCategory === category ? null : category
      )
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Sales by Category
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} onClick={handleClick}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" style={{ fontSize: '12px' }} />
          <YAxis style={{ fontSize: '12px' }} />
          <Tooltip 
            formatter={(value, name) => [
              name === 'revenue' ? `$${value.toFixed(2)}` : value,
              name === 'revenue' ? 'Revenue' : 'Count'
            ]}
          />
          <Bar 
            dataKey="revenue" 
            fill="#10b981" 
            cursor="pointer"
            opacity={filters.selectedCategory ? 0.6 : 1}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CategoryChart
