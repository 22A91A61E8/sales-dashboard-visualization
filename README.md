# Sales Dashboard Visualization

![Dashboard Preview](https://img.shields.io/badge/React-18.3.1-blue) ![Recharts](https://img.shields.io/badge/Recharts-2.10.0-green) ![Vite](https://img.shields.io/badge/Vite-5.0.0-purple)

An interactive data visualization dashboard built with React and Recharts for exploring sales data through multiple coordinated charts with cross-filtering capabilities.

## 🌐 Live Demo

**Deployed URL:** [Coming Soon - Will be deployed on Vercel]

## 📽️ Demo Video

**Video Link:** [Coming Soon - 2-4 minute demonstration]

## ✨ Features

### Core Functionality
- **KPI Cards**: Display top-level aggregate metrics (Total Revenue, Total Sales, etc.)
- **Time-Series Chart**: Interactive line/area chart showing sales trends over selected date range
- **Categorical Bar Chart**: Compare metrics across different categories (products, regions, etc.)
- **Proportional Pie Chart**: Show breakdown of metrics by specific dimensions
- **Data Table**: Detailed view of raw/filtered data with sorting capabilities

### Interactive Features
- **Cross-Filtering**: Click on any chart element to filter all other visualizations
- **Date Range Selector**: Filter data by custom time windows
- **Reset Filters**: Clear all active filters and restore initial state
- **Tooltips**: Hover over chart elements for detailed information
- **CSV Export**: Export currently filtered data to CSV file

### Responsive Design
- **Desktop (1024px+)**: Multi-column grid layout
- **Tablet (768px-1023px)**: Two-column grid layout
- **Mobile (<768px)**: Single-column scrollable layout

### Accessibility
- Keyboard navigable controls (date picker, reset button, chart interactions)
- Screen reader support for KPI values and active filters
- ARIA labels on interactive elements
- High contrast color schemes

## 🏗️ Architecture

### Tech Stack
- **Frontend Framework**: React 18.3 with Hooks
- **Build Tool**: Vite 5.0
- **Charting Library**: Recharts 2.10
- **Styling**: Tailwind CSS 3.4
- **Date Handling**: date-fns 3.0
- **Data Parsing**: Papa Parse 5.4

### Component Structure
```
src/
├── components/
│   ├── Dashboard.jsx          # Main container component
│   ├── KPICards.jsx           # KPI metrics display
│   ├── TimeSeriesChart.jsx    # Line/Area chart for trends
│   ├── CategoryChart.jsx      # Bar chart for categories
│   ├── ProportionChart.jsx    # Pie/Donut chart
│   ├── DataTable.jsx          # Interactive data table
│   ├── DateRangeSelector.jsx  # Date filter controls
│   └── ExportButton.jsx       # CSV export functionality
├── hooks/
│   └── useDataFilter.js       # Custom hook for filter state
├── utils/
│   ├── dataProcessing.js      # Data transformation utilities
│   └── exportCSV.js           # CSV export logic
├── data/
│   └── sales_data.json        # Sample sales dataset
├── App.jsx                    # Root component
└── main.jsx                   # Entry point
```

### State Management Strategy
Centralized state management using React Context API:
- **FilterContext**: Manages active filters (date range, selected categories, cross-filters)
- **DataContext**: Provides raw dataset and derived/filtered data
- Components subscribe to context and automatically re-render when filters change
- Unidirectional data flow: User interactions → Filter state updates → All components re-render with filtered data

### Data Flow
1. Raw dataset loaded from JSON file
2. User interactions trigger filter state updates in context
3. Data processing utility applies filters to raw dataset
4. Filtered data passed to all chart components
5. Each component renders only the filtered subset

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher (or yarn/pnpm)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/22A91A61E8/sales-dashboard-visualization.git
cd sales-dashboard-visualization
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify via:
   - Drag & drop to netlify.com
   - Netlify CLI: `netlify deploy --prod --dir=dist`
   - Connect GitHub repo for automatic deployments

## 🎨 Key Technology Choices

### Why React?
- Component-based architecture perfect for reusable chart components
- Rich ecosystem and excellent developer experience
- Virtual DOM provides efficient re-rendering for data updates
- Hooks API enables clean state management without class complexity

### Why Recharts?
- Declarative API built specifically for React
- Responsive out of the box
- Excellent tooltip and interaction support
- Composable chart components
- Good balance between customization and ease of use

### Why Vite?
- Lightning-fast HMR (Hot Module Replacement) for development
- Optimized production builds with Rollup
- Modern ESM-based dev server
- Minimal configuration required

### Why Tailwind CSS?
- Utility-first approach enables rapid UI development
- Excellent responsive design utilities
- Small bundle size with PurgeCSS
- Consistent design system

## 📊 Dataset Structure

The application uses a sales transaction dataset with the following schema:

```json
[
  {
    "date": "2024-01-15",
    "product": "Product A",
    "category": "Electronics",
    "region": "North",
    "amount": 1250.50,
    "quantity": 5,
    "customerId": "C12345"
  }
]
```

**Fields:**
- `date`: Transaction date (YYYY-MM-DD)
- `product`: Product name
- `category`: Product category
- `region`: Sales region
- `amount`: Revenue amount
- `quantity`: Units sold
- `customerId`: Customer identifier

## 🧪 Testing the Dashboard

### Cross-Filtering Test
1. Click on a specific region in the pie chart
2. Verify all other charts update to show only that region's data
3. Click on a date point in the line chart
4. Verify the data table shows only transactions from that date

### Date Range Filter Test
1. Select a custom date range using the date pickers
2. Verify all visualizations update accordingly
3. Check that KPI cards reflect the filtered metrics

### Reset Filters Test
1. Apply multiple filters (date range + category selection)
2. Click "Reset Filters" button
3. Verify all visualizations return to initial state

### CSV Export Test
1. Apply some filters to the data
2. Click "Export to CSV" button
3. Open downloaded file and verify it contains only filtered data

### Responsive Design Test
1. Resize browser window to mobile width (<768px)
2. Verify layout changes to single column
3. Test tablet width (768-1023px) for two-column layout
4. Confirm desktop layout (1024px+) shows full grid

## 📱 Screenshots

Screenshots are available in the `screenshots/` directory:
- `desktop.png` - Desktop view (1920x1080)
- `tablet.png` - Tablet view (768x1024)
- `mobile.png` - Mobile view (375x667)
- `cross-filter-demo.png` - Cross-filtering in action
- `date-filter-demo.png` - Date range selection

## 🤝 Contributing

Feel free to submit issues or pull requests for improvements.

## 📝 License

MIT License - feel free to use this project for learning or commercial purposes.

## 👨‍💻 Author

**Divya Eeli**
- GitHub: [@22A91A61E8](https://github.com/22A91A61E8)
- Project Link: [https://github.com/22A91A61E8/sales-dashboard-visualization](https://github.com/22A91A61E8/sales-dashboard-visualization)

## 🙏 Acknowledgments

- Partnr Network for the Global Placement Program task
- Recharts team for the excellent charting library
- React team for the amazing framework
- Open source community for inspiration and resources
