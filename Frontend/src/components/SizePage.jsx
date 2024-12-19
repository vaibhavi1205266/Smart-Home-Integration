import React from 'react'


const SizePage = () => {
  return (
    <div className="flex flex-row items-center mt-4 ml-4 mr-10 mb-10">
            <p className="font-normal text-lg ml-20">Size:</p>
            <div className="flex justify-between w-full px-10">
              <div className="flex flex-row items-center">
                <p className="text-lg mr-4">Length</p>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-5 h-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="ml-2">Feet</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-5 h-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="ml-2">Inch</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-lg mr-4">Height</p>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-5 h-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="ml-2">Feet</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-5 h-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="ml-2">Inch</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-lg mr-4">Width</p>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-5 h-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="ml-2">Feet</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-5 h-5 text-center rounded-md border-[1.25px] border-sky-400"
                    />
                    <span className="ml-2">Inch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default SizePage
