import React from "react";
import Header from "../component/Header";
import "../assets/sass/home.scss";
import "../assets/sass/animate.min.css";
import Carousel from 'react-bootstrap/Carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import img_1 from "../assets/img/img-1.png";
import img_2 from "../assets/img/img-2.png";
import img_5 from "../assets/img/img-5.png";
import img_6 from "../assets/img/img-6.png";
import img_7 from "../assets/img/img-7.png";
import img_9 from "../assets/img/img-9.png";
import img_10 from "../assets/img/img-10.png";
import img_11 from "../assets/img/img-11.png";
import img_12 from "../assets/img/img-12.png";
import img_13 from "../assets/img/img-13.png";
import img_15 from "../assets/img/img-15.png";
import img_16 from "../assets/img/img-16.png";
import light from "../assets/img/Vector7.png";

interface homeData {
    day : number
    hour : number,
    minute : number,
    second : number
}

const Home = () => {
    let gameText1 = ['Game1', 'Game2', 'Game3'];
    let gameText2 = ['Game1', 'Game2'];
    let gameText3 = ['Game4', 'Game5', 'Game6'];
    let gameText4 = ['Game3', 'Game4'];
    const [state, setStates] = React.useState({
        day : 0,
		hour : 0,
        minute : 0,
        second : 0
	})
    const updateStatus = (params: Partial<homeData>) => setStates({ ...state, ...params });

    const getRemainTime = () => {
		var countDownDate = new Date("2022-10-23 15:37:25").getTime();
  		var now = new Date().getTime();
  		var distance = countDownDate - now;
		var day = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var second = Math.floor((distance % (1000 * 60)) / 1000);
		updateStatus({day, hour, minute, second});
	}

    setTimeout(getRemainTime, 1000);

    return (
        <div className="background scroll">
            <div className="home relative">
                <Header />
                <img src={img_1} alt="top" className="header-img" />
                <section>
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 p5">
                            <ScrollAnimation animateOnce={true} animateIn="fadeIn" animateOut="fadeOutUp">
                                <div className="title-center">
                                    <h1 className="white">Minit Now</h1>
                                    <h1 className="white">NET Membership</h1>
                                    <h1 className="custom">Lucky Monkey</h1>
                                    <h1 className="custom">Studios</h1>
                                </div>
                            </ScrollAnimation>
                            <div className="row-center relative">
                                <div className="light-div">
                                    <img src={light} alt="." className="light-1" />
                                </div>
                                <ScrollAnimation animateOnce={true} animateIn="bounceInLeft" animateOut="fadeOutUp">
                                    <div className="mobile">
                                        <div className="display my-2 row-center align-items-center">
                                            <img src={img_12} alt="." className="display-img" />
                                        </div>
                                        <h3 className="white pt-2">Lucky Monkey</h3>
                                        <p className="gray">Membership Pass</p>
                                        <div className="row-between">
                                            <div>
                                                <h3 className="white">1.05 ETH</h3>
                                                <p className="gray">Mint Price</p>
                                            </div>
                                            <div>
                                                <h3 className="white">$1735.12</h3>
                                                <p className="green">+15%</p>
                                            </div>
                                        </div>
                                        <button type="button" className="btn">Mint Membership Pass</button>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 p-3 mt5 d-flex flex-column">
                            <div className="relative main-margin order-1">
                                <div className="main-img row relative">
                                    <div className="light-div">
                                        <img src={light} alt="." className="light-2" />
                                    </div>
                                    <div>
                                        <ScrollAnimation animateOnce={true} animateIn="fadeInUp" animateOut="fadeOutUp">
                                            <div className="small-back"></div>
                                            <div className="big-back"></div>
                                            <img src={img_2} alt="main" className="monkey" />
                                        </ScrollAnimation>
                                        <ScrollAnimation animateOnce={true} animateIn="flipInX" animateOut="fadeOutUp" >
                                            <div className="top-back">
                                                <p className="b-letter"><i>Lucky Pass</i></p>
                                                <p className="s-letter"><i>Membership Pass</i></p>
                                            </div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateOnce={true} animateIn="bounceInRight" animateOut="fadeOutUp">
                                            <div className="timer">
                                                <div className="column-item-center">
                                                    <p className="lg-letter"><i>{state.hour}</i></p>
                                                    <p className="m-letter"><i>Hours</i></p>
                                                </div>
                                                <p className="lg-letter">:</p>
                                                <div className="column-item-center">
                                                    <p className="lg-letter"><i>{state.minute}</i></p>
                                                    <p className="m-letter"><i>Minutes</i></p>
                                                </div>
                                                <p className="lg-letter">:</p>
                                                <div className="column-item-center">
                                                    <p className="lg-letter"><i>{state.second}</i></p>
                                                    <p className="m-letter"><i>Seconds</i></p>
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateOnce={true} animateIn="fadeInUp" animateOut="fadeOutUp" >
                                            <div className="info-1">
                                                <div className="row-between">
                                                    <div>
                                                        <p className="b-letter"><i>1.05 ETH</i></p>
                                                        <p className="b-letter"><i>Mint Now</i></p>
                                                    </div>
                                                    <div style={{textAlign:'right'}}>
                                                        <p className="m-letter"><i>$1735.21</i></p>
                                                        <p className="s-letter green"><i>+15%</i></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                        <ScrollAnimation animateOnce={true} animateIn="fadeInUp" animateOut="fadeOutUp" >
                                            <div className="info-2">
                                                <p className="b-letter"><i>Next Pass</i></p>
                                                <p className="s-letter"><i>Starts In</i></p>
                                            </div>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                            <div className="left-title order-2">
                                <ScrollAnimation animateOnce={true} animateIn="fadeInUp" animateOut="fadeOutUp">
                                    <h1 className="white">Discover</h1>
                                    <h1 className="custom">Lucky Monkey</h1>
                                    <h1 className="custom">Studios<span className="white"> Games</span></h1>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <ScrollAnimation animateOnce={true} animateIn="slideInRight" animateOut="fadeOutUp">
                        <Carousel>
                            <Carousel.Item>
                                <div className="d-lg-flex d-none row-center" style={{margin:'40px'}}>
                                    {gameText1.map((i,k) => (
                                        <div className="col4 img-div row" key={k}>
                                            <div className="col-5">
                                                <img src={img_1} alt="." className="first-img" />
                                                <img src={img_12} alt="." className="second-img" />
                                            </div>
                                            <div className="col-7">
                                                <img src={img_13} alt="." className="third-img" />
                                            </div>
                                            <div className="text my-3">{i}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="d-lg-none d-md-flex d-none row-center" style={{margin:'40px'}}>
                                    {gameText2.map((i,k) => (
                                        <div className="col6 img-div row" key={k+3}>
                                            <div className="col-5">
                                                <img src={img_1} alt="." className="first-img" />
                                                <img src={img_12} alt="." className="second-img" />
                                            </div>
                                            <div className="col-7">
                                                <img src={img_13} alt="." className="third-img" />
                                            </div>
                                            <div className="text my-3">{i}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="d-md-none d-sm-flex row-center" style={{margin:'40px'}}>
                                    <div className="col12 img-div row">
                                        <div className="col-5">
                                            <img src={img_1} alt="." className="first-img" />
                                            <img src={img_12} alt="." className="second-img" />
                                        </div>
                                        <div className="col-7">
                                            <img src={img_13} alt="." className="third-img" />
                                        </div>
                                        <div className="text my-3">Game1</div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div className="d-lg-flex d-none row-center" style={{margin:'40px'}}>
                                    {gameText3.map((i,k) => (
                                        <div className="col4 img-div row" key={k+5}>
                                            <div className="col-5">
                                                <img src={img_1} alt="." className="first-img" />
                                                <img src={img_12} alt="." className="second-img" />
                                            </div>
                                            <div className="col-7">
                                                <img src={img_13} alt="." className="third-img" />
                                            </div>
                                            <div className="text my-3">{i}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="d-lg-none d-md-flex d-none row-center" style={{margin:'40px'}}>
                                    {gameText4.map((i,k) => (
                                        <div className="col6 img-div row" key={k+8}>
                                            <div className="col-5">
                                                <img src={img_1} alt="." className="first-img" />
                                                <img src={img_12} alt="." className="second-img" />
                                            </div>
                                            <div className="col-7">
                                                <img src={img_13} alt="." className="third-img" />
                                            </div>
                                            <div className="text my-3">{i}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="d-md-none d-sm-flex row-center" style={{margin:'40px'}}>
                                    <div className="col12 img-div row">
                                        <div className="col-5">
                                            <img src={img_1} alt="." className="first-img" />
                                            <img src={img_12} alt="." className="second-img" />
                                        </div>
                                        <div className="col-7">
                                            <img src={img_13} alt="." className="third-img" />
                                        </div>
                                        <div className="text my-3">Game2</div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            
                        </Carousel>
                    </ScrollAnimation>
                </section> 
                <section>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 p5 pointer">
                            <ScrollAnimation animateOnce={true} animateIn="fadeInUp" animateOut="fadeOutUp">
                                <div className="row-center align-items-center menu-btn">
                                    <img src={img_5} alt="icon" className="menu-icon" />
                                    <h3 className="white">METAMASK</h3>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p5 pointer">
                            <ScrollAnimation animateOnce={true} animateIn="fadeInUp" animateOut="fadeOutUp" delay={50}>
                                <div className="row-center align-items-center menu-btn">
                                    <img src={img_6} alt="icon" className="menu-icon" />
                                    <h3 className="white">Trust Wallet</h3> 
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p5 pointer">
                            <ScrollAnimation animateOnce={true} animateIn="fadeInUp" animateOut="fadeOutUp" delay={150}>
                                <div className="row-center align-items-center menu-btn">
                                    <img src={img_7} alt="icon" className="menu-icon" />
                                    <h3 className="white">WalletConnect</h3>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>
                <section className="back">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 p5">
                            <ScrollAnimation animateOnce={true} animateIn="fadeIn" animateOut="fadeOutUp">
                                <div className="column-item-center">
                                    <img src={img_9} alt="icon" className="icon my-2 mt-2" />
                                    <h3 style={{textAlign:'center'}}>Set up your wallet</h3>
                                    <p className="mt-3" style={{textAlign:'center'}}>Once you've set up your wallet of choice,connect it to Lucky Monkey
                                    Studios by clicking the wallet icon in the top right corner.Learn about the wallets we support</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p5">
                            <ScrollAnimation animateOnce={true} animateIn="fadeInUp" animateOut="fadeOutUp" delay={50}>
                                <div className="column-item-center">
                                    <img src={img_10} alt="icon" className="icon my-2 mt-2" />
                                    <h3 style={{textAlign:'center'}}>Select Membership Pass</h3>
                                    <p className="mt-3" style={{textAlign:'center'}}>After you have connected your wallet,choose the Lucky Monkey 
                                    Season Pass and access our metaverse gaming. </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 p5">
                            <ScrollAnimation animateOnce={true} animateIn="fadeInUp" animateOut="fadeOutUp" delay={100}>
                                <div className="column-item-center">
                                    <img src={img_11} alt="icon" className="icon my-2 mt-2" />
                                    <h3 style={{textAlign:'center'}}>What is NET Membership</h3>
                                    <p className="mt-3" style={{textAlign:'center'}}>NET Membership is a type of membership program that is based on 
                                    users owning specific NETs in order to be admitted or get access to member-exclusive perks,rewards.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="column-item-center p5">
                        <ScrollAnimation animateOnce={true} animateIn="fadeInUp" animateOut="fadeOutUp" >
                            <h2 className="white mt-4">Get More Updates</h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateOnce={true} animateIn="fadeInUp" animateOut="fadeOutUp" delay={50}>
                            <p className="white mt-4 text-center">Join our mailing to stay in the loop with our newest feaature realease</p>
                        </ScrollAnimation>
                        <ScrollAnimation animateOnce={true} animateIn="fadeInUp" animateOut="fadeOutUp" delay={100}>    
                            <div className="relative mt5 row-center" style={{width:'900px'}}>
                                <input type="text" placeholder="Your Email..." />
                                <button type="button" className="input-btn">I'm In</button>
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>
                <section className="p5">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 p5 footer-div footer-first">
                            <ScrollAnimation animateOnce={true} animateIn="fadeIn" animateOut="fadeOutUp" >
                                <div className="white-region first">
                                    <div className="white-square">
                                        <img src={img_12} alt="." style={{width:'100%',height:'100%'}} />
                                    </div>
                                    <div>
                                        <p className="white" style={{fontWeight:'500'}}>Season1</p>
                                        <p className="gray">Mint Price: 1.05 ETH</p>
                                    </div>
                                    <div>
                                        <p className="white">1.05 ETH</p>
                                        <p className="green">+15%</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateOnce={true} animateIn="fadeIn" animateOut="fadeOutUp" >
                                <div className="white-region second">
                                <div className="white-square">
                                        <img src={img_12} alt="." style={{width:'100%',height:'100%'}} />
                                    </div>
                                    <div>
                                        <p className="white" style={{fontWeight:'500'}}>Season1</p>
                                        <p className="gray">Mint Price: 1.05 ETH</p>
                                    </div>
                                    <div>
                                        <p className="white">1.05 ETH</p>
                                        <p className="green">+15%</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-lg-2 col-md-12 p-1 row-center footer-second">
                            <img src={img_12} alt="img" className="footer-img pointer" />
                        </div>
                        <div className="col-lg-5 col-md-12 p5 title-center column-around footer-third">
                            <ScrollAnimation animateOnce={true} animateIn="fadeIn" animateOut="fadeOutUp" >
                                <div className="spacing"></div>
                                <div>
                                    <p className="white">Lucky Monkey Studios.</p>
                                    <p className="white">Home To The Next Generation Of Digital Creatoers.</p>
                                    <p className="white">Discover The Best Metaverse Games.</p>
                                </div>
                            </ScrollAnimation>
                            <div className="footer">
                                <div className="footer-btn">
                                    <img src={img_16} alt="." className="footer-icon" />
                                </div>
                                <div className="footer-btn">
                                    <img src={img_15} alt="." className="footer-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{paddingTop:'0'}}>
                    <p className="white" style={{textAlign:'center'}}>2022 Lucky Monkey Studios. All Right reserved.</p>
                </section>
            </div>
        </div>
    )
}

export default Home;