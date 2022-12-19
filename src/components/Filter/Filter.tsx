import '@/styles/CategoryFilter.scss'
import CategoryFilter from './CategoryFilter'
import FinalSale from './FinalSale'
import DeliveryTime from './DeliveryTime'
import BootSize from './BootSize'
import Brands from './Brands'
import Season from './Season'
import Type from './Type'
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
