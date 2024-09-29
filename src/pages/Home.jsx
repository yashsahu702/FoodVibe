import Navbar from '../components/navbar';
import CategoryMenu from '../components/CategoryMenu';
import FoodItems from '../components/FoodItems';
import Carts from '../components/Carts';
const Home  = () => {
 
  return (
    <div>
      <Navbar/>
      <CategoryMenu/>
      <FoodItems/>
      <Carts/>
      
      
    </div>
  )
}

export default Home; 