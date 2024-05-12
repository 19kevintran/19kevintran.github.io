import NOTAM_Map from "../assets/NOTAM_Alert_System_Map.png";
import project2 from "../assets/Inventory management.webp";
import TOTP from "../assets/TOTP.png";

import SignLanguage from "../assets/SignLanguage.png";
// make dynamic 
const ProjectCardData = [
    {
        imgsrc: NOTAM_Map,
        title: 'NOTAM Alert System',
        text: 'The current NOTAM alert systems suffer from outdated formatting, information overload, insufficient standardization, poor prioritization, and excessive duration. The NOCAP NOTAM alert system allows individual, commercial, and private pilots to check sorted real-time NOTAM alerts in an easily readable manner based on the criticality of the information, making the high-importance data stand out.',
        // text: 'Notice to Air missions (NOTAMs) are information messages that provide pilots with up-to-date and temporary changes in the aviation environment, such as airport conditions, facility closures, and air traffic control changes. They are a critical component of the aviation information infrastructure, providing accurate and timely information to ensure safety and efficiency for pilots, air traffic controllers, and other aviation stakeholders. As a dynamic data management system, NOTAMs play a vital role in the safe and efficient operation of flights in the technology-reliant aviation industry. The current NOTAM alert systems suffer from outdated formatting, information overload, insufficient standardization, poor prioritization, and excessive duration. The NOCAP NOTAM alert system allows individual, commercial, and private pilots to check sorted real-time NOTAM alerts in an easily readable manner based on the criticality of the information, making the high-importance data stand out.',
        view: 'https://github.com/trev97/notam-team-project',
    },
    {
        imgsrc: TOTP,
        title: 'TOTP QR Code Double Verification Mobile App',
        text: 'The Peer-to-Peer double verification system ensures the authenticity of both drivers and passengers through a multi-layered approach, utilizing asymmetric cryptography, certificate authority, QR codes, and time-based one-time passwords.',
        view: 'URL.com',
    },
    {
        imgsrc: project2,
        title: 'CAGE Inventory Management System',
        text: 'For any company or individual who needs to keep track of inventory, The CAGE is an inventory management system that will help keep track of any personal and/or business inventory. Unlike other inventory management systems, our product will allow businesses, rental companies, and renters to check the equipment at their offices and remotely in the field.',
        view: 'https://github.com/19kevintran/cage-app',
    },
    {
        imgsrc: SignLanguage,
        title: 'Real Time Sign Language Object Detection',
        text: 'I trained an object detection model to identify multiple different sign languages using TensorFlow YOLO Object Detection model (Single Shot Multibox Detector), OpenCV, and Python. This project was also used for a workshop for the Artificial Intelligence Organization at the University of Oklahoma.',
        view: 'URL.com',
    },


]

export default ProjectCardData;