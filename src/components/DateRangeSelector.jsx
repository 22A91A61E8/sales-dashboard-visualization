import { format } from 'date-fns'
import { useState } from 'react'
import { useFilter } from '../context/FilterContext'

const DateRangeSelector = () => {
  const { setDateRange, filters } = useFilter()
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleApply = () => {
    if (startDate && endDate) {
      setDateRange(new Date(startDate), new Date(endDate))
    }
  }

  const handleClear = () => {
    setStartDate('')
    setEndDate('')
    setDateRange(null, null)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Date Range Filter
      </h3>
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            aria-label="Start date"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            aria-label="End date"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleApply}
            disabled={!startDate || !endDate}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Apply
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>
      {filters.dateRange.start && filters.dateRange.end && (
        <p className="mt-4 text-sm text-green-600">
          ✓ Filtered: {format(filters.dateRange.start, 'MMM dd, yyyy')} - {format(filters.dateRange.end, 'MMM dd, yyyy')}
        </p>
      )}
    </div>
  )
}

export default DateRangeSelector
