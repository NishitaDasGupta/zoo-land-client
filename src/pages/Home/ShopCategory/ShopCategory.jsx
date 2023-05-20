import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategory from './SubCategory';

const ShopCategory = () => {
  const [subcategoryValue, setsubcategoryValue] = useState([]);
  // const handleTab = (value) => {
  //   console.log(value);
  //   fetch(`http://localhost:5000/alltoys?subcategory=${value}`)
  //     .then(res => res.json())
  //     .then(data => setsubcategoryValue(data))
  // }

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys`)
      .then(res => res.json())
      .then(data => setsubcategoryValue(data))
  }, [])
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/group-animal-playing-park_1308-23615.jpg?size=626&ext=jpg&ga=GA1.2.1614607020.1683036746&semt=ais")` }}>
      <div className="hero-overlay bg-opacity-60">
        <div className="hero-content text-center text-neutral-content">
          <Tabs>
            <TabList>
              <Tab>Plush Toys</Tab>
              <Tab>Water Toys</Tab>
              <Tab>Action Toys</Tab>
            </TabList>

            <TabPanel>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                  (subcategoryValue.filter(toy => toy.subcategory === "Plush Toys")).map(value => <SubCategory key={value._id}
                    value={value}></SubCategory>)
                }
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                  (subcategoryValue.filter(toy => toy.subcategory === "Water Toys")).map(value => <SubCategory key={value._id}
                    value={value}></SubCategory>)
                }
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                  (subcategoryValue.filter(toy => toy.subcategory === "Action Toys")).map(value => <SubCategory key={value._id}
                    value={value}></SubCategory>)
                }
              </div>
            </TabPanel>
          </Tabs>
        </div>  </div>  </div>
  );
};

export default ShopCategory;