import { useEffect, useState } from "react";
const Services = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setservices(data);
                console.log(data);
            })
    }, [])
    return (
        <div className="mx-auto my-40 ">
            <h2 className="text-4xl font-bold text-center  text-[#e51f6e] mb-14">Our Top Services</h2>
            {/* <p className="max-w-xl border-l-8 border-r-8 border-orange-500 mx-auto mb-14 text-justify px-2"> Explore our services of - 100% Satisfaction Guarantee, Discounts and Promotions, Gift Cards, Gift Wrapping Services, Online Ordering and Delivery.
            </p> */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
                {
                    services.map(service => <div
                        key={service.id}>
                        <div >
                            <img src={service.image} alt="service" className="w-1/4 mx-auto rounded-full mb-5 shadow-2xl border-2 p-1 border-[#e51f6e]" />     </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">{service.title}</h2>
                            <p className="text-gray-600"> {service.description}
                            </p>


                        </div>
                    </div>)}

            </div>
        </div>
    );
};

export default Services;