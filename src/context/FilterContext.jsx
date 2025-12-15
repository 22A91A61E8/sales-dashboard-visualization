import { isWithinInterval, parseISO } from 'date-fns'
import { createContext, useContext, useMemo, useState } from 'react'

const FilterContext = createContext()

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error('useFilter must be used within FilterProvider')
  }
  return context
}

export const FilterProvider = ({ children }) => {
  const [rawData, setRawData] = useState([])
  const [filters, setFilters] = useState({
    dateRange: { start: null, end: null },
    selectedCategory: null,
    selectedRegion: null,
    selectedProduct: null,
  })

  const filteredData = useMemo(() => {
    let data = [...rawData]

    // Apply date range filter
    if (filters.dateRange.start && filters.dateRange.end) {
      data = data.filter(item => {
        const itemDate = parseISO(item.date)
        return isWithinInterval(itemDate, {
          start: filters.dateRange.start,
          end: filters.dateRange.end
        })
      })
    }

    // Apply category filter
    if (filters.selectedCategory) {
      data = data.filter(item => item.category === filters.selectedCategory)
    }

    // Apply region filter
    if (filters.selectedRegion) {
      data = data.filter(item => item.region === filters.selectedRegion)
    }

    // Apply product filter
    if (filters.selectedProduct) {
      data = data.filter(item => item.product === filters.selectedProduct)
    }

    return data
  }, [rawData, filters])

  const updateFilter = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }))
  }

  const resetFilters = () => {
    setFilters({
      dateRange: { start: null, end: null },
      selectedCategory: null,
      selectedRegion: null,
      selectedProduct: null,
    })
  }

  const setDateRange = (start, end) => {
    setFilters(prev => ({
      ...prev,
      dateRange: { start, end }
    }))
  }

  const value = {
    rawData,
    setRawData,
    filteredData,
    filters,
    updateFilter,
    resetFilters,
    setDateRange
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}
