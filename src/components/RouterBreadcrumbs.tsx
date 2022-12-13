function RouterBreadcrumbs() {
	const categories = ['Обувь', 'Мужская обувь']

	return (
		<div>
			{categories.map(category => (
				<div key={category}>
					<a href='#'>{category}</a>
				</div>
			))}
		</div>
	)
}

export default RouterBreadcrumbs
