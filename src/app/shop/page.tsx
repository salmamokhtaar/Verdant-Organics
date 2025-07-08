import Image from 'next/image'
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa'

import f7 from '@/assets/img/f7.png'
import f8 from '@/assets/img/f8.png'
import f9 from '@/assets/img/f9.png'
import f10 from '@/assets/img/f10.png'
import f11 from '@/assets/img/f11.png'
import f12 from '@/assets/img/f12.png'
import f13 from '@/assets/img/f13.png'
import f14 from '@/assets/img/f14.png'

export default function Shop() {
  const products = [
    { id: 1, name: 'Fresh Apples', price: 39.0, image: f7, rating: 'empty' },
    { id: 2, name: 'Organic Carrots', price: 29.0, image: f8, rating: 'half' },
    { id: 3, name: 'Green Broccoli', price: 25.0, image: f9, rating: 'full' },
    { id: 4, name: 'Fresh Tomatoes', price: 19.0, image: f10, rating: 'half' },
    { id: 5, name: 'Red Peppers', price: 22.0, image: f11, rating: 'half' },
    { id: 6, name: 'Organic Lettuce', price: 18.0, image: f12, rating: 'full' },
    { id: 7, name: 'Fresh Cucumbers', price: 15.0, image: f13, rating: 'half' },
    { id: 8, name: 'Organic Spinach', price: 24.0, image: f14, rating: 'empty' },
    { id: 9, name: 'Fresh Strawberries', price: 45.0, image: f7, rating: 'full' },
    { id: 10, name: 'Organic Blueberries', price: 49.0, image: f8, rating: 'half' },
    { id: 11, name: 'Fresh Oranges', price: 35.0, image: f9, rating: 'empty' },
    { id: 12, name: 'Organic Lemons', price: 28.0, image: f10, rating: 'full' },
  ]

  const renderRating = (ratingType: string) => {
    switch (ratingType) {
      case 'empty':
        return (
          <>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </>
        )
      case 'half':
        return (
          <>
            <FaStarHalfAlt />
            <FaStarHalfAlt />
            <FaStarHalfAlt />
            <FaStarHalfAlt />
          </>
        )
      case 'full':
        return (
          <>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Shop Our Products</h1>

      {/* Filter and Sort Options */}
      <div className="flex flex-wrap justify-between items-center mb-8">
        <div className="mb-4 md:mb-0">
          <label className="mr-2 font-medium">Filter by:</label>
          <select className="border rounded-md p-2 bg-white">
            <option>All Products</option>
            <option>Fruits</option>
            <option>Vegetables</option>
            <option>Organic</option>
          </select>
        </div>
        <div>
          <label className="mr-2 font-medium">Sort by:</label>
          <select className="border rounded-md p-2 bg-white">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-[#F9F9F9] p-6 flex items-center justify-center h-48">
              <Image
                src={product.image}
                alt={product.name}
                className="max-h-full object-contain"
                placeholder="blur"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-center gap-1 text-yellow-600 mb-2">
                {renderRating(product.rating)}
              </div>
              <h3 className="text-lg font-bold text-center">{product.name}</h3>
              <p className="text-[#80B600] font-bold text-xl text-center">
                ${product.price.toFixed(2)}
              </p>
              <button className="mt-4 w-full bg-[#80B600] text-white py-2 rounded-md hover:bg-[#6a9900] transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
