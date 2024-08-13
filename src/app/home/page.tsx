import { GrNext } from "react-icons/gr";
import Image from 'next/image';
import { FcPrevious } from "react-icons/fc";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';

export default function Home() {
  const dishes = [
    { src: "fish.jpeg", name: "Fruit dish" },
    { src: "fruit.jpeg", name: "Fruit dish" },
    { src: "fruitdish.jpeg", name: "Sea fish dish" },
    { src: "pizza.jpeg", name: "Pizza" }
  ];
  const offers = [
    { src: "burger.png", title: "Any day offers", subtitle: "New phenomenon tasty burger", price: "$12.90" },
    { src: "plate.png", title: "Other flavors", subtitle: "Save room we made salats", price: "$10.90" },
    { src: "location.png", title: "Find a paco store near you" }
  ];
  const services = [
    { src: "restuarant.png", name: "55+ Restaurant" },
    { src: "goodquality.png", name: "Good Quality" },
    { src: "discount.png", name: "Discounts System" },
    { src: "delivary.png", name: "Fast Delivery" }
  ];

  return (
    <main className="font-sans bg-gray-50">
      <div className="flex justify-evenly mt-10 mx-20">
        <div className="flex flex-col justify-center items-start mr-10 w-1/2">
          <p className="font-bold text-6xl mt-4 leading-tight">
            Enjoy Delicious<br />
            Food in <span className="italic text-amber-500">Healthy life</span>
          </p>
          <p className="text-xl font-light text-gray-600 leading-8 mb-8">
            London masala is an Indian spice blend consisting of a variety of spices. Tandoori masala is a spice blend consisting of a variety of spices.
          </p>
          <button className="bg-amber-500 w-52 h-12 text-white rounded-3xl hover:bg-amber-600 transition duration-300">Order now</button>
        </div>
        <div className="flex items-end w-1/2">
          <img src="./chicken.png" alt="chicken" className="rounded-full w-84 h-84 object-cover" />
        </div>
      </div>

      <div className="text-center mt-20">
        <h3 className="italic font-bold text-4xl mb-4 font-serif">Online Store</h3>
        <h1 className="font-bold text-6xl mb-8">Popular foods</h1>
      </div>
      <div className="flex flex-wrap justify-between mt-20 mx-20 gap-10">
      {dishes.map((dish, index) => (
        <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <img src={dish.src} alt="Dish" className="rounded-full w-40 h-40 object-cover" />
          <p className="text-2xl font-bold mt-2">{dish.name}</p>
          <p className="text-lg mt-2 text-gray-600">Dingo food</p>
          <div className="flex text-amber-500 mt-2">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <button className="bg-amber-500 w-40 h-10 text-white rounded-3xl mt-4 hover:bg-amber-600 transition duration-300">Add to Cart $589</button>
        </div>
      ))}
    </div>

      <div className="flex items-center justify-between mx-20 my-20 p-10 bg-gray-100 rounded-lg shadow-lg">
        <div className="flex-1 pr-6">
          <p className="font-bold text-6xl">Our Special Offer</p>
          <p className="text-xl font-light text-gray-600 leading-8 mt-4">
            Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
          </p>
            <button className="bg-amber-500 text-white p-3 rounded-r-lg hover:bg-amber-600 transition duration-300">See All Menus</button>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/offers.png"
            alt="Delicious food"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>

      <div className="text-center mt-20">
        <p className="text-4xl">Quality Food</p>
        <p className="text-6xl mt-5">Get The Best Offers</p>
        <p className="text-xl font-light text-gray-600 leading-8 mt-4">
          The food at your doorstep. Why starve when you have us. Your hunger partner. Straight out of our oven to your doorstep.
        </p>
      </div>
      <div className="flex justify-center mt-20 mx-20">
      {offers.map((offer, index) => (
        <div key={index} className="flex items-center mx-10 my-10 p-10 bg-gray-100 rounded-lg shadow-lg">
          <div className="mr-6">
            <h2 className="text-4xl font-bold">{offer.title}</h2>
            <h3 className="text-2xl mt-2">{offer.subtitle}</h3>
            <p className="text-amber-500 mt-2">{offer.price}</p>
          </div>
          <div>
            <img src={offer.src} alt={offer.title} className="w-32 h-32 object-cover" />
          </div>
        </div>
      ))}
    </div>
     

      <div className="text-center mt-20">
        <p className="font-bold text-6xl">Our Service</p>
      </div>

      <div className="flex flex-wrap justify-between mt-20 mx-20 gap-10">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={service.src} alt={service.name} className="w-24 h-24 object-cover" />
          <p className="font-bold text-3xl mt-2">{service.name}</p>
        </div>
      ))}
    </div>

      <div className="text-center mt-20">
        <h2 className="text-4xl">Testimonials</h2>
        <p className="text-6xl mt-5">What Our Clients Say</p>
        <p className="text-xl font-light text-gray-600 leading-8 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="flex justify-center mt-10 space-x-4">
  {["shenseea.jpg", "customer.jpg", "images.jpeg", "customer.jpg"].map((src, index) => (
    <div key={index} className="w-24 h-24 rounded-full overflow-hidden">
      <img src={src} alt="Client" className="w-full h-full object-cover" />
    </div>
  ))}
</div>


      <div className="text-center mt-20 text-2xl">
        <p>Mitchell Marsh</p>
        <p>CEO, Bexon Agency</p>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-10">
        <FcPrevious className="text-2xl" />
        <div className="bg-amber-500 rounded-full p-2">
          <GrNext className="text-2xl text-white" />
        </div>
      </div>


      <div className="flex justify-evenly mt-20">
        <div>
          <img src="/phone.png" alt="App" className="w-64 h-84 object-cover " />
        </div>
        <div className="text-left max-w-lg px-4 lg:px-0">
        <p className="text-amber-500 font-serif text-2xl">Download Our App</p>
        <p className="font-bold text-5xl mt-4">It's all here. All in one app.</p>
        <p className="text-xl text-gray-600 mt-2">Restaurants, nearby grocery and convenience, and more.</p>
    <div className="flex mt-6 space-x-4 justify-center lg:justify-start">
      <img src="/appstore.png" className="object-cover w-36 h-24" />
      <img src="/playstore.png" className="object-cover w-36 h-24" />
    </div>
  </div>
      </div>

      <div className="flex justify-evenly mt-20">
  <div className="flex flex-col md:flex-row items-center max-w-6xl space-y-14 md:space-y-0 md:space-x-10 p-6 bg-white rounded-lg shadow-md">
    <div className="text-center md:text-left md:w-1/2">
      <p className="font-bold text-5xl">Subscribe to Our Newsletter</p>
      <p className="text-xl text-gray-600 mt-4">Subscribe to our newsletter to get our news and updates.</p>
    </div>
    <div className="flex items-between mt-6 md:mt-0 md:w-1/2">
      <input placeholder="Your email address.." className="p-3 border  flex-grow" />
      <button className="bg-amber-500 text-white p-3 rounded-r-lg hover:bg-amber-600 transition duration-300">Subscribe</button>
    </div>
  </div>
</div>

      <footer className="bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">FoodHouse</h2>
              <p className="text-sm text-gray-400 mb-4">
                Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
              </p>
              <div className="flex space-x-4">
                <Link href="#"><CiLinkedin className="text-2xl" /></Link>
                <Link href="#"><FaFacebookF className="text-2xl" /></Link>
                <Link href="#"><FaTwitter className="text-2xl" /></Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#">Career</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Press Info</Link></li>
                <li><Link href="#">Features</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Fudo</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#">Why Fudo</Link></li>
                <li><Link href="#">How it Works</Link></li>
                <li><Link href="#">Why Choose Us</Link></li>
                <li><Link href="#">Client Stories</Link></li>
                <li><Link href="#">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Menu</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#">Breakfast</Link></li>
                <li><Link href="#">Lunch</Link></li>
                <li><Link href="#">Dinner</Link></li>
                <li><Link href="#">Fast Foods</Link></li>
                <li><Link href="#">Drinks</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-yellow-500 py-4 text-center text-White">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="container mx-auto px-4 text-center text-sm">
            <p>Copyright 2021 Besnik All Right Reserved</p>
  </div>
            <div className="space-x-4">
              <Link href="#" className="hover:underline">Terms</Link>
              <Link href="#" className="hover:underline">Privacy</Link>
              <Link href="#" className="hover:underline">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}


