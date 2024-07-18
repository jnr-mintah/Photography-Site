import '../Footer/footer.css'
import Mintah from '../Navbar/Mintah.png'


function Footer() {
    return(
        <>
        <div className="footer">
            <img className='footerLogo' src={Mintah} alt="" />
            <hr />
            <p>2024,Mintah Hub. All Rights Reserved</p>
        </div>
        </>
    )
}

export default Footer