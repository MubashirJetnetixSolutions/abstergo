import LoomicProductExperience from './LoomicProductExperience';
import {getLoomicProduct} from '../../lib/content/loomic-products';
export default function UltraProductPage(){return <LoomicProductExperience product={getLoomicProduct('voltis-power-ultra')}/>}
