import React from 'react'
import { useAxios } from './useAxios'
import heart from '@/assets/heart.png'
export interface IJsonResposne {
	map(arg0: (u: any) => JSX.Element): React.ReactNode
	jest: IUserData[]
}

export interface IUserData {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
}
function getRandomInt() {
	return Math.floor(Math.random() * 100)
}

const UseProducts: React.FunctionComponent = () => {
	const [loading, data, error, request] = useAxios<IJsonResposne>({
		method: 'GET',
		url: 'https://fakestoreapi.com/products'
	})

	if (loading) return <p>Loading ....</p>

	if (error !== '') return <p>{error}</p>

	if (!data) return <p>Data was null</p>

	return (
		<div className='UseProducts'>
			<div className='product'>
				{data.map(u => (
					<span key={u.id}>
						<td>
							<hr className='product_line' />
							<img src={u.image} className='product_image'></img>
							<span className='product_box'>
								<h4 className='product_box_finalsaletext'>FinalSale</h4>
								<h4 className='product_box_discount'>
									<div className='product_box_discount_text'>
										-{getRandomInt()}%
									</div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										fill='none'
										className='product_box_heart'
									>
										<path
											fill='#00192E'
											fillRule='evenodd'
											d='M12 22c-.316-.02-.56-.147-.848-.278a23.542 23.542 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.183 6.183 0 0 1 5 2.568A6.183 6.183 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.599 23.599 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278ZM7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.525 21.525 0 0 0 12 19.91a21.58 21.58 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5Z'
											clipRule='evenodd'
										></path>
										<path
											fill='white'
											fillRule='evenodd'
											d='M12 22c-.285-.018-.512-.123-.764-.24a21.77 21.77 0 0 1-1.273-.628 23.542 23.542 0 0 1-3.592-2.351C3.777 16.704 1 13.448 1 9a6 6 0 0 1 6-6 6.18 6.18 0 0 1 5 2.568A6.18 6.18 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.599 23.599 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278Zm0-17.959A7.178 7.178 0 0 1 17 2a7 7 0 0 1 7 7c0 4.897-3.061 8.41-5.75 10.562a24.585 24.585 0 0 1-4.989 3.07c-.566.258-.92.368-1.261.368h-.032l-.033-.002c-.484-.032-.881-.218-1.12-.33a22.658 22.658 0 0 1-1.322-.653 24.524 24.524 0 0 1-3.747-2.454C3.058 17.41 0 13.896 0 9a7 7 0 0 1 7-7c1.918 0 3.701.776 5 2.041ZM3 9a4 4 0 0 1 4-4c1.957 0 3.652 1.396 4.02 3.2a1 1 0 0 0 1.96 0C13.348 6.396 15.043 5 17 5a4 4 0 0 1 4 4c0 3.552-2.22 6.295-4.625 8.22A21.58 21.58 0 0 1 12 19.91a21.525 21.525 0 0 1-4.377-2.69C5.217 15.295 3 12.551 3 9Z'
											clipRule='evenodd'
										></path>
									</svg>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										fill='none'
										className='product_box_threedots'
									>
										<path
											fill='white'
											d='M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z'
										></path>
										<path
											fill='#001A34'
											d='M5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-5 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z'
										></path>
									</svg>
								</h4>
								<div className='product_box_cardprice'>
									{Math.floor((u.price / 100) * 90)} $
									<span className='product_box_cardprice_text'>
										c Ozon Картой
									</span>
								</div>
								<div className='product_box_price'>{Math.floor(u.price)} $</div>
								<span className='product_box_pricewithdiscount'>
									{Math.floor(u.price + (u.price / 100) * getRandomInt())} $
								</span>
							</span>
							<span className='product_title'>{u.title}</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								className='product_box_star'
							>
								<path
									fill='currentColor'
									d='M8 0c.36 0 .693.182.87.477L11.115 4.2l4.076.738c.358.065.65.307.762.632a.895.895 0 0 1-.224.93L12.77 9.45l.747 4.468a.911.911 0 0 1-.392.899 1.056 1.056 0 0 1-1.03.09L8 13.054l-4.095 1.854a1.056 1.056 0 0 1-1.03-.091.911.911 0 0 1-.392-.899L3.23 9.45.272 6.502a.895.895 0 0 1-.224-.93.981.981 0 0 1 .762-.633L4.886 4.2 7.129.477C7.307.182 7.64 0 8 0Z'
								></path>
							</svg>
							<span className='product_box_star_text'>{u.rating.rate}</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								className='product_box_comment'
							>
								<path
									fill='currentColor'
									d='M2 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6.303l-2.748 1.832A1 1 0 0 1 2 13V6Zm2 5.132 1.445-.964A1 1 0 0 1 6 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5.132Z'
								></path>
							</svg>
							<span className='product_box_comment_text'>{u.rating.count}</span>
						</td>
					</span>
				))}
			</div>
		</div>
	)
}

export default UseProducts
