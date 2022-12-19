import '@/styles/RouterBreadcrumbs.scss'
function RouterBreadcrumbs() {
	return (
		<div className='RouterBreadcrumbs'>
			<span>Обувь</span>
			<svg xmlns='http://www.w3.org/2000/svg' className='leftsving'>
				<path
					fill='currentColor'
					d='M5.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8l-4.293 4.293Z'
				></path>
			</svg>
			<span>Мужская обувь</span>
			<div>
				<h1 className='currentcategory'>Кеды и слипоны мужские</h1>
				<span className='productselected'>20 608 товаров</span>
			</div>
		</div>
	)
}

export default RouterBreadcrumbs
