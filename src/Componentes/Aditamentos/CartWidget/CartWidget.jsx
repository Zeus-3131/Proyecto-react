import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
        <ul>
        <li><FontAwesomeIcon className='carrito' bounce size="sm" icon={faCartArrowDown} />3</li>
        </ul>
    </div>
  )
}

export default CartWidget