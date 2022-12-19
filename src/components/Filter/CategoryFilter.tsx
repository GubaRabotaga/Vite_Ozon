import '@/styles/categoryfilter.scss'
function CategoryFilter() {
	return (
		<div className='FilterParametrs'>
			<header className='categories'>Категория</header>
			<header className='categories_current'>
				Категории: Кеды, кроссовки и слипоны мужские
			</header>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				className='categories_current_exit'
			>
				<path
					fill='currentColor'
					d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM5.707 4.293 8 6.586l2.293-2.293a1 1 0 1 1 1.414 1.414L9.414 8l2.293 2.293a1 1 0 0 1-1.414 1.414L8 9.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L6.586 8 4.293 5.707a1 1 0 0 1 1.414-1.414Z'
				></path>
			</svg>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				className='rightsving'
			>
				<path
					fill='currentColor'
					d='M5.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8l-4.293 4.293Z'
				></path>
			</svg>
			<span className='categories_set'>Обувь</span>

			<div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					className='rightsving'
				>
					<path
						fill='currentColor'
						d='M5.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8l-4.293 4.293Z'
					></path>
				</svg>
				<span className='categories_set'>Мужчинам</span>
			</div>
			<div className='categories_type'>Кеды, кроссовки и слипоны</div>
			<div className='categories_type_subtype'>Слипоны</div>
			<div className='categories_type_subtype'>Кеды</div>
			<div className='categories_type_subtype'>Кроссовки</div>
		</div>
	)
}

export default CategoryFilter
