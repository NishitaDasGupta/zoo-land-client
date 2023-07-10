import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategory from './SubCategory';

const ShopCategory = () => {
  const [subcategoryValue, setsubcategoryValue] = useState([]);


  useEffect(() => {
    fetch(`https://zoo-land-server-sigma.vercel.app/alltoys`)
      .then(res => res.json())
      .then(data => setsubcategoryValue(data))
  }, [])
  return (

    <div className="mx-auto my-40 text-center">
      <h2 className="text-4xl font-bold text-center mb-5 text-[#e51f6e]">Category: Discover Endless Fun</h2>

      <p className="max-w-xl  mx-auto mb-10 text-justify px-2">Quench your thirst for playtime exploration with our oasis of toy categories. Journey through the vast desert of possibilities and uncover hidden treasures.</p>
    
          <div className="text-center  text-[#e51f6e]">
            <Tabs>
              <TabList>
                <Tab>Plush Toys</Tab>
                <Tab>Water Toys</Tab>
                <Tab>Action Toys</Tab>
              </TabList>

              <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 mx-1'>
                  {
                    (subcategoryValue.filter(toy => toy.subcategory === "Plush Toys")).map(value => <SubCategory key={value._id}
                      value={value}></SubCategory>)
                  }
                </div>
              </TabPanel>
              <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3'>
                  {
                    (subcategoryValue.filter(toy => toy.subcategory === "Water Toys")).map(value => <SubCategory key={value._id}
                      value={value}></SubCategory>)
                  }
                </div>
              </TabPanel>
              <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3'>
                  {
                    (subcategoryValue.filter(toy => toy.subcategory === "Action Toys")).map(value => <SubCategory key={value._id}
                      value={value}></SubCategory>)
                  }
                </div>
              </TabPanel>
            </Tabs>
          </div> 

    </div>
  );
};

export default ShopCategory;