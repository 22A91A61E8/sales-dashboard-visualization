import Dashboard from './components/Dashboard'
import { FilterProvider } from './context/FilterContext'

function App() {
  return (
    <FilterProvider>
      <div className="min-h-screen bg-gray-100">
        <Dashboard />
      </div>
    </FilterProvider>
  )
}

export default App
