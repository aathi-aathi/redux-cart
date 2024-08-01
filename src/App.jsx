import './App.css'
import Product from './product'
import data from './product.json'
import { getProducts } from './redux/productSlice'
import { useDispatch } from 'react-redux'
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
