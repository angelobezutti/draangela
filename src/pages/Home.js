import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';


export default function Home() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>
    const [lugarum, setLugarum] = useState({
        center: {
            lat: -28.0656869,
            lng: -52.0153914
          },
          zoom: 13
    })

    return (
        <>
        <section id="three" className="wrapper special">
                <div className="inner">
                <   header>
                        <h2>Procedimentos</h2>
                    </header>
                    <div className="flex flex-2">
                        
                    <article>
                            <div className="image roundi">
                                <Link to={{ pathname: "/Rino" }}></Link>
                                <img src={require('../images/rinomodelacaoa.jpg')} alt="Pic 02"/> 
                            </div>
                            <header>
                                <h3><Link to={{ pathname: "/Rino" }}> Rinomodelação Definitiva </Link></h3>

                            </header>
                            <p></p>
                        </article>

                        <article>
                            <div className="image roundi">
                                <img src={require('../images/harmonizacao.png')} />
                            </div>
                            <header>
                                <h3><Link to={{ pathname: "/Lipo" }}> Lipo Enzimática de Papada </Link></h3>
                            </header>
                            <p></p>
                        </article>

                        <article>
                            <div className="image roundi">
                                <img src={require('../images/clareamento.png')} />
                            </div>
                            <header>
                                <h3><Link to={{ pathname: "/Clareamento" }}> Clareamentos </Link></h3>
                            </header>
                            <p></p>
                        </article>

                        <article>
                            <div className="image roundi">
                                <img src={require('../images/preenchimentolabial.png')} />
                            </div>
                            <header>
                                <h3><Link to={{ pathname: "/preenchimentofacial" }}> Preenchimentos Faciais </Link></h3>
                            </header>
                            <p></p>
                        </article>

                        <article>
                            <div className="image roundi">
                                <img src={require('../images/botox.png')} />
                            </div>
                            <header>
                                <h3><Link to={{ pathname: "/botox" }}> Botox </Link></h3>
                            </header>
                            <p></p>
                        </article>

                        <article>
                            <div className="image roundi">
                                <img src={require('../images/lentes.png')} />
                            </div>
                            <header>
                                <h3><Link to={{ pathname: "/Proteses" }}> Próteses Fixas e Removíveis </Link></h3>
                            </header>
                            <p></p>
                        </article>
                    </div>
                </div>
            </section>

            <section id="two" className="wrapper style1 special"> 
                <div className="inner">
                    <header>
                        <h2>Angela Maria Bezutti</h2>
                    </header>
                        <div className="image round">
                                <img src={require('../images/pic04.png')} alt="Person 1" />
                        </div>
                        <h3>Esp. Próteses dentárias /
                        Lentes de contato dental /
                        Clareamentos /
                        Harmonização Orofacial</h3>
                        <a href="https://www.facebook.com/angela.bezutti"><img src={require('../images/facebook.png')}  /></a>
						<a href="https://www.instagram.com/draangelabezutti/"><img src={require('../images/insta.png')}  /></a> 
                </div>
            </section>

            <section id="three" className="wrapper style1 special">
                <h3>Locais de atendimento</h3>
                    <div  style={{ height: '70vh', width: '100%',   marginTop: "50px", marginBottom: "50px", marginRight: "150px"}}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyDvdkyqaq8Cu2fVp_9EQNNnhMoDmT-GXt4" }}
                            defaultCenter={lugarum.center}
                            defaultZoom={lugarum.zoom}
                        >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                        </GoogleMapReact>
                    </div>
            </section>

        </>
    );
}
