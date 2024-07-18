import '../Hero/hero.css'

function Hero() {
    return(
        <>
        <div className='block'>
            <div className="innerBlock">
                <h1>Gallery</h1>
                <div className="gallery">
                    <div className='firstCard'>
                        <div style={{display:'flex',gap:'0.7rem'}}>
                            <div style={{backgroundImage:'url(https://i.pinimg.com/236x/06/54/dd/0654dd7eae2d73347b257c4aecb1297f.jpg)'}}></div>
                            <div style={{backgroundImage:'url(https://i.pinimg.com/564x/0d/7f/e2/0d7fe2aecf4de3bc1e52ad4ab45f8d66.jpg)'}}></div>
                            <div style={{backgroundImage:'url(https://i.pinimg.com/564x/23/77/3b/23773b78035251bedee3cd0afa37973a.jpg)'}}></div>
                        </div>

                        <div style={{backgroundImage:'url(https://images.pexels.com/photos/3330159/pexels-photo-3330159.jpeg?auto=compress&cs=tinysrgb&w=600)'}}></div>
                        </div>

                    <div>
                    <div style={{display:'flex',gap:'0.7rem'}}>
                            <div style={{backgroundImage:'url(https://i.pinimg.com/236x/91/c2/e3/91c2e35f8f68297ba2fbd01a94451182.jpg)'}}></div>
                            <div style={{backgroundImage:'url(https://i.pinimg.com/564x/bd/bf/44/bdbf44065dcdc4513393a3308b8be8a8.jpg)'}}></div>
                            <div style={{backgroundImage:'url(https://i.pinimg.com/564x/93/72/cb/9372cbfab4d69b3ac1a652436ced3882.jpg)'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero