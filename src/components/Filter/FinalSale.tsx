import '@/styles/Finalsale.scss'
function FinalSale() {
	return (
		<div>
			<span className='finalsale'>Финальная распродажа</span>
			<div className='finalsale_button'>
				<input type='checkbox' id='switch' />
				<label htmlFor='switch'>Toggle</label>
			</div>
		</div>
	)
}

export default FinalSale
