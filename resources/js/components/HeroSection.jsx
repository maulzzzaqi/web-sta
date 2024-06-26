import React from 'react';

export default function HeroSection() {
    return (
        <div className="relative parallax bg-[url(./img/bgSupacon.png)] text-white gap-2 h-screen px-5 w-full flex items-center justify-center flex-col">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <h1 data-aos="fade-right" className="text-7xl font-bold text-center relative">Super Tasko Aria</h1>
            <h3 data-aos="fade-left" className="text-4xl mt-7 text-center relative">Air Conditioning System,<br />Engineering Installation, & Supply.</h3>
            <a data-aos="fade-right" href="#services" className="relative mt-14 px-9 py-3 font-semibold border rounded-3xl border-white hover:bg-white hover:text-darkerBlue transition ease">
                <p>OUR SERVICES</p>
            </a>
        </div>
    )
}