import React from 'react'

const ModularKitchenD = ({kitchen}) => {
  return (
    <>
    {
        kitchen === "work" ?
        <div className="flex flex-row mt-8 -ml-6">   
        <div className="flex">
        <div className="flex flex-row ">
        <p className=" text-sm mr-4">Wall A</p>
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
        
    </div>
    </div> :
    <div className="flex justify-between w-full px-10">
              <div className="flex flex-row items-center">
                <p className="text-lg mr-4">Wall A</p>
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
    }
    </>
  )
}

export default ModularKitchenD
