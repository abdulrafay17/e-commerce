export default function NewArrival() {
  const products = [
    {
      id: 1,
      image: '/images/ps5.png',
      title: 'PlayStation 5',
      description: 'Black and White version of the PS5 coming out soon.',
      buttonText: 'Shop Now',
      span: 'md:col-span-2 md:row-span-2', // BIG card
    },
    {
      id: 2,
      image: '/images/womanhat.png',
      title: 'Women’s Collections',
      description: 'Featured woman collections that give you another vibe.',
      buttonText: 'Shop Now',
      span: 'md:col-span-2', // wide
    },
    {
      id: 3,
      image: '/images/amezoalexa.png',
      title: 'Speakers',
      description: 'Amazon wireless speakers',
      buttonText: 'Shop Now',
      span: '', // normal
    },
    {
      id: 4,
      image: '/images/perfume.png',
      title: 'Perfume',
      description: 'GUCCI Intense Oud EDP',
      buttonText: 'Shop Now',
      span: '', // normal
    },
  ];

  return (
    <div className="w-full px-4 md:px-7 flex flex-col justify-center">
      {/* Header */}
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center">
          <div className="w-5 h-5 md:h-15 bg-red-500 rounded-lg"></div>
          <span className="text-red-500 font-bold text-xl px-2 py-1 mr-2">Featured</span>
        </div>
        
      </div>
<h2 className="text-2xl md:text-3xl font-bold">New Arrival</h2>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] sm:auto-rows-[300px] gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative bg-black text-white rounded-lg overflow-hidden shadow-lg flex flex-col justify-end ${product.span}`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative p-4 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end h-full">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{product.description}</p>
              <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors w-full sm:w-auto">
                {product.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
