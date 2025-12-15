import { useMemo } from 'react'
import { useFilter } from '../context/FilterContext'

const KPICards = () => {
  const { filteredData } = useFilter()

  const kpis = useMemo(() => {
    const totalRevenue = filteredData.reduce((sum, item) => sum + item.amount, 0)
    const totalSales = filteredData.length
    const totalQuantity = filteredData.reduce((sum, item) => sum + item.quantity, 0)
    const avgOrderValue = totalSales > 0 ? totalRevenue / totalSales : 0

    return {
      totalRevenue,
      totalSales,
      totalQuantity,
      avgOrderValue
    }
  }, [filteredData])

  const cards = [
    {
      title: 'Total Revenue',
      value: `$${kpis.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: '💰',
      color: 'bg-blue-500'
    },
    {
      title: 'Total Sales',
      value: kpis.totalSales.toLocaleString(),
      icon: '📊',
      color: 'bg-green-500'
    },
    {
      title: 'Units Sold',
      value: kpis.totalQuantity.toLocaleString(),
      icon: '📦',
      color: 'bg-purple-500'
    },
    {
      title: 'Avg Order Value',
      value: `$${kpis.avgOrderValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: '💳',
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow fade-in"
          role="article"
          aria-label={`${card.title}: ${card.value}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{card.title}</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{card.value}</p>
            </div>
            <div className={`${card.color} rounded-full p-3 text-2xl`}>
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default KPICards
