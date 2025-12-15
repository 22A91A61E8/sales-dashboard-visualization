import { useMemo } from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { useFilter } from '../context/FilterContext'

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']

const ProportionChart = () => {
  const { filteredData, updateFilter, filters } = useFilter()

  const chartData = useMemo(() => {
    const grouped = {}
    
    filteredData.forEach(item => {
      if (!grouped[item.region]) {
        grouped[item.region] = { name: item.region, value: 0 }
      }
      grouped[item.region].value += item.amount
    })

    return Object.values(grouped)
  }, [filteredData])

  const handleClick = (data) => {
    if (data && data.name) {
      updateFilter('selectedRegion', 
        filters.selectedRegion === data.name ? null : data.name
      )
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Revenue by Region
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onClick={handleClick}
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]}
                opacity={filters.selectedRegion && filters.selectedRegion !== entry.name ? 0.3 : 1}
                cursor="pointer"
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProportionChart
