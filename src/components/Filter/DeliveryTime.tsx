import '@/styles/deliverytime.scss'

function DeliveryTime() {
	return (
		<div className='deliverytime'>
			<div className='deliverytime_header'>Сроки доставки</div>

			<div className='deliverytime_button'>
				<div>
					<label htmlFor='1'>
						<input
							type='radio'
							id='1'
							name='delivery'
							value='nomatter'
							className='deliverytime_button_first'
							defaultChecked
						/>
						<span className='circle'></span>
						Неважно
					</label>
				</div>
				<div>
					<label htmlFor='2'>
						<input type='radio' id='2' name='delivery' value='tomorrow' />
						<span className='circle'></span>
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								className='rocket'
							>
								<path
									fill='currentColor'
									fillRule='evenodd'
									d='M13.868 1C11 1 8.318 2.113 6.318 4H3.309a1.5 1.5 0 0 0-1.342.83l-.861 1.723a1 1 0 1 0 1.788.894l.669-1.336A.2.2 0 0 1 3.742 6h.537c.159 0 .255.176.173.312a11.01 11.01 0 0 0-.85 1.74l-.035.089a1 1 0 1 0 1.866.718l.035-.09a9 9 0 0 1 7.486-5.723 9 9 0 0 1-5.723 7.486l-.09.035a1 1 0 1 0 .718 1.866l.09-.034c.61-.235 1.192-.52 1.739-.85a.205.205 0 0 1 .312.172v.537a.2.2 0 0 1-.11.18l-1.337.668a1 1 0 1 0 .894 1.788l1.724-.861A1.5 1.5 0 0 0 12 12.69V9.682c1.887-2 3-4.682 3-7.55V2a1 1 0 0 0-1-1h-.132Z'
									clipRule='evenodd'
								></path>
								<path
									fill='currentColor'
									fillRule='evenodd'
									d='M3.707 11.707a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1Zm2 2a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1Z'
									clipRule='evenodd'
								></path>
								<path
									fill='currentColor'
									d='M10 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
								></path>
							</svg>
						</span>
						Завтра
					</label>
				</div>
				<div>
					<label htmlFor='3'>
						<input type='radio' id='3' name='delivery' value='upto2days' />
						<span className='circle'></span>
						До 2 дней
					</label>
				</div>
				<div>
					<label htmlFor='4'>
						<input
							type='radio'
							id='4'
							className='circle'
							name='delivery'
							value='upto5days'
						/>
						<span className='circle'></span>
						До 5 дней
					</label>
				</div>
			</div>
		</div>
	)
}

export default DeliveryTime
