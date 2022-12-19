import '@/styles/selector.scss'

function Selector() {
	return (
		<div className='selector'>
			<span className='selector_text'>Популярныеㅤ</span>
			<span className='selector_arrow'>▼</span>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				className='selector_cubes'
			>
				<path
					fill='currentColor'
					d='M8 13a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h3Zm0 2H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm11-2a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h3Zm0 2h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1ZM8 2a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h3Zm0 2H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm11-2a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h3Zm0 2h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z'
				></path>
			</svg>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				className='selector_option'
			>
				<path
					fill='currentColor'
					d='M5.126 6a4.002 4.002 0 0 1 7.748 0H21a1 1 0 1 1 0 2h-8.126a4.002 4.002 0 0 1-7.748 0H3a1 1 0 0 1 0-2h2.126ZM7 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm4 10a4 4 0 0 1 7.874-1H21a1 1 0 1 1 0 2h-2.126A4.002 4.002 0 0 1 11 17Zm2 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM2 17a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z'
				></path>
			</svg>
		</div>
	)
}

export default Selector
