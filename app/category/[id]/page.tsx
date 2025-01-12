'use client'
import CategoryDetailsPopup from '@/components/categorySection/categoryDetailsPopup';
import CategoryItemCard from '@/components/homeSections/category/categoryItemCard';
import { CategoryItemList, categoryList } from '@/components/homeSections/category/data'
import { Category, CategoryItem } from '@/components/homeSections/category/model';
import TitleIcon from '@/components/homeUiElements/titleIcon';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { FaArrowLeft, FaInfoCircle } from 'react-icons/fa';

const Page = () => {
    const { id } = useParams();
    const categoryItem = id != null ? CategoryItemList.find((x: CategoryItem) => x.id == Number(id)) : null;
    const category = categoryItem != null ? categoryList.find((x: Category) => x.id == categoryItem?.categoryId) : null;

    const [showPopup, setShowPopup] = useState(false);
    const handleOpenPopup = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);
  return (
    <div className="max-w-full pt-20 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-28">
        { categoryItem != null &&
            <div>
            <div className="w-full text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">{category?.title}</span>
            </div>
    
    
            <div className='flex justify-center h-full md:h-[400px] overflow-hidden'>
                
                <div className='grid grid-cols-1 md:grid-cols-3 w-full md:w-[85%] relative'>
                    <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t md:before:bg-gradient-to-r before:from-black before:to-transparent"></div>
                        <div className='col-span-1 order-2 md:order-1 relative px-8'>
                            <h1 className='neon w-full rounded text-3xl sm:text-3xl md:text-4xl font-bold text-center text-white uppercase mb-4 sm:mb-6 mt-8'>
                                {categoryItem?.title}
                            </h1>
                            <p className='mt-[40px] md:mt-[85px] text-sm text-gray-200 text-center tracking-[0.1rem] font-semibold'>
                                {categoryItem?.description}
                            </p>
        
                            <div className='mt-8 md:mt-16 mb-8 flex justify-center'>
                                <div onClick={handleOpenPopup} className='categoryBtn cursor-pointer rounded px-1 md:px-2 mt-4 py-1.5 xl:py-3.5 overflow-hidden group
                                    bg-amber-600 relative hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400
                                    text-white transition-all
                                    ease-out duration-300 w-[150px] lg:w-[150px] text-center'>
                                    <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform
                                    translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
                                    <span className='relative flex justify-center items-center gap-2 font-bold uppercase text-sm lg:text-base'>
                                        More Info <FaInfoCircle className='text-red-700' />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 md:col-span-2 order-1 md:order-2 relative'>
                            <Image 
                                src={categoryItem?.imageUrl == null ? '' : categoryItem?.imageUrl}  
                                alt="warehouse" 
                                width={600} 
                                height={600} 
                                className='h-full w-full object-cover inset-0' />
                                <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t md:before:bg-gradient-to-r before:from-black before:to-transparent"></div>
                        </div>
        
                        
                        
                    </div>
                </div>
    
                <div className='mt-[50px]'>
                    <div className="bg-custom-red mb-8 py-1 px-4 rounded-md flex gap-3 w-fit">
                        <p className="uppercase font-semibold tracking-custom text-white text-sm md:text-custom">
                            Featured Items
                        </p>
                        <div className="hidden md:flex items-center">
                            <TitleIcon />
                        </div>
                    </div>
                    <div className='mb-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full lg:w-[calc(100%_-_55px)]'>
                        {
                            CategoryItemList.filter((x: CategoryItem) => x.categoryId == category?.id && x.id != categoryItem?.id).map((data: CategoryItem) => {
                                return (
                                    <CategoryItemCard key={data.id} id={data.id} title={data.title} description={data.description} imageUrl={data.imageUrl} />
                                )
                            })
                        }
                    </div>
                </div>
            
                    <CategoryDetailsPopup showPopup={showPopup} closePopup={handleClosePopup} title={categoryItem?.title} description={categoryItem?.description} />
            </div>
        }

        { categoryItem == null &&
            <div className='text-center h-[80vh] flex justify-center'>
                <div className='my-auto'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6'>No Content</h1>
                    <Link href="/home" className='bg-custom-red hover:bg-sky-500 flex items-center gap-2 w-fit p-2 rounded text-white mx-auto'>
                     <FaArrowLeft /> Back to Home
                    </Link>
                </div>
                
                
            </div>
        }
    </div>
    
  )
}

export default Page