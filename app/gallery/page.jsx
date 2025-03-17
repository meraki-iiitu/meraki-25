"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
    "/images/gallery/7.jpg",
    "/images/gallery/8.jpg",
    "/images/gallery/9.jpg",
    "/images/gallery/10.jpg",
    "/images/gallery/11.jpg",
    "/images/gallery/12.jpg",
    "/images/gallery/13.jpg",
    "/images/gallery/14.jpg",
    "/images/gallery/15.jpg",
    "/images/gallery/16.jpg",
    "/images/gallery/17.jpg",
    "/images/gallery/18.jpg",
    "/images/gallery/19.jpg",
    "/images/gallery/20.jpg",
    "/images/gallery/21.jpg",
    "/images/gallery/22.jpg",
    "/images/gallery/23.jpg",
    "/images/gallery/24.jpg",
    "/images/gallery/25.jpg",
    "/images/gallery/26.jpg",
    "/images/gallery/27.jpg",
    "/images/gallery/28.jpg",
    "/images/gallery/29.jpg",
    "/images/gallery/30.jpg",
    "/images/gallery/31.jpg",
    "/images/gallery/32.jpg",
    "/images/gallery/33.jpg",
    "/images/gallery/34.jpg",
    "/images/gallery/35.jpg",
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const nextImage = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Image Gallery</h2>
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt="Gallery item"
                        className="w-full h-auto rounded-lg cursor-pointer transition"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <Dialog open={true} onClose={() => setSelectedIndex(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        {/* Close button outside */}
                        <motion.button
                            onClick={() => setSelectedIndex(null)}
                            className="fixed top-4 right-4 z-50 text-white"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X size={48} />
                        </motion.button>

                        {/* Navigation buttons outside */}
                        <motion.button
                            onClick={prevImage}
                            className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 text-white"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronLeft size={48} />
                        </motion.button>
                        <motion.button
                            onClick={nextImage}
                            className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 text-white"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronRight size={48} />
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.75 }}
                            animate={{ opacity: 1, scale: 0.85 }}
                            exit={{ opacity: 0, scale: 0.75 }}
                            transition={{ duration: 0.4 }}
                            className="relative flex items-center justify-center"
                        >
                            <motion.img
                                key={selectedIndex}
                                src={images[selectedIndex]}
                                alt="Selected"
                                className="w-full h-auto rounded-lg"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.4 }}
                            />
                        </motion.div>
                    </Dialog>
                )}
            </AnimatePresence>
        </div>
    );
}