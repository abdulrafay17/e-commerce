export default function OurProducts() {
  const products = [
    {
      id: 1,
      image: '/images/product5.png',
      name: 'Breed Dry Dog Food',
      price: '$100',
      rating: '★★★★★',
      reviews: '(35)',
      badge: 'NEW',
      badgeColor: 'bg-green-500',
      badgeTextColor: 'text-white',
      isAddToCart: true,
    },
    {
      id: 2,
      image: '/images/product6.png',
      name: 'CANON EOS SLR Camera',
      price: '$360',
      rating: '★★★★★',
      reviews: '(18)',
      badge: '',
      badgeColor: '',
      badgeTextColor: '',
      isAddToCart: true,
    },
    {
      id: 3,
      image: '/images/product7.png',
      name: 'ASUS FHD Gaming Laptop',
      price: '$700',
      rating: '★★★★★',
      reviews: '(125)',
      badge: '',
      badgeColor: '',
      badgeTextColor: '',
      isAddToCart: true,
    },
    {
      id: 4,
      image: '/images/product8.png',
      name: 'Curlogy Product Set',
      price: '$500',
      rating: '★★★★★',
      reviews: '(48)',
      badge: '',
      badgeColor: '',
      badgeTextColor: '',
      isAddToCart: true,
    },
    {
      id: 5,
      image: '/images/product9.png',
      name: 'Kids Electric Car',
      price: '$190',
      rating: '★★★★★',
      reviews: '(56)',
      badge: '',
      badgeColor: '',
      badgeTextColor: '',
      isAddToCart: true,
    },
    {
      id: 6,
      image: '/images/product10.png',
      name: 'Jr. Zoom Soccer Cleats',
      price: '$160',
      rating: '★★★★★',
      reviews: '(35)',
      badge: 'NEW',
      badgeColor: 'bg-green-500',
      badgeTextColor: 'text-white',
      isAddToCart: true,
    },
    {
      id: 7,
      image: '/images/product11.png',
      name: 'GP1 Shooter USB Gamepad',
      price: '$60',
      rating: '★★★★★',
      reviews: '(55)',
      badge: '',
      badgeColor: '',
      badgeTextColor: '',
      isAddToCart: true,
    },
    {
      id: 8,
      image: '/images/product12.png',
      name: 'Quilted Satin Jacket',
      price: '$85',
      rating: '★★★★★',
      reviews: '(15)',
      badge: '',
      badgeColor: '',
      badgeTextColor: '',
      isAddToCart: true,
    },
  ];

  return (
    <div className="w-full px-4 md:px-7 flex flex-col justify-center">
      {/* Header */}
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center">
          <div className="w-5 h-5 md:h-15 bg-red-500 rounded-lg"></div>
          <span className="text-red-500 font-bold text-xl px-2 py-1 mr-2">Our Products</span>
        </div>
        <div className="flex items-center justify-between md:justify-start gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Explore Our Products</h2>
          <div className="hidden md:flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-200">&lt;</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-200">&gt;</button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="relative p-3 flex flex-col items-center">
              {product.badge && (
                <span
                  className={`${product.badgeColor} ${product.badgeTextColor} absolute top-2 left-2 px-2 py-1 rounded text-xs font-medium z-10`}
                >
                  {product.badge}
                </span>
              )}
              <img src={product.image} alt={product.name} className="mx-auto object-cover mb-2" />
              <div className="absolute top-2 right-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              {product.isAddToCart && (
                <button className="bg-black text-white px-4 py-2 rounded w-full text-sm font-medium hover:bg-gray-800 transition-colors mt-2">
                  Add To Cart
                </button>
              )}
            </div>
            <div className="p-3 flex flex-col">
              <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm mb-2 gap-1">
                <div className="text-lg font-bold text-gray-900">{product.price}</div>
                {product.originalPrice && <div className="text-gray-500 line-through">{product.originalPrice}</div>}
                <div className="text-yellow-400">{product.rating}</div>
                <div className="text-gray-500">{product.reviews}</div>
              </div>
              {product.id > 4 && (
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full border-2"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mb-6">
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          View All Products
        </button>
      </div>
    </div>
  );
}
