export const aggregateByDate = (data) => {
  const grouped = {}
  
  data.forEach(item => {
    if (!grouped[item.date]) {
      grouped[item.date] = {
        date: item.date,
        revenue: 0,
        sales: 0,
        quantity: 0
      }
    }
    grouped[item.date].revenue += item.amount
    grouped[item.date].sales += 1
    grouped[item.date].quantity += item.quantity
  })
  
  return Object.values(grouped).sort((a, b) => 
    new Date(a.date) - new Date(b.date)
  )
}

export const aggregateByCategory = (data) => {
  const grouped = {}
  
  data.forEach(item => {
    if (!grouped[item.category]) {
      grouped[item.category] = {
        category: item.category,
        revenue: 0,
        count: 0
      }
    }
    grouped[item.category].revenue += item.amount
    grouped[item.category].count += 1
  })
  
  return Object.values(grouped)
}

export const aggregateByRegion = (data) => {
  const grouped = {}
  
  data.forEach(item => {
    if (!grouped[item.region]) {
      grouped[item.region] = {
        region: item.region,
        revenue: 0,
        count: 0
      }
    }
    grouped[item.region].revenue += item.amount
    grouped[item.region].count += 1
  })
  
  return Object.values(grouped)
}

export const calculateKPIs = (data) => {
  const totalRevenue = data.reduce((sum, item) => sum + item.amount, 0)
  const totalSales = data.length
  const totalQuantity = data.reduce((sum, item) => sum + item.quantity, 0)
  const avgOrderValue = totalSales > 0 ? totalRevenue / totalSales : 0
  
  return {
    totalRevenue,
    totalSales,
    totalQuantity,
    avgOrderValue
  }
}
