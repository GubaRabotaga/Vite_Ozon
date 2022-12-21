import '@/styles/CategoryFilter.scss'
import CategoryFilter from './CategoryFilter'
import FinalSale from './FinalSale'
import DeliveryTime from './DeliveryTime'
import BootSize from './SquareButtons/BootSize'
import Brands from './SquareButtons/Brands'
import Season from './SquareButtons/Season'
import Type from './SquareButtons/Type'
import Selector from './Selector'
function Filter() {
	return (
		<div>
			<CategoryFilter />
			<FinalSale />
			<DeliveryTime />
			<BootSize />
			<Brands />
			<Season />
			<Type />
			<Selector />
		</div>
	)
}

export default Filter
