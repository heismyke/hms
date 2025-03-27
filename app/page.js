"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const imageSrc =
    "https://images.pexels.com/photos/6303604/pexels-photo-6303604.jpeg";

  return (
    <div className="min-h-screen relative bg-[#706D54] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="ZeeCare Medical Institute"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-[#DBDBDB] px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#C9B194]">
          ZeeCare Medical Institute
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Your Trusted Partner in Comprehensive Healthcare
        </p>
        
        <div className="flex justify-center space-x-4">
            <Link href="/appointment">
              <button className="bg-[#A08963] cursor-pointer text-white px-6 py-3 rounded-full hover:bg-[#A08963]/90 transition-colors">
                    Book Appointment
            </button>
            </Link>
            <button className="border-2 border-[#C9B194] text-[#C9B194] cursor-pointer px-6 py-3 rounded-full hover:bg-[#C9B194]/20 transition-colors">
          Learn More
          </button>
      </div>
      </div>
    </div>
  );
};

export default Home;

