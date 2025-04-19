import React from 'react'

const ModularKitchenB = ({kitchen}) => {
  return (
    <>
    { kitchen === "work" ?
        <div className="flex flex-row mt-8 -ml-6">   
        {/* <div className="flex">
        <div className="flex flex-row ">
        <p className=" xl:text-sm mr-4">Wall A</p>
        <div className="flex">
            <div className="flex">
            <input
                type="text"
                className="w-3 h-3 mt-[4px] text-center rounded-sm border-[1.25px] border-sky-400"
            />
            <span className="ml-2 text-xs mr-2 mt-[2px]">Feet</span>
            </div>
            <div className="flex items-center">
            <input
                type="text"
                className="w-3 h-3 text-center rounded-sm border-[1.25px] border-sky-400"
            />
            <span className="ml-2 text-xs mr-4">Inch</span>
            </div>
        </div>
        </div>
        <div className="flex flex-row items-center">
        <p className="text-sm mr-4">Wall B</p>
        <div className="flex space-x-4">
            <div className="flex items-center">
            <input
                type="text"
                className="w-3 h-3 text-center rounded-sm border-[1.25px] border-sky-400"
            />
            <span className="ml-2 text-xs">Feet</span>
            </div>
            <div className="flex items-center">
            <input
                type="text"
                className="w-3 h-3 text-center rounded-sm border-[1.25px] border-sky-400"
            />
            <span className="ml-2 text-xs mr-2">Inch</span>
            </div>
        </div>
        </div>
    </div> */}
    </div> :
    <div className="flex justify-between py-4">
              <div className="flex flex-row items-center">
              <p className="md:ml-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg ml-1 mr-2 md:mr-4 font-bold">Wall<span className="ml-1">A</span></p>
              <div className="flex space-x-1 md:space-x-3">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-4 h-4 md:w-5 md:h-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="ml-[2px] text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg">Feet</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-4 h-4 md:w-5 md:h-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="ml-[2px] text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg">Inch</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
              <p className="ml-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-bold mr-2 md:mr-4">Wall<span className="ml-1">B</span></p>
                <div className="flex space-x-1 md:space-x-3">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="h-4 w-4 md:w-5 md:h-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="ml-[2px] text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg">Feet</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-4 h-4 md:w-5 md:h-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="ml-[2px] text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg">Inch</span>
                  </div>
                </div>
              </div>
            </div> 
}
</>
  )
}

export default ModularKitchenB
