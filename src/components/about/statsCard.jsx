
import React from 'react';
import { FaUsers, FaDollarSign, FaShoppingCart, FaMoneyBill } from 'react-icons/fa';

const StatsCard = () => {
  const stats = [
    {
      id: 1,
      icon: <FaUsers className="text-gray-600" />,
      value: '10.5k',
      label: 'Sellers active our site',
    },
    {
      id: 2,
      icon: <FaDollarSign className="text-gray-600" />,
      value: '33k',
      label: 'Monthly Product Sale',
    },
    {
      id: 3,
      icon: <FaShoppingCart className="text-gray-600" />,
      value: '45.5k',
      label: 'Customer active in our site',
    },
    {
      id: 4,
      icon: <FaMoneyBill className="text-gray-600" />,
      value: '25k',
      label: 'Annual gross sale in our site',
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-auto bg-gray-100 p-4">
      <div className="flex gap-20">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`w-50 h-50 bg-white shadow-md rounded-lg flex flex-col items-center justify-center hover:bg-red-500 duration-150`}
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-center">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;