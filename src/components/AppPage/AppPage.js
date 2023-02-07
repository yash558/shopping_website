import React from "react";
import './AppPage.css'
import mobile from '../../assets/mobile1.png';
import gp from '../../assets/gp.png';
import as from '../../assets/as.png';
import icon1 from '../../assets/icon1.png';
import Icon2 from '../../assets/Icon2.png';

const AppPage = () => {
    return (
        <div className="app-sec">

            <div className="app-img">
                <img src={mobile} alt='Mobile' />
            </div>

            <div className="app-det">

                <div className="pad"></div>
                <div className="app-head">
                    <h1>Our App is available for Both Mobile Platforms</h1>
                    <hr></hr>
                </div>

                <div className="app-low-head">
                    <h5> Our geeks are in full swing relentlessly coading our sleek new app to bring it out to you asap with more features so it'll we a click away from you.</h5>
                </div>

                <div className="app-info">
                    <div className="icon">
                        <img src={icon1} alt='icons'></img>
                    </div>
                    <div className="icon-info">
                        <h3><strong>Guaranteed Results</strong></h3>
                        <hr></hr>
                        <h5>Chat option and many more features are coming to ensure better result.</h5>
                    </div>
                    <div className="icon">
                        <img src={Icon2} alt='icons'></img>
                    </div>

                    <div className="icon-info">
                        <h3><strong>Team of Industry Experts</strong></h3>
                        <hr></hr>
                        <h5>More number of mentors will be joining from different industries with varieties of courses.</h5>
                    </div>

                </div>

                <div className="foot">
                    <img className="im" src={gp} alt='img' />
                    <img className="im" src={as} alt='img' />
                </div>

            </div>
        </div>
    )
}
export default AppPage;
