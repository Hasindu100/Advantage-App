"use client"
import { subNavMenu } from '@/components/homeSections/navBar/data';
import Image from 'next/image';


type Props = {
  isOpen:boolean;
}

const Menu = ({isOpen}: Props) => {

  return (
    <div className="relative">
      {isOpen && (
        <div className="relative right-0 mt-2 w-full shadow-lg">
            {subNavMenu.map((menu) => {
                    return (
                        <div key={menu.id}>
                            <div className='mobileSubMenu flex px-2 py-2'>
                                <div className="flex-none mx-auto my-auto w-12 relative">
                                    <Image src={menu.image} alt="" width={80} height={80} className="relative inset-0 w-8 h-8 object-cover text-orange-600 " loading="lazy" />
                                    {/* <MdRocketLaunch className="absolute inset-0 w-8 h-full object-cover text-orange-600" /> */}
                                </div>
                                <div className="flex-auto pl-2">
                                    <div className="flex flex-wrap">
                                        <h1 className="flex-auto text-base font-bold text-white">
                                            {menu.title}
                                        </h1>
                                        <div className="w-full flex-none text-sm font-medium text-gray-300 mt-2">
                                            {menu.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
            
        </div>
      )}
    </div>
  );
};

export default Menu;