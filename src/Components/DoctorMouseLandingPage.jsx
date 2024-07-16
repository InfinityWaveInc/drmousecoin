import 'tailwindcss/tailwind.css';
import '../App.css';
import '../thirdPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import dexScreenerIcon from '../assets/dexScreenerIcon.png'
import solScanIcon from '../assets/solanaIcon.png'
import solScanIconTop from '../assets/solScanIconTop.png'
import BackgroundVideo from '../assets/Videos/BackgroundVideo.mp4';
import Logo from '../assets/rmFrh2fKMNYODW4ac7Em5-transformed.png'; // Adjust the path to your logo file
import QRCode from '../assets/QRCode.png'; // Adjust the path to your QR code image file
import QRCodeButtom from '../assets/QRCodeButtom.png'; // Adjust the path to your QR code image file
import BackgroundImagePage3 from '../assets/backgroundImagePage3.svg'
import backgroundImage from '../assets/secondpageBgImage.svg'; // Ensure to provide the correct path
import MousesIcon from '../assets/mousesIcons.png'; // Ensure to provide the correct path
import doctormouseCircularAnimation from '../assets/doctormousecoinpresenting (2).png'; // Ensure to provide the correct path
import characterImage6 from '../assets/characterpng7.png'; // Ensure to provide the correct path
import teteCoinLogo from '../assets/coinImage.png';
import fourthpagebgImage from '../assets/fourthpagebgimage.svg'
import fifthpagebgImage from '../assets/fifthpagebgimage.jpeg'
import solanaPng from '../assets/solana.png'
import mouseIcon from '../assets/mouseicon.png'
import mousepng2 from '../assets/character2.png'
import disclaimerImage from '../assets/disclamer image.svg'
import firePng from '../assets/fire.png'
import { useState } from 'react';
function DoctorMouseLandingPage() {


    const [certificatecCopied, setCertificateCopied] = useState(false);
    const certificateCode = 'EVS9EoZoxaYZnk8k7jCukfkgG8ZtiF​wVtDHRLV4gy8Uz ';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(certificateCode).then(() => {
            setCertificateCopied(true);
            setTimeout(() => setCertificateCopied(false), 2000); // Reset copied state after 2 seconds
        });
    };
    return (
        <>
            <div className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden sm:h-[80vh] md:h-screen lg:h-screen">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={BackgroundVideo}
                    autoPlay
                    loop
                    muted
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#304761] to-[#d2d1d6] opacity-70"></div>

                <div
                    className="absolute top-4 left-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 z-50 bg-transparent"
                    style={{ perspective: '500px' }}
                >
                    <img
                        src={doctormouseCircularAnimation}
                        alt="Coin Video"
                        className="w-full h-full object-contain transform shadow-lg animate-spin-slow bg-cool-500 rounded-full"
                        style={{
                            transform: 'rotateX(20deg) rotateY(20deg) translateZ(50px)',
                            transition: 'transform 0.5s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'rotateX(30deg) rotateY(30deg) translateZ(70px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'rotateX(20deg) rotateY(20deg) translateZ(50px)';
                        }}
                    />
                </div>

                <div className="relative z-30 w-full flex flex-col items-center justify-center text-center px-4">
                    <div className="relative flex flex-col items-center justify-center">
                        <h1 className="text-7xl mt-80 sm:mt-[30rem] md:mt-[25rem] sm:text-8xl md:text-9xl lg:text-[9rem] xl:text-[9rem] font-bold bg-gradient-to-r from-[#304761] to-[#d2d1d6] text-transparent bg-clip-text opacity-100 animate-text-fade">
                            DOCTOR<br /> MOUSE<br /> COIN
                        </h1>

                        <img
                            src={Logo}
                            alt="Logo"
                            className="relative w-3/4 sm:w-2/3 md:w-2/3 lg:w-2/3 mx-48 sm:-mt-40 md:-mt-0 lg:-mt-72 z-30 animate-bounce"
                        />
                    </div>
                </div>



                <style jsx>{`
        @keyframes text-fade {
            0% {
                opacity: 0;
                transform: translateY(-20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-text-fade {
            animation: text-fade 2s ease-in-out forwards;
        }

        .animate-bounce {
            animation: bounce 2s infinite;
        }

        .animate-spin-slow {
            animation: spin 10s linear infinite;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-30px);
            }
            60% {
                transform: translateY(-15px);
            }
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        .shadow-cartoon {
            box-shadow: 0 0 0 4px #000, 0 0 0 8px #ff0, 0 0 0 12px #000;
        }

        @media (max-width: 640px) {
            .h-screen {
                height: 80vh;
            }
        }
    `}</style>
            </div>


            <div className='h-32 w-full bg-gradient-to-r from-gray-800 to-black flex justify-between items-center p-6 z-50'>
  <div className='flex space-x-2 md:space-x-4 justify-center items-center'>
    <div className="flex items-center justify-center space-x-1 md:space-x-4">
      <a href="https://x.com/DrMouseCoin?t=4LV24L3j1VWhgtepFaDB3A&s=09" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
        <div className="bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 rounded-full p-2 sm:p-3 md:p-4 lg:p-5 shadow-lg image-3d min-w-[40px] min-h-[40px] flex items-center justify-center">
          <i className="fa-brands fa-x-twitter text-xs sm:text-sm md:text-base lg:text-lg text-white"></i>
        </div>
      </a>
      <a href="https://t.me/+Cv2pmIa9OI0wMDVh" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
        <div className="bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 rounded-full p-2 sm:p-3 md:p-4 lg:p-5 shadow-lg image-3d min-w-[40px] min-h-[40px] flex items-center justify-center">
          <i className="fa-brands fa-telegram text-xs sm:text-sm md:text-base lg:text-lg text-white"></i>
        </div>
      </a>
      <a href="https://dexscreener.com/solana/apgie2rbaezrlbo1yur8cpcav6zfuy6dzcy9yebtezfs" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
        <div className="bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 rounded-full p-2 sm:p-3 md:p-4 lg:p-5 shadow-lg image-3d min-w-[40px] min-h-[40px] flex items-center justify-center">
          <img src={dexScreenerIcon} className='h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7' />
        </div>
      </a>
      <a href="https://solscan.io/token/EVS9EoZoxaYZnk8k7jCukfkgG8ZtiFwVtDHRLV4gy8Uz" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
        <div className="bg-gradient-to-br from-blue-900 via-blue-500 to-blue-300 rounded-full p-2 sm:p-3 md:p-4 lg:p-5 shadow-lg image-3d min-w-[40px] min-h-[40px] flex items-center justify-center">
          <img src={solScanIconTop} className='h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8' />
        </div>
      </a>
    </div>
  </div>

  <div>
    <div className="flex flex-row gap-2 items-center ml-2">
      <h2 className='text-xl font-bold bg-gradient-to-r from-[#304761] to-[#d2d1d6] text-transparent bg-clip-text'>
        DOCTOR MOUSE
      </h2>
      <img src={QRCode} alt="QR Code" className='w-28 h-28' />
    </div>
  </div>
</div>


            {/* second page  */}
            <div className="bg-gradient-to-r from-primary to-secondary text-black min-h-screen flex flex-col items-center justify-center relative font-pressStart">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-50"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                ></div>

                {/* Top center image */}


                <div className="relative w-full max-w-4xl z-10 p-4 text-center">
                    <div className="flex justify-center mb-0">
                        <div className="flex flex-wrap justify-center md:mt-[-70px]">
                            <img src={MousesIcon} alt="Character 1" className="w-auto h-auto object-contain" />

                        </div>
                    </div>
                    <div className="p-4 border border-white bg-black bg-opacity-60 z-20 mb-8">
                        <img src={teteCoinLogo} alt="DCOTOR COIN Logo" className="mx-auto mb-4 w-24 h-24" />
                        <p className="text-white font-bungee">
                            Meet Dr Mouse, the game-changing meme coin designed to transform the
                            healthcare facility of transactions! Faster payments?Check.Unmatched
                            transparency? Check.Bulletproof security? Check. Dr Mouse is laeding
                            a healthcare revlution, bringing efficiency, trust, and affordability
                            to a system bogged down by inefficiencies.
                        </p>
                    </div>
                </div>
            </div>


            <div className="bg-gradient-to-r from-[#304761] to-[#d2d1d6] text-white min-h-screen flex flex-col items-center justify-center relative">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-50"
                    style={{ backgroundImage: `url(${BackgroundImagePage3})` }}
                ></div>

                <div className="relative w-full max-w-4xl z-20 p-4">
                    <h1 className="text-4xl font-bold mt-8 z-20 font-pressStart text-center mb-10 text-yellow-500">COIN STAGE</h1>

                    <div className="grid grid-cols-1 gap-8 text-center relative z-20 md:grid-cols-2">
                        <div className="p-4 border border-white bg-black bg-opacity-60">
                            <h2 className="text-xl font-bold font-bungee text-yellow-500">STAGE 1</h2>
                            <h2 className="text-xl font-bold font-bungee text-yellow-500">Token Creation</h2>
                            <p>Dr Mouse was developed using cutting-edge blockchain technology, creating a secure,
                                scalable, and reliable token. It's a robust digital asset designed to revolutionize
                                healthcare transactions."</p>
                        </div>
                        <div className="p-4 border border-white bg-black bg-opacity-60">
                            <h2 className="text-xl font-bold font-bungee text-yellow-500">STAGE 2</h2>
                            <h2 className="text-xl font-bold font-bungee text-yellow-500">Marketing Strategies</h2>
                            <p>Our innovative marketing strategies, including social media campaigns,
                                influencer partnerships, and viral content, keep Dr Mouse at the
                                forefront of the meme coin revolution."</p>
                        </div>
                        <div className="p-4 border border-white bg-black bg-opacity-60 md:col-span-2 md:w-1/2 md:mx-auto">
                            <h2 className="text-xl font-bold font-bungee text-yellow-500">STAGE 3</h2>
                            <h2 className="text-xl font-bold font-bungee text-yellow-500">Healthcare Facility</h2>
                            <p>Dr Mouse transforms healthcare transactions with decentralized, transparent,
                                and secure payments, aiming to eliminate inefficiencies and ensure swift,
                                accurate transactions for all."</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center w-full h-full z-0">
                        <img
                            src={characterImage6}
                            alt="Character"
                            className="w-80 h-full object-cover opacity-80 transform scale-125 mt-20"
                        />
                    </div>
                </div>


            </div>


            {/* fourth page  */}

            <div className="min-h-screen bg-gradient-to-r from-[#304761] to-[#d2d1d6] p-10 relative overflow-hidden">
                <img src={fourthpagebgImage} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />

                <img src={mousepng2} alt="Mouse" className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 transform scale-125 -mt-64 md:mt-0" />

                <div className="relative z-10 text-center mb-10 mt-28 md:mt-32">
                    <h1 className="text-2xl md:text-4xl lg:text-4xl font-pressStart text-white ">DOCTOR MOUSE NOMICS</h1>
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-10 md:mt-32">
                    <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-5 rounded-lg shadow-md border-4 h-52 border-green-500 transform skew-y-3 hover:skew-y-0 transition-transform duration-300 ease-in-out">
                        <h2 className="text-lg md:text-xl lg:text-2xl text-center font-bold text-green-400">LP BURNT 100%</h2>
                        <div className="flex justify-center items-center h-full">
                            <img src={firePng} alt="Image 1" className="h-24 w-24 object-cover" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-5 rounded-lg shadow-md border-4 border-yellow-500 transform skew-y-3 hover:skew-y-0 transition-transform duration-300 ease-in-out h-52">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center text-yellow-400">0% TAX + FAIR LAUNCH</h2>
                        <p className="text-yellow-200 mt-3 text-sm md:text-base lg:text-lg text-center">
                            NO TAX ON BUYING OR SELLING                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-5 rounded-lg shadow-md border-4 border-blue-500 transform skew-y-3 hover:skew-y-0 transition-transform duration-300 ease-in-out h-52">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center text-blue-400">CONTRACT RENOUNCED</h2>
                        <p className="text-blue-200 mt-3 text-sm md:text-base lg:text-lg text-center">
                            NO CHANGE IN TOKEN
                        </p>
                    </div>
                </div>


            </div>

            {/* fifth page 
    */}

            <div
                className="min-h-screen bg-gradient-to-r   from-[#304761] to-[#d2d1d6] flex flex-col items-center"
                style={{ backgroundImage: `url(${fifthpagebgImage})`, backgroundSize: 'cover' }}
            >
                <div className="text-center text-white mt-10 p-3">
                    <h1 className="text-4xl font-bold">HOW TO BUY $DRMOUSE</h1>
                    <div className="mt-4 flex justify-center items-center">
                        <p className="text-sm mt-2 bg-opacity-80 bg-gradient-to-r from-[#304761] to-[#d2d1d6] p-2 rounded">
                            CONTRACT ADDRESS: {certificateCode}
                        </p>
                        <button
                            onClick={copyToClipboard}
                            className="ml-4 p-2 bg-gradient-to-r from-[#304761] to-[#d2d1d6] text-white rounded shadow-lg transform active:translate-y-1 transition-all duration-150"
                        >
                            {certificatecCopied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10 mt-10 mx-5 relative">
                    <div className="hexagon flex flex-col items-center justify-center text-center text-white p-5 ">
                        <img src={mouseIcon} alt="Phantom Logo" className="w-12 h-12" />
                        <p className="mt-2">
                            <b className='text-xl'>1.</b> Create a Solana based wallet in Phantom or your choice of app.
                        </p>
                    </div>

                    <div className="hexagon flex flex-col items-center justify-center text-center text-white p-5">
                        <img src={solanaPng} alt="Solana Logo" className="w-12 h-12" />
                        <p className="mt-2">2. Buy Solana from a trusted CEX or DEX and transfer to wallet.</p>
                    </div>

                    <div className="hexagon flex flex-col items-center justify-center text-center text-white p-5">
                        <img src={teteCoinLogo} alt="Coin Logo" className="w-12 h-12" />
                        <p className="mt-2">3. Click on Buy now and swap it all for some Dr mouse coin on your favorite DEXI</p>
                    </div>

                    <div className="col-span-1 md:col-span-3 flex justify-center">
                        <button className="buy-now-button">
                            <img src={mouseIcon} alt="Mouse Icon" />
                            <a href='https://raydium.io/swap/?outputMint=EVS9EoZoxaYZnk8k7jCukfkgG8ZtiFwVtDHRLV4gy8Uz&inputMint=sol' target="_blank" rel="noopener noreferrer" className='text-white font-bold'>
                                Buy Now
                            </a>
                        </button>
                    </div>
                </div>


                <footer className="footer w-full mt-10 bg-gray-800 text-white py-10">
                    <div className=" mx-auto md:flex md:flex-row justify-between items-center">

                        {/* Social Media Icons */}
                        <div className="footer-icons flex flex-col items-center mt-5 space-y-4">
                            <div className="flex flex-row justify-center space-x-4 icon-3d">
                                <a href="https://x.com/DrMouseCoin?t=4LV24L3j1VWhgtepFaDB3A&s=09" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faXTwitter} size="2x" />
                                </a>
                                <a href="https://t.me/+Cv2pmIa9OI0wMDVh" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTelegram} size="2x" />
                                </a>
                                <a href="https://solscan.io/token/EVS9EoZoxaYZnk8k7jCukfkgG8ZtiFwVtDHRLV4gy8Uz" target="_blank" rel="noopener noreferrer">
                                    <img src={solScanIcon} className='h-10 w-10' />
                                </a>
                                <a href="https://dexscreener.com/solana/apgie2rbaezrlbo1yur8cpcav6zfuy6dzcy9yebtezfs" target="_blank" rel="noopener noreferrer">
                                    <img src={dexScreenerIcon} className='h-10 w-10' />
                                </a>
                            </div>

                            <p className="text-sm text-3d">© COPYRIGHT DOCTOR COIN 2024</p>
                            <img src={QRCodeButtom} alt="QR Code" className="w-40 h-40 mx-auto mb-2  image-3d" />

                        </div>

                        {/* Center Logo */}
                        <div className="text-center">
                            <div className="text-center">
                                <img src={Logo} alt="Character" className="mx-auto w-40 h-auto mt-5 md:mt-0 mb-2 image-3d" />
                                <h1 className="text-6xl font-pressStart text-3d">DOCTOR COIN</h1>
                            </div>


                        </div>

                        {/* QR Code and Disclaimer */}
                        <div className="bg-transparent text-white p-2 mt-10 md:mt-[-90px] md:w-[25%] rounded discalimer-3d ">

                            <div className="disclaimer-container">
                                <img src={disclaimerImage} alt="Background Image" className="background-image" />
                                <p className="disclaimer-text">
                                    DISCLAIMER: All characters are fictitious and any resemblance to real persons, living or dead, is purely coincidental. All views and opinions expressed are solely those of the fictional character and do not reflect those of the actual company. Use at your own risk. No financial advice provided.
                                </p>
                            </div>


                        </div>

                    </div>
                </footer>
            </div>
        </>
    );
}

export default DoctorMouseLandingPage;
