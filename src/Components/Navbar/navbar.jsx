import '../Navbar/navbar.css'
import Mintah from '../Navbar/Mintah.png'


function Navbar() {

    return(
        <>
        <div className='Navbar'>
            <div className="nav">
                <img className='logo' src={Mintah} alt="" />
                <ul>
                    <li>Home</li>
                    <li>Gallery</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
                <button>Book Now</button>
            </div>
            <h1 className='heading'>Get the perfect <br /> photoshoot @ <br /> <img style={{width:'15rem'}} src={Mintah} alt="" /></h1>
        </div>
        </>
    )
    
}

export default Navbar