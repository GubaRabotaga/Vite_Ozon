import './squarecheck.scss'

function Brands() {
	return (
		<div className='squarecheck'>
			<div className='squarecheck_header_brand'>Бренды</div>

			<div className='squarecheck_button'>
				<div>
					<input type='checkbox' id='PUMA' name='brand_PUMA' value='1' />
					PUMA
				</div>
				<div>
					<input type='checkbox' id='Nike' name='brand_Nike' value='2' />
					Nike
				</div>
				<div>
					<input type='checkbox' id='adidas' name='brand_adidas' value='3' />
					adidas
				</div>
				<div>
					<input type='checkbox' id='Chekich' name='brand_Chekich' value='4' />
					Chekich
				</div>
				<div>
					<input type='checkbox' id='BONA' name='Brand_BONA' value='5' />
					BONA
					<div className='squarecheck_checkall'>Посмотреть все</div>
				</div>
			</div>
		</div>
	)
}

export default Brands
