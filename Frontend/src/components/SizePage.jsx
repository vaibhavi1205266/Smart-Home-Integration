import React from 'react'

const SizePage = () => {
  return (
    <div className="flex flex-row items-center mt-4 ml-2 mb-10">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-bold">Size:</p>
            <div className="flex justify-between w-full ml-[2px]">
              <div className="flex flex-row text-center items-center">
                <p className="md:ml-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg mr-2 md:mr-4 font-bold">Length</p>
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
                    <span className="ml-[2px] text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg mr-2">Inch</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-bold mr-2 md:mr-4">Height</p>
                <div className="flex space-x-1 md:space-x-3">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-4 h-4 md:h-5 md:w-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="ml-[2px] text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg">Feet</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-4 h-4 md:h-5 md:w-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="ml-[2px] text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg mr-[4px]">Inch</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg mr-[4px] md:mr-4 font-bold">Width</p>
                <div className="flex space-x-1 md:space-x-3">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-4 h-4 md:h-5 md:w-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="ml-[2px] text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg">Feet</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-4 h-4 md:h-5 md:w-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg ml-[2px] mr-[4px]">Inch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default SizePage
