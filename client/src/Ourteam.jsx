import React from 'react'
import naman from './images/naman.jpg'
import amar from './images/amar.png'
import akash from './images/akash.png'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Ourteam = () => {
    const namanFb = () => {
        window.open("https://www.facebook.com/thenamanjangid")
    }
    const namanInsta = () => {
        window.open("https://www.instagram.com/the_namanjangid")
    }
    const namanTwitter = () => {
        window.open("https://www.twitter.com/the_namanjangid")
    }
    const namanLinkedin = () => {
        window.open("https://www.linkedin.com/in/naman-kumar-jangid-246b30160")
    }
    const amarFb = () => {
        window.open("https://www.facebook.com/Amareshchandra123")
    }
    const amarInsta = () => {
        window.open("https://www.instagram.com/amaresh_kumar1")
    }
    const amarTwitter = () => {
        window.open("https://www.twitter.com/SarojAmaresh?s=08")
    }
    const amarGithub = () => {
        window.open("https://www.github.com/Sarojamaresh")
    }
    const akashFb = () => {
        window.open("https://www.facebook.com/")
    }
    const akashInsta = () => {
        window.open("https://www.instagram.com/desi_chhora0055")
    }
    const akashTwitter = () => {
        window.open("https://www.twitter.com/")
    }
    const akashYoutube = () => {
        window.open("https://www.youtube.com/c/FantasticAkash")
    }
    return (
        <div>
            <div>
                <h2 className="text-center teamheader">Our Amazing Team</h2>
            </div>
            <Fade left cascade>
                <div className="body">
                    <div className="profile-card">
                        <div className="card-header">
                            <div className="pic">
                                <img src={naman} alt="namanjangid" />
                            </div>
                            <div className="name">Naman Jangid</div>
                            <div className="desc">CEO || Founder</div>
                            <div className="sm">
                                <Link to="#" className="fab fa-facebook-f" onClick={namanFb}></Link>
                                <Link to="#" className="fab fa-instagram" onClick={namanInsta}></Link>
                                <Link to="#" className="fab fa-twitter" onClick={namanTwitter}></Link>
                                <Link to="#" className="fab fa-linkedin" onClick={namanLinkedin}></Link>
                            </div>
                        </div>
                    </div>

                    <div className="profile-card">
                        <div className="card-header">
                            <div className="pic">
                                <img src={amar} alt="amareshkumar" />
                            </div>
                            <div className="name">Amaresh Chandra</div>
                            <div className="desc">CTO || Developer</div>
                            <div className="sm">
                                <Link to="" className="fab fa-facebook-f" onClick={amarFb}></Link>
                                <Link to="#" className="fab fa-instagram" onClick={amarInsta}></Link>
                                <Link to="#" className="fab fa-twitter" onClick={amarTwitter}></Link>
                                <Link to="#" className="fab fa-github" onClick={amarGithub}></Link>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="card-header">
                            <div className="pic">
                                <img src={akash} alt="akashsaini" />
                            </div>
                            <div className="name">Aakash Saini</div>
                            <div className="desc">Digital Marketer || Youtuber</div>
                            <div className="sm">
                                <Link to="#" className="fab fa-facebook-f" onClick={akashFb}></Link>
                                <Link to="#" className="fab fa-instagram" onClick={akashInsta}></Link>
                                <Link to="#" className="fab fa-twitter" onClick={akashTwitter}></Link>
                                <Link to="#" className="fab fa-youtube" onClick={akashYoutube}></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Ourteam;