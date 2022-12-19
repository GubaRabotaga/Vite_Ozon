import '@/styles/squarecheck.scss'

function Type() {
	return (
		<div className='squarecheck'>
			<div className='squarecheck_header'>Тип</div>

			<div className='squarecheck_button'>
				<div>
					<input type='checkbox' id='sneakers' name='type_sneakers' value='1' />
					Кроссовки
				</div>

				<div>
					<input type='checkbox' id='cuds' name='type_cuds' value='2' />
					Кеды
				</div>
				<div>
					<input type='checkbox' id='slipons' name='type_slipons' value='3' />
					Слипоны
				</div>
			</div>
		</div>
	)
}

export default Type
