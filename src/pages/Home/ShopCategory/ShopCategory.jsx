import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategory from './SubCategory';

const ShopCategory = () => {
  const [subcategoryValue, setsubcategoryValue] = useState([]);
  // const handleTab = (value) => {
  //   console.log(value);
  //   fetch(`https://zoo-land-server-sigma.vercel.app/alltoys?subcategory=${value}`)
  //     .then(res => res.json())
  //     .then(data => setsubcategoryValue(data))
  // }

  useEffect(() => {
    fetch(`https://zoo-land-server-sigma.vercel.app/alltoys`)
      .then(res => res.json())
      .then(data => setsubcategoryValue(data))
  }, [])
  return (

    <div className="mx-auto mt-16 text-center">
      <h2 className="text-4xl font-bold text-center mb-5 text-gray-600">Category Oasis: Find Fun</h2>
      <p className="max-w-xl border-l-8 border-r-8 border-orange-500 mx-auto mb-9">Quench your thirst for playtime exploration with our oasis of toy categories. Journey through the vast desert of possibilities and uncover hidden treasures.</p>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/adorable-baby-playing-with-toy-home-floor_23-2149355548.jpg?w=740&t=st=1684903027~exp=1684903627~hmac=2fff0cdf24eb6b507a1806c20ae3db94774739284f71f8c669dc6019187452e2")` }}>
        <div className="hero-overlay bg-opacity-30">
          <div className="hero-content text-center text-neutral-content">
            <Tabs>
              <TabList>
                <Tab>Plush Toys</Tab>
                <Tab>Water Toys</Tab>
                <Tab>Action Toys</Tab>
              </TabList>

              <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3'>
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
          </div>  </div>  </div>

    </div>
  );
};

export default ShopCategory;