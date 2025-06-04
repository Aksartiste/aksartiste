'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'next/navigation';

// Sample gallery data - in a real app, this would come from a database or API
const galleryData = {
    fashion: {
        title: 'Fashion',
        description: 'Capturing the essence of style and expression',
        images: [
            {
                id: 1,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-1.jpg',
                alt: 'Fashion photograph 1',
                width: 1200,
                height: 1600,
            },
            {
                id: 2,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-2.jpg',
                alt: 'Fashion photograph 2',
                width: 1200,
                height: 1600,
            },
            {
                id: 3,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-3.jpg',
                alt: 'Fashion photograph 3',
                width: 1200,
                height: 1600,
            },
            {
                id: 4,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-4.jpg',
                alt: 'Fashion photograph 4',
                width: 1200,
                height: 1600,
            },
            {
                id: 5,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-5.jpg',
                alt: 'Fashion photograph 5',
                width: 1200,
                height: 1600,
            },
            {
                id: 6,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-6.jpg',
                alt: 'Fashion photograph 6',
                width: 1200,
                height: 1600,
            },
            {
                id: 7,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-7.jpg',
                alt: 'Fashion photograph 7',
                width: 1200,
                height: 1600,
            },
            {
                id: 8,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-8.jpg',
                alt: 'Fashion photograph 8',
                width: 1200,
                height: 1600,
            },
            {
                id: 9,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-9.jpg',
                alt: 'Fashion photograph 9',
                width: 1200,
                height: 1600,
            },
            {
                id: 10,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-10.jpg',
                alt: 'Fashion photograph 10',
                width: 1200,
                height: 1600,
            },
            {
                id: 11,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-12.jpg',
                alt: 'Fashion photograph 11',
                width: 1200,
                height: 1600,
            },
            {
                id: 12,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-13.jpg',
                alt: 'Fashion photograph 12',
                width: 1200,
                height: 1600,
            },
            {
                id: 13,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-14.jpg',
                alt: 'Fashion photograph 13',
                width: 1200,
                height: 1600,
            },
            {
                id: 14,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-15.jpg',
                alt: 'Fashion photograph 14',
                width: 1200,
                height: 1600,
            },
            {
                id: 15,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-16.jpg',
                alt: 'Fashion photograph 15',
                width: 1200,
                height: 1600,
            },
            {
                id: 16,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-17.jpg',
                alt: 'Fashion photograph 16',
                width: 1200,
                height: 1600,
            },
            {
                id: 17,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-18.jpg',
                alt: 'Fashion photograph 17',
                width: 1200,
                height: 1600,
            },
            {
                id: 18,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-19.jpg',
                alt: 'Fashion photograph 18',
                width: 1200,
                height: 1600,
            },
            {
                id: 19,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-20.jpg',
                alt: 'Fashion photograph 19',
                width: 1200,
                height: 1600,
            },
            {
                id: 20,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-21.jpg',
                alt: 'Fashion photograph 20',
                width: 1200,
                height: 1600,
            },
            {
                id: 21,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-22.jpg',
                alt: 'Fashion photograph 21',
                width: 1200,
                height: 1600,
            },
            {
                id: 22,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749064338/fashion/fas-23.jpg',
                alt: 'Fashion photograph 22',
                width: 1200,
                height: 1600,
            },
        ],
    },
    portraits: {
        title: 'Portraits',
        description: 'Intimate portraits exploring vulnerability and authenticity',
        images: [
            {
                id: 1,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-1.jpg',
                alt: 'Portrait 1',
                width: 1200,
                height: 1600,
            },
            {
                id: 2,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-2.jpg',
                alt: 'Portrait 2',
                width: 1200,
                height: 1600,
            },
            {
                id: 3,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-3.png',
                alt: 'Portrait 3',
                width: 1200,
                height: 1600,
            },
            {
                id: 4,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-4.jpg',
                alt: 'Portrait 4',
                width: 1200,
                height: 1600,
            },
            {
                id: 5,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-5.jpg',
                alt: 'Portrait 5',
                width: 1200,
                height: 1600,
            },
            {
                id: 6,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-6.jpg',
                alt: 'Portrait 6',
                width: 1200,
                height: 1600,
            },
            {
                id: 7,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-7.jpg',
                alt: 'Portrait 7',
                width: 1200,
                height: 1600,
            },
            {
                id: 8,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-8.jpg',
                alt: 'Portrait 8',
                width: 1200,
                height: 1600,
            },
            {
                id: 9,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-9.jpg',
                alt: 'Portrait 9',
                width: 1200,
                height: 1600,
            },
            {
                id: 10,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-10.jpg',
                alt: 'Portrait 10',
                width: 1200,
                height: 1600,
            },
            {
                id: 11,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-11.jpg',
                alt: 'Portrait 11',
                width: 1200,
                height: 1600,
            },
            {
                id: 12,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-12.jpg',
                alt: 'Portrait 12',
                width: 1200,
                height: 1600,
            },
            {
                id: 13,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-13.jpg',
                alt: 'Portrait 13',
                width: 1200,
                height: 1600,
            },
            {
                id: 14,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-14.jpg',
                alt: 'Portrait 14',
                width: 1200,
                height: 1600,
            },
            {
                id: 15,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749065600/portraits/port-15.jpg',
                alt: 'Portrait 15',
                width: 1200,
                height: 1600,
            },
        ],
    },
    'fine-arts': {
        title: 'Fine Arts',
        description: 'Artistic expressions through the photographic medium',
        images: [
            {
                id: 1,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-1.jpg',
                alt: 'Fine Art 1',
                width: 1200,
                height: 1600,
            },
            {
                id: 2,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-2.jpg',
                alt: 'Fine Art 2',
                width: 1200,
                height: 1600,
            },
            {
                id: 3,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-3.jpg',
                alt: 'Fine Art 3',
                width: 1200,
                height: 1600,
            },
            {
                id: 4,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-4.jpg',
                alt: 'Fine Art 4',
                width: 1200,
                height: 1600,
            },
            {
                id: 5,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-5.jpg',
                alt: 'Fine Art 5',
                width: 1200,
                height: 1600,
            },
            {
                id: 6,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-6.jpg',
                alt: 'Fine Art 6',
                width: 1200,
                height: 1600,
            },
            {
                id: 7,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-7.jpg',
                alt: 'Fine Art 7',
                width: 1200,
                height: 1600,
            },
            {
                id: 8,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-8.jpg',
                alt: 'Fine Art 8',
                width: 1200,
                height: 1600,
            },
            {
                id: 9,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-9.jpg',
                alt: 'Fine Art 9',
                width: 1200,
                height: 1600,
            },
            {
                id: 10,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-10.jpg',
                alt: 'Fine Art 10',
                width: 1200,
                height: 1600,
            },
            {
                id: 11,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-11.jpg',
                alt: 'Fine Art 11',
                width: 1200,
                height: 1600,
            },
            {
                id: 12,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-12.jpg',
                alt: 'Fine Art 12',
                width: 1200,
                height: 1600,
            },
            {
                id: 13,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-13.jpg',
                alt: 'Fine Art 13',
                width: 1200,
                height: 1600,
            },
            {
                id: 14,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-14.jpg',
                alt: 'Fine Art 14',
                width: 1200,
                height: 1600,
            },
            {
                id: 15,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-15.jpg',
                alt: 'Fine Art 15',
                width: 1200,
                height: 1600,
            },
            {
                id: 16,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-16.jpg',
                alt: 'Fine Art 16',
                width: 1200,
                height: 1600,
            },
            {
                id: 17,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-17.jpg',
                alt: 'Fine Art 17',
                width: 1200,
                height: 1600,
            },
            {
                id: 18,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-18.jpg',
                alt: 'Fine Art 18',
                width: 1200,
                height: 1600,
            },
            {
                id: 19,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-19.jpg',
                alt: 'Fine Art 19',
                width: 1200,
                height: 1600,
            },
            {
                id: 20,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-20.jpg',
                alt: 'Fine Art 20',
                width: 1200,
                height: 1600,
            },
            {
                id: 21,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-21.jpg',
                alt: 'Fine Art 21',
                width: 1200,
                height: 1600,
            },
            {
                id: 22,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-22.jpg',
                alt: 'Fine Art 22',
                width: 1200,
                height: 1600,
            },
            {
                id: 23,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-23.jpg',
                alt: 'Fine Art 23',
                width: 1200,
                height: 1600,
            },
            {
                id: 24,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-24.jpg',
                alt: 'Fine Art 24',
                width: 1200,
                height: 1600,
            },
            {
                id: 25,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-25.jpg',
                alt: 'Fine Art 25',
                width: 1200,
                height: 1600,
            },
            {
                id: 26,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-26.jpg',
                alt: 'Fine Art 26',
                width: 1200,
                height: 1600,
            },
            {
                id: 27,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-27.jpg',
                alt: 'Fine Art 27',
                width: 1200,
                height: 1600,
            },
            {
                id: 28,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-28.jpg',
                alt: 'Fine Art 28',
                width: 1200,
                height: 1600,
            },
            {
                id: 29,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-29.jpg',
                alt: 'Fine Art 29',
                width: 1200,
                height: 1600,
            },
            {
                id: 30,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-30.jpg',
                alt: 'Fine Art 30',
                width: 1200,
                height: 1600,
            },
            {
                id: 31,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-31.jpg',
                alt: 'Fine Art 31',
                width: 1200,
                height: 1600,
            },
            {
                id: 32,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-32.jpg',
                alt: 'Fine Art 32',
                width: 1200,
                height: 1600,
            },
            {
                id: 33,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-33.jpg',
                alt: 'Fine Art 33',
                width: 1200,
                height: 1600,
            },
            {
                id: 34,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-34.jpg',
                alt: 'Fine Art 34',
                width: 1200,
                height: 1600,
            },
            {
                id: 35,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-35.jpg',
                alt: 'Fine Art 35',
                width: 1200,
                height: 1600,
            },
            {
                id: 36,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-36.jpg',
                alt: 'Fine Art 36',
                width: 1200,
                height: 1600,
            },
            {
                id: 37,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-37.jpg',
                alt: 'Fine Art 37',
                width: 1200,
                height: 1600,
            },
            {
                id: 38,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-38.jpg',
                alt: 'Fine Art 38',
                width: 1200,
                height: 1600,
            },
            {
                id: 39,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072541/fineart/Fine-39.jpg',
                alt: 'Fine Art 39',
                width: 1200,
                height: 1600,
            },
        ],
    },
    editorial: {
        title: 'Editorial',
        description: 'Visual storytelling for magazines and publications',
        images: [
            {
                id: 1,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-1.jpg',
                alt: 'Editorial 1',
                width: 1200,
                height: 1600,
            },
            {
                id: 2,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-2.jpg',
                alt: 'Editorial 2',
                width: 1200,
                height: 1600,
            },
            {
                id: 3,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-3.jpg',
                alt: 'Editorial 3',
                width: 1200,
                height: 1600,
            },
            {
                id: 4,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-4.jpg',
                alt: 'Editorial 4',
                width: 1200,
                height: 1600,
            },
            {
                id: 5,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-5.jpg',
                alt: 'Editorial 5',
                width: 1200,
                height: 1600,
            },
            {
                id: 6,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-6.jpg',
                alt: 'Editorial 6',
                width: 1200,
                height: 1600,
            },
            {
                id: 7,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-7.jpg',
                alt: 'Editorial 7',
                width: 1200,
                height: 1600,
            },
            {
                id: 8,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-8.jpg',
                alt: 'Editorial 8',
                width: 1200,
                height: 1600,
            },
            {
                id: 9,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-9.jpg',
                alt: 'Editorial 9',
                width: 1200,
                height: 1600,
            },
            {
                id: 10,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-10.jpg',
                alt: 'Editorial 10',
                width: 1200,
                height: 1600,
            },
            {
                id: 11,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-11.jpg',
                alt: 'Editorial 11',
                width: 1200,
                height: 1600,
            },
            {
                id: 12,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-12.jpg',
                alt: 'Editorial 12',
                width: 1200,
                height: 1600,
            },
            {
                id: 13,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-13.jpg',
                alt: 'Editorial 13',
                width: 1200,
                height: 1600,
            },
            {
                id: 14,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-14.jpg',
                alt: 'Editorial 14',
                width: 1200,
                height: 1600,
            },
            {
                id: 15,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-15.jpg',
                alt: 'Editorial 15',
                width: 1200,
                height: 1600,
            },
            {
                id: 16,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-16.jpg',
                alt: 'Editorial 16',
                width: 1200,
                height: 1600,
            },
            {
                id: 17,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-17.jpg',
                alt: 'Editorial 17',
                width: 1200,
                height: 1600,
            },
            {
                id: 18,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749067349/editorial/editorial-18.jpg',
                alt: 'Editorial 18',
                width: 1200,
                height: 1600,
            },
        ],
    },
    travel: {
        title: 'Travel',
        description: 'Documenting journeys and capturing diverse cultures',
        images: [
            {
                id: 1,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072963/Travel/Travel-1.jpg',
                alt: 'Travel 1',
                width: 1200,
                height: 1600,
            },
            {
                id: 2,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072963/Travel/Travel-2.jpg',
                alt: 'Travel 2',
                width: 1200,
                height: 1600,
            },
            {
                id: 3,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072963/Travel/Travel-3.jpg',
                alt: 'Travel 3',
                width: 1200,
                height: 1600,
            },
            {
                id: 4,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072963/Travel/Travel-4.jpg',
                alt: 'Travel 4',
                width: 1200,
                height: 1600,
            },
            {
                id: 5,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072963/Travel/Travel-5.jpg',
                alt: 'Travel 5',
                width: 1200,
                height: 1600,
            },
            {
                id: 6,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072963/Travel/Travel-6.jpg',
                alt: 'Travel 6',
                width: 1200,
                height: 1600,
            },
            {
                id: 7,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072963/Travel/Travel-7.jpg',
                alt: 'Travel 7',
                width: 1200,
                height: 1600,
            },
            {
                id: 8,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072963/Travel/Travel-8.jpg',
                alt: 'Travel 8',
                width: 1200,
                height: 1600,
            },
            {
                id: 9,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072963/Travel/Travel-9.jpg',
                alt: 'Travel 9',
                width: 1200,
                height: 1600,
            },
            {
                id: 10,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072963/Travel/Travel-10.jpg',
                alt: 'Travel 10',
                width: 1200,
                height: 1600,
            },
        ],
    },
    events: {
        title: 'Events',
        description: 'Preserving special moments and celebrations',
        images: [
            {
                id: 1,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749035550/Meher_fgpetp.jpg',
                alt: 'Event 1',
                width: 1200,
                height: 1600,
            },
            {
                id: 2,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749035550/Abmol_iwxrya.jpg',
                alt: 'Event 2',
                width: 1200,
                height: 1600,
            },
            {
                id: 3,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1748792834/73_zhllvh.jpg',
                alt: 'Event 3',
                width: 1200,
                height: 1600,
            },
            {
                id: 4,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749072016/logos/logos-25.png',
                alt: 'Event 4',
                width: 1200,
                height: 1600,
            },
            {
                id: 5,
                src: 'https://res.cloudinary.com/dexibw60d/image/upload/v1749069060/logos/logos-24.png',
                alt: 'Event 5',
                width: 1200,
                height: 1600,
            },
        ],
    },
    // Add similar data for other subcategories
};

export default function SubcategoryPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const params = useParams();
    const subcategory = params.subcategory as string;

    // Get gallery data for this subcategory
    const gallery = galleryData[subcategory] || {
        title: subcategory.replace(/-/g, ' '),
        description: 'A collection of work',
        images: [],
    };

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const openGallery = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when gallery is open
    };

    const closeGallery = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    const navigateGallery = (direction) => {
        if (!selectedImage) return;

        const currentIndex = gallery.images.findIndex((img) => img.id === selectedImage.id);
        let newIndex;

        if (direction === 'next') {
            newIndex = (currentIndex + 1) % gallery.images.length;
        } else {
            newIndex = (currentIndex - 1 + gallery.images.length) % gallery.images.length;
        }

        setSelectedImage(gallery.images[newIndex]);
    };

    return (
        <div
            className={`min-h-screen bg-white text-gray-900 font-serif transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            data-oid="3dzwbik"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200"
                data-oid="h6u0da8"
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" data-oid="88bx9x_">
                    <div
                        className="flex justify-between items-center h-16 sm:h-20"
                        data-oid="m3w6mm."
                    >
                        <a
                            href="/"
                            className="text-xl sm:text-2xl tracking-tighter font-light"
                            data-oid="d4ddf0v"
                        >
                            aksartiste
                        </a>
                        <div
                            className="hidden md:flex space-x-8 text-sm uppercase tracking-widest"
                            data-oid="jlu8hhx"
                        >
                            <a
                                href="/#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="qoei1wo"
                            >
                                Work
                            </a>
                            <a
                                href="/#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="6v95:af"
                            >
                                About
                            </a>
                            <a
                                href="/#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="_e__q8-"
                            >
                                Journal
                            </a>
                            <a
                                href="/#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="cz8obdp"
                            >
                                Contact
                            </a>
                        </div>
                        <button
                            className="md:hidden p-2 -mr-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                            data-oid="m5d-wnl"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                data-oid="ah:mz:p"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    data-oid="bcz3kc."
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence data-oid="kcnm3pn">
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden absolute top-16 sm:top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            data-oid="-mmtg1q"
                        >
                            <div
                                className="flex flex-col py-4 px-6 sm:px-8 lg:px-12 space-y-6 text-sm uppercase tracking-widest"
                                data-oid="uiqwnik"
                            >
                                <a
                                    href="/#work"
                                    className="py-3 block hover:text-black/70 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="3kiu.0r"
                                >
                                    Work
                                </a>
                                <a
                                    href="/#about"
                                    className="py-3 block hover:text-black/70 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="kmlukmm"
                                >
                                    About
                                </a>
                                <a
                                    href="/#journal"
                                    className="py-3 block hover:text-black/70 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="871sq-n"
                                >
                                    Journal
                                </a>
                                <a
                                    href="/#contact"
                                    className="py-3 block hover:text-black/70 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                    data-oid="cnqe4wa"
                                >
                                    Contact
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Main Content */}
            <main
                className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
                data-oid="w4538-r"
            >
                {/* Breadcrumb */}
                <div className="mb-8" data-oid="wezr6uf">
                    <div className="flex items-center text-sm text-gray-500" data-oid="6lekg4p">
                        <Link
                            href="/"
                            className="hover:text-black transition-colors"
                            data-oid="n3tby5_"
                        >
                            Home
                        </Link>
                        <span className="mx-2" data-oid="m0n906n">
                            /
                        </span>
                        <Link
                            href="/#work"
                            className="hover:text-black transition-colors"
                            data-oid="3sqa2ut"
                        >
                            Work
                        </Link>
                        <span className="mx-2" data-oid="726bv8o">
                            /
                        </span>
                        <span className="text-black capitalize" data-oid="d456f2:">
                            {gallery.title}
                        </span>
                    </div>
                </div>

                {/* Gallery Header */}
                <div className="mb-12" data-oid="lkq.h1y">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-light mb-4"
                        data-oid="xn-3pxg"
                    >
                        {gallery.title}
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl" data-oid="fzjq2j2">
                        {gallery.description}
                    </p>
                </div>

                {/* Gallery Grid - Behance-like masonry grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                    data-oid=":t4ad42"
                >
                    {gallery.images.map((image) => (
                        <div
                            key={image.id}
                            className="cursor-pointer group"
                            onClick={() => openGallery(image)}
                            data-oid="lo7snmn"
                        >
                            <div
                                className="aspect-auto bg-gray-100 overflow-hidden"
                                data-oid="m2:uqgf"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    data-oid="4s.qoi7"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Back button */}
                <div className="mt-16" data-oid="0lj8cfj">
                    <Link
                        href="/#work"
                        className="inline-block px-8 py-3 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
                        data-oid="qivzwjt"
                    >
                        Back to Work
                    </Link>
                </div>
            </main>

            {/* Lightbox Gallery */}
            <AnimatePresence data-oid="xp6gf2w">
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-8"
                        onClick={closeGallery}
                        data-oid="cmkn_ud"
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                            onClick={closeGallery}
                            aria-label="Close gallery"
                            data-oid="gx.esei"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="o31otxh"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="-rihtwd"
                                />
                            </svg>
                        </button>

                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateGallery('prev');
                            }}
                            aria-label="Previous image"
                            data-oid="b8n3mv3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="m1j3gge"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                    data-oid="mh-fgn9"
                                />
                            </svg>
                        </button>

                        <motion.div
                            className="relative max-w-5xl max-h-[80vh] overflow-hidden"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            data-oid="pgz-ff8"
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-h-[80vh] max-w-full object-contain"
                                data-oid="flp1j8c"
                            />

                            <div
                                className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center"
                                data-oid="e688q9l"
                            >
                                <p className="text-sm" data-oid="1blu5pk">
                                    {selectedImage.alt}
                                </p>
                            </div>
                        </motion.div>

                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateGallery('next');
                            }}
                            aria-label="Next image"
                            data-oid="dad1hr8"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="9no:g09"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                    data-oid="ksao8s."
                                />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer */}
            <footer
                className="py-10 sm:py-12 px-4 sm:px-8 lg:px-12 border-t border-gray-200"
                data-oid="dalyz4u"
            >
                <div className="max-w-7xl mx-auto" data-oid="vvk71ft">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="-mlho:p"
                    >
                        <div className="mb-6 md:mb-0" data-oid="o2jty4b">
                            <a
                                href="/"
                                className="text-xl tracking-tighter font-light"
                                data-oid="jp575op"
                            >
                                aksartiste
                            </a>
                        </div>
                        <div
                            className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm uppercase tracking-widest mb-8 md:mb-0"
                            data-oid="0wkce:z"
                        >
                            <a
                                href="/#work"
                                className="hover:text-black/70 transition-colors"
                                data-oid="x4f0.y8"
                            >
                                Work
                            </a>
                            <a
                                href="/#about"
                                className="hover:text-black/70 transition-colors"
                                data-oid="4q2kwnt"
                            >
                                About
                            </a>
                            <a
                                href="/#journal"
                                className="hover:text-black/70 transition-colors"
                                data-oid="1p9_usu"
                            >
                                Journal
                            </a>
                            <a
                                href="/#contact"
                                className="hover:text-black/70 transition-colors"
                                data-oid="me7j9wn"
                            >
                                Contact
                            </a>
                        </div>
                        <div className="flex space-x-8 sm:space-x-6" data-oid="0:5mz66">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="k9_5t1h"
                            >
                                <span className="sr-only" data-oid="fd1qdan">
                                    Instagram
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="d4ml_1y"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                        data-oid="sh-4i-h"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="9y7qz2r"
                            >
                                <span className="sr-only" data-oid="fna:lhi">
                                    Twitter
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="bh6am7r"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        data-oid="il8mox."
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-black transition-colors"
                                data-oid="22udgzj"
                            >
                                <span className="sr-only" data-oid="85wgd.n">
                                    Pinterest
                                </span>
                                <svg
                                    className="h-6 w-6 sm:h-5 sm:w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="4uvuo79"
                                >
                                    <path
                                        d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        data-oid="8d:a6i-"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-gray-500"
                        data-oid="_51iaaf"
                    >
                        <p data-oid=":a82-2m">
                            © {new Date().getFullYear()} aksartiste. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
