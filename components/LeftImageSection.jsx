"use client";
import React from "react";
import { motion } from "framer-motion";

export default function LeftImageSection({ data }) {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <motion.div
        className="w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.img
          key={data.img}
          src={data.img}
          alt={data.name}
          className="w-48 h-40 sm:w-64 sm:h-56 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px] object-cover border-4 border-white shadow-lg 
                     rounded-[30%] sm:rounded-xl"  
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
