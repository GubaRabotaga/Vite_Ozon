import RouterBreadcrumbs from './components/RouterBreadcrumbs'
import Filter from './components/Filter/Filter'
import UseProducts from './hooks/useProducts'
import '@/styles/products.scss'
import '@/styles/App.scss'
import '@/styles/fonts.scss'

function App() {
	return (
		<span className='App'>
			<RouterBreadcrumbs />
			<Filter />
			<UseProducts />
		</span>
	)
}

export default App
