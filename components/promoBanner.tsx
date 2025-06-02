"use client"

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface PromoBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function PromoBanner({ 
  title, 
  description, 
  buttonText,
  buttonLink
}: PromoBannerProps) {
  return (
    <div className="h-full bg-red-600 rounded-lg overflow-hidden flex flex-col">
      <div className="relative h-[250px] w-full flex items-center justify-center bg-red-700">
        <div className="absolute inset-0 bg-[url('/bunader-white-logo.png')] bg-no-repeat bg-center bg-contain"></div>
        <div className="absolute top-4 left-4">
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col text-white">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/90 mb-6 flex-1">{description}</p>
        <Link 
          href={buttonLink} 
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-semibold rounded hover:bg-red-50 transition-all duration-200"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}