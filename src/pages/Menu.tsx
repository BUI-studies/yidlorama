import { K } from '../components/Card/types';
import { Card } from '../components/';

let data: K = [
  {
    Borscht: [
      { name: 'Traditional Borscht', price: '5.99' },
      { name: 'Green Borscht', price: '6.99' },
      { name: 'Cold Borscht', price: '4.99' },
      { name: 'Mushroom Borscht', price: '5.49' },
      { name: 'Beef Borscht', price: '6.49' },
      { name: 'Vegan Borscht', price: '5.99' },
      { name: 'Ukrainian Borscht', price: '7.99' },
      { name: 'Polish Borscht', price: '5.99' },
      { name: 'Lamb Borscht', price: '6.99' },
      { name: 'Spicy Borscht', price: '4.99' }
    ]
  },
  {
    Salad: [
      { name: 'Olivier Salad', price: '3.99' },
      { name: 'Vinaigrette Salad', price: '4.49' },
      { name: 'Cucumber Salad', price: '2.99' },
      { name: 'Greek Salad', price: '5.49' },
      { name: 'Caesar Salad', price: '6.49' },
      { name: 'Chicken Salad', price: '5.99' },
      { name: 'Pasta Salad', price: '4.99' },
      { name: 'Fruit Salad', price: '3.99' },
      { name: 'Avocado Salad', price: '6.99' },
      { name: 'Bean Salad', price: '4.99' }
    ]
  }
]
const Menu = () => {
	return (
	<>
		<h2>menu</h2>
		<Card data={data} />
	</>
	)
}

export default Menu
