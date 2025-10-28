import { FaTruck, FaHeadset, FaCheckCircle } from 'react-icons/fa';

export default function Feature() {
    const services = [
        {
            icon: <FaTruck className="text-4xl text-black" />,
            title: "FREE AND FAST DELIVERY",
            description: "Free delivery for all orders over $140",
        },
        {
            icon: <FaHeadset className="text-4xl text-black" />,
            title: "24/7 CUSTOMER SERVICE",
            description: "Friendly 24/7 customer support",
        },
        {
            icon: <FaCheckCircle className="text-4xl text-black" />,
            title: "MONEY BACK GUARANTEE",
            description: "We return money within 30 days",
        },
    ];

    return (
        <section className="w-full py-10 flex items-center justify-center">
            <div className="max-w-6xl container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center space-y-3 sm:space-y-4">
                        {service.icon}
                        <h3 className="text-lg sm:text-xl font-bold">{service.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
