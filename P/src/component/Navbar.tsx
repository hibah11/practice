import logo from '../assets/logo.png'
import location from '../assets/location.svg'
import searching from '../assets/search.svg'
export default function Navbar() {
  return (
    <div>
      <div className = 'bg-[#131921] py-1 px-4 flex flex-row items-center gap-3'>
        <img className = 'p-3 rounded w-32 hover:border' src = {logo}></img>
        <div className = 'flex flex-col'>
            <p className = 'text-gray-300 text-xs'>Deliver to hibah</p>
            <div className = 'flex flex-row gap-2'>
            <img src = {location}></img>
            <p className = 'text-white font-bold text-sm'>Riyadh</p>
            </div>
        </div>
        <div className = ' rounded flex flex-row'>

        <select className = 'rounded-l text-xs'>
    <option >All Departments</option>
    <option >Arts & Crafts</option>
    <option >Automotive</option>
    <option >Beauty & Personal Care</option>
    <option >Books</option>
    <option >Boys' Fashion</option>
    <option >Computers</option>
    <option >Deals</option>
    <option >Digital Music</option>
    <option >Electronics</option>
    <option >Girls' Fashion</option>
    <option >Health & Household</option>
    <option >Home & Kitchen</option>
    <option>Industrial & Scientific</option>
    <option>Kindle Store</option>
    <option>Luggage</option>
    <option>Men's Fashion</option>
    <option>Movies & TV</option>
    <option>Music, CDs & Vinyl</option>
    <option>Pet Supplies</option>
    <option>Prime Video</option>
    <option>Software</option>
    <option>Sports & Outdoors</option>
    <option>Tools & Home Improvement</option>
    <option>Toys & Games</option>
    <option>Video Games</option>
    <option>Women's Fashion</option>
  </select>

  <input className = 'bg-white' type="text" placeholder="Search Amazon" name="search"></input>
      <a className = 'bg-[#F3A846] p-1 rounded-r'><img className = 'h-5 w-10' src = {searching} ></img></a>
        </div>
      </div>
    </div>
  )
}


