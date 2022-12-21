import './squarecheck.scss'

function BootSize() {
	return (
		<div className='squarecheck'>
			<div className='squarecheck_header_bootsize'>
				Российский размер (обуви){' '}
			</div>

			<div className='squarecheck_button'>
				<div>
					<input type='checkbox' id='41' name='bootsize_41' value='41' />
					41
				</div>

				<div>
					<input type='checkbox' id='42' name='bootsize_42' value='42' />
					42
				</div>
				<div>
					<input type='checkbox' id='43' name='bootsize_43' value='43' />
					43
				</div>
				<div>
					<input type='checkbox' id='44' name='bootsize_44' value='44' />
					44
				</div>
				<div>
					<input type='checkbox' id='40' name='bootsize_41' value='40' />
					40
					<div className='squarecheck_checkall'>Посмотреть все</div>
				</div>
			</div>
		</div>
	)
}

export default BootSize
