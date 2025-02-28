"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <div className="relative py-24 ">
      <Image
        src="/landing-call-to-action.jpg"
        alt="Rentiful Search Section Background"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12 "
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-10 md:mr-10">
            <h2 className="text-2xl font-bold text-white">
              Find Your Dream Rental Property
            </h2>
          </div>
          <div>
            <p className="text-white mb-3">
              Discover a wide range of rental properties in your desired
              location
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-block text-primary-700 bg-white px-6 py-3 hover:bg-primary-500 rounded-lg font-semibold hover:text-primary-50"
              >
                Search
              </button>
              <Link
                href="/signup"
                className="inline-block text-white bg-secondary-500 hover:bg-secondary-600 rounded-lg font-semibold px-6 py-3"
                scroll={false}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
