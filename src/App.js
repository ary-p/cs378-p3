import MenuItem from './components/MenuItem';
import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import './App.css';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  //Used Chat GPT to understand how to initialize and increment counts for state
  //Conversation link - https://chat.openai.com/c/ed859418-273f-480a-aeed-9c9728691a5d
  const[count, setCount] = useState(() => {
    const initialState = {};
    menuItems.forEach(item => {
      initialState[item.id] = 0; 
    })
    return initialState;
  });

  const addItem = (id) => {
    setCount(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  }
  
  const removeItem = (id) => {
    setCount(prev => {
      const new_count = prev[id] > 0 ? prev[id] - 1 : prev[id];
      return{
        ...prev,
        [id]: new_count
      }
      
    });
  }

  const total = () => {
    let total_amount = 0;
    menuItems.forEach(item => {
      total_amount += count[item.id] * item.price;
    });
    return total_amount;
  }

  const order = () => {
    const orderedItems = menuItems.filter(item => count[item.id] > 0);
    if (orderedItems.length == 0) {
      alert("No items in cart");
    }
    else {
      let message = "";
      orderedItems.forEach(item => {
        message += ("Item: " + item.title + " Quantity: " + count[item.id])
      })
      alert('Order placed! ' + message);
    }
  }

  const clear_all = () => {
    setCount(() => {
      const clearedState = {};
      menuItems.forEach(item => {
        clearedState[item.id] = 0;
      });
      return clearedState;
    });

  }

  return (
    <div>
      <h1>Takizme</h1>
      <img class='logo' src='images/japanese_resto.jpeg' alt = 'Edible item'/>
      <h2>Food that touches the soul</h2>
      <div className="menu">
        {menuItems.map((item) => (
           <MenuItem title={item.title} description={item.description} imageName={item.imageName} price={item.price} quantity={count[item.id]} addItem={() => addItem(item.id)} removeItem={() => removeItem(item.id)}/> 
        ))}
      </div>
      <div className="row">
        <div class = "col-2">
          <h5 class = 'subtotal'>Subtotal ${total().toFixed(2)}</h5>
        </div>
        <div class = "col-2">
            <button onClick={order} type = "button">Order</button>
        </div>

        <div class = "col-2">
            <button onClick={clear_all} type = "button">Clear all</button>
        </div>
      </div>
    </div>
  );
}


export default App;
