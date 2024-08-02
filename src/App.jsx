
import './App.css'
import Product from './product'
import {useDispatch,} from 'react-redux'
import data from './product.json'
import { getProducts } from './redux/productSlice'

function App() {

const dispatch = useDispatch()
dispatch(getProducts(data))
 return (

    <div className='products'>
   <Product/>
    </div>
 
 ) 
}

export default App
