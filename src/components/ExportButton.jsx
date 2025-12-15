import { useFilter } from '../context/FilterContext'
import { exportToCSV } from '../utils/exportCSV'

const ExportButton = () => {
  const { filteredData } = useFilter()

  const handleExport = () => {
    if (filteredData.length === 0) {
      alert('No data to export')
      return
    }
    
    exportToCSV(filteredData, 'sales_data_export.csv')
  }

  return (
    <button
      onClick={handleExport}
      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
      aria-label="Export filtered data to CSV"
    >
      <span>📥</span>
      Export to CSV
    </button>
  )
}

export default ExportButton
