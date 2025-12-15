 import { useEffect } from 'react'
import { useFilter } from '../context/FilterContext'
import salesData from '../data/sales_data.json'
import CategoryChart from './CategoryChart'
import DataTable from './DataTable'
import DateRangeSelector from './DateRangeSelector'
import ExportButton from './ExportButton'
import KPICards from './KPICards'
import ProportionChart from './ProportionChart'
import TimeSeriesChart from './TimeSeriesChart'

const Dashboard = () => {
  const { setRawData, resetFilters } = useFilter()

  useEffect(() => {
    setRawData(salesData)
  }, [setRawData])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Sales Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Interactive data visualization with cross-filtering
              </p>
            </div>
            <div className="flex gap-3">
              <ExportButton />
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                aria-label="Reset all filters"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Date Range Selector */}
        <div className="mb-6">
          <DateRangeSelector />
        </div>

        {/* KPI Cards */}
        <div className="mb-8">
          <KPICards />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TimeSeriesChart />
          <CategoryChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ProportionChart />
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Stats
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>📊 Total Records: {salesData.length}</p>
              <p>📅 Date Range: Last 365 days</p>
              <p>🌍 Regions: North, South, East, West</p>
              <p>📦 Product Categories: 4</p>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="mb-8">
          <DataTable />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            Built with React, Recharts & Tailwind CSS • Partnr GPP Task
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard
