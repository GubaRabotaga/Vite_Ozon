import './squarecheck.scss'

function Season() {
	return (
		<div className='squarecheck'>
			<div className='squarecheck_header_season'>Сезонность</div>

			<div className='squarecheck_button'>
				<div>
					<input type='checkbox' id='spring' name='season_spring' value='1' />
					Весна
				</div>
				<div>
					<input
						type='checkbox'
						id='anyseason'
						name='season_anyseason'
						value='2'
					/>
					На любой сезон
				</div>
				<div>
					<input type='checkbox' id='autumn' name='season_autumn' value='3' />
					Осень
				</div>
				<div>
					<input
						type='checkbox'
						id='Demiseason'
						name='season_Demiseason'
						value='4'
					/>
					Демисезон
				</div>
				<div>
					<input type='checkbox' id='summer' name='season_summer' value='5' />
					Лето
					<div className='squarecheck_checkall'>Посмотреть все</div>
				</div>
			</div>
		</div>
	)
}

export default Season
