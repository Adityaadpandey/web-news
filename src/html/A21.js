import React from 'react';
import a21im1 from "../images/a21im1.jpg"
import a21im2 from "../images/a21im2.jpg"
import a21im3 from "../images/a21im3.jpg"
import a21im4 from "../images/a21im4.jpg"
import a21im5 from "../images/a21im5.jpg"
import a21im6 from "../images/a21im6.jpg"
import a21im7 from "../images/a21im7.jpg"
import A1temp from "../templates/A10";
import A3temp from "../templates/A11";
import A4temp from "../templates/A15";
import A5temp from "../templates/A16";



const A21 = () => {
    return (
        <>
            <div className="row">
                <div className="column left first">
                    <h1>These Alexa-enabled smart speakers are not made by Amazon</h1>
                    <img src={a21im1} alt="" />
                    <p>The Marshall Acton II is priced at Rs 26,999 on Amazon. The speaker will allow you to play and control your music hands-free with Alexa. Additionally you can control Alexa-enabled interfaces such as TVs, lights, locks, thermostats using the device. The device can be used with the Marshall Voice app or the analogue controls on the speaker’s top panel to customise the sound.</p>
                    <img src={a21im2} alt="" />
                    <p>The Motorola Sonic Boost 230 is priced at Rs 2,200 on Amazon. The Alexa enabled speaker comes with IPX7 rating for improved water resistance and offers a peak power output of 5W.</p>
                    <img src={a21im3} alt="" />
                    <p>The ZEBRONICS Zeb-Smart Bot is priced at Rs ₹2,999 on Amazon. The speaker comes with built in support for Alexa. The speaker will allow you to voice control certain devices with its built-in IR Blaster. You can also use the device as a regular Bluetooth speaker to listen to music</p>
                    <img src={a21im4} alt="" />
                    <p>The Eufy Genie AK-T1241211 is an Alexa-enabled smart which is priced at Rs 1,599 on Amazon. The speaker offers 2W of power output.

                    </p>
                    <img src={a21im5} alt="" />
                    <p>The boAt Stone 201A is priced at Rs 1,749 on Amazon. The Alexa enabled speaker offers 3W of power output and IPX6 rating for better water and dust resistance.

                    </p>
                    <img src={a21im6} alt="" />
                    <p>The LUMIFORD 2.1 Subwoofer Dock is priced at Rs 2,999 on Amazon. The speaker offers 26W power output and weighs 1.8kg. The speaker comes with Alexa built in for voice control.</p>
                    <img src={a21im7} alt="" />
                    <p>The Bose Portable Home Speaker is priced at Rs 31,500 on Amazon. The speaker offers 360 degree music playback. The speaker comes with inbuilt support for Alexa and Google Assistant.</p>
                </div>
                <div class="column right first">
                    <A1temp />
                </div>
                <div class="column right first">
                    <A3temp />
                </div>
                <div class="column right first">
                    <A4temp />
                </div>
                <div class="column right first">
                    <A5temp />
                </div>
            </div>
        </>
    )
}

export default A21;