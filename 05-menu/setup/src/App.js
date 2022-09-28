import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// set only gets the unique values (objects)! 
// new Set(items.map((item)=> item.category)) ---> {"breakfast", "lunch", "shakes"}
// we want all in our categories as well, hence the below
const allCategories = ['all', ...new Set(items.map((item)=> item.category))];
// console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items);
      return
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
