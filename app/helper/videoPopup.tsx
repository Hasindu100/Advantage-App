import React from 'react'
import { VideoData } from './model'

const VideoPopup: React.FC<VideoData> = ({ videoUrl, isOpen, onClose }) => {
  return (
    <div className={`${isOpen ? 'fixed' : 'hidden'} inset-0 flex h-full items-center justify-center bg-black bg-opacity-50 z-20`}>
      <div className="relative bg-white p-4 pt-6 rounded-lg shadow-lg max-w-3xl sm:w-[80vw] lg:w-full">
        <button className="absolute right-4 -top-1 text-2xl text-right text-gray-500 float-right" onClick={onClose}>
          &times;
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-[30vh] xl:h-[50vh]"
            src={`https://www.youtube.com/embed/${videoUrl}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoPopup