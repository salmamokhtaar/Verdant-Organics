import Image from 'next/image'
import f2 from '@/assets/img/f2.png'
import f4 from '@/assets/img/f4.png'
import f5 from '@/assets/img/f5.png'
import { GiBroccoli } from 'react-icons/gi'
import { FaLeaf, FaSeedling, FaRecycle, FaHandHoldingHeart } from 'react-icons/fa'

export default function About() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'Founder & CEO',
      bio: 'Sarah founded Verdant Organics with a passion for sustainable agriculture and healthy living.',
      image: f5,
    },
    {
      name: 'Michael Brown',
      position: 'Head of Operations',
      bio: 'Michael ensures that our organic products meet the highest quality standards at Verdant.',
      image: f4,
    },
    {
      name: 'Emily Davis',
      position: 'Chief Nutritionist',
      bio: 'Emily helps develop our product range with a focus on nutritional benefits and wellness.',
      image: f5,
    },
    {
      name: 'David Wilson',
      position: 'Farm Manager',
      bio: 'David oversees our organic farming operations and sustainable growing practices.',
      image: f4,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Width */}
      <div className="bg-gradient-to-r from-[#80B600] to-[#6a9900] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <GiBroccoli className="text-6xl mr-4" />
            <h1 className="text-5xl font-bold">Verdant Organics</h1>
          </div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the vibrant flavors of nature with our premium organic produce delivered to your door.
          </p>
        </div>
      </div>

      {/* Our Story - Side by Side */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={f2}
                alt="Organic farming"
                className="w-full rounded-2xl shadow-lg"
                placeholder="blur"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                At Verdant Organics, we believe in the power of nature to nourish our bodies and sustain our planet.
                Our journey began in 2010 with a simple mission: to make organic, sustainably grown food accessible to everyone.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                What started as a small family farm has grown into a community of passionate farmers, nutritionists,
                and food lovers dedicated to bringing the vibrant flavors of nature to your table.
              </p>
              <div className="bg-[#EFF5E9] p-6 rounded-lg">
                <p className="text-[#80B600] font-semibold text-lg">
                  &ldquo;Fresh organic produce, sustainably grown and delivered with care.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section - Boxy Cards Layout */}
<div className="py-20 bg-[#F7F4EB]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Core Values</h2>
      <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {[
        {
          icon: <FaLeaf className="text-2xl text-white" />,
          title: 'Organic Integrity',
          description: "We&rsquo;re committed to organic farming practices that protect the environment and produce the healthiest food.",
          color: 'bg-green-500'
        },
        {
          icon: <FaSeedling className="text-2xl text-white" />,
          title: 'Sustainability',
          description: 'Our farming practices are designed to sustain and regenerate the land for future generations.',
          color: 'bg-blue-500'
        },
        {
          icon: <FaRecycle className="text-2xl text-white" />,
          title: 'Environmental Stewardship',
          description: 'We minimize waste and use eco-friendly packaging to reduce our environmental footprint.',
          color: 'bg-purple-500'
        },
        {
          icon: <FaHandHoldingHeart className="text-2xl text-white" />,
          title: 'Community Support',
          description: 'We partner with local farmers and give back to the communities that support us.',
          color: 'bg-orange-500'
        },
      ].map((value, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300">
          <div className={`${value.color} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
            {value.icon}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
          <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

   {/* Team Section - Simple Grid */}
<div className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
      <p className="text-gray-600 text-lg">The passionate people behind Verdant Organics</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="text-center group">
          <div className="relative mb-6">
            <Image
              src={member.image}
              alt={member.name}
              className="w-full h-64 rounded-lg object-cover shadow-md group-hover:shadow-xl transition-shadow duration-300"
              width={300}
              height={256}
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-[#80B600] opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
          </div>
          <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
          <p className="text-[#80B600] font-medium mb-3">{member.position}</p>
          <p className="text-gray-600 text-sm">{member.bio}</p>
        </div>
      ))}
    </div>
  </div>
</div>
    </div>
  )
}