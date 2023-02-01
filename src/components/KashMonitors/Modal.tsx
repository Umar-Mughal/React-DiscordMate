import React from 'react'

export default function Modal({positiveKeyWords, negativeKeyWords, positiveSku, negativeSku, handleDeletePositiveSku,handleDeletePositiveKw, handleDeleteNegativeKw, handleDeleteNegativeSku}: any) {
  return (
    <>
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal ">
  <div className="modal-box relative rounded-xl bg-[#141E21] p-6">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className='flex flex-row items-center mb-12'>
    <h3 className="text-2xl  font-bold mr-4">Here's your current keywords</h3>
    {/* <p className='text-[#16A34A] bg-[#16A34A]/10 p-2 rounded text-sm'>{textList.length}</p> */}
    </div>





    <h3 className="text-lg  font-bold mr-4 mb-2">Positive Keywords</h3>
    <div className='flex flex-row flex-wrap gap-3 mb-12'>
    {
        positiveKeyWords.map((word:any) => {
            return (
                <div className='bg-[#16A34A]/40 py-1  px-4 rounded-lg flex flex-row items-center'>
<p className='text-sm font-medium text-white mr-2' >{word}</p>
<div onClick={() => handleDeletePositiveKw(word)} className='rounded-3xl p-2 text-xs close-box bg-[#EC6660]/30  text-[#EC6660]'>x</div>
</div>
            )
        })
    }


    </div>



    <h3 className="text-lg  font-bold mr-4 mb-2">Negative Keywords</h3>
    <div className='flex flex-row flex-wrap gap-3 mb-12'>
    {
        negativeKeyWords.map((word:any) => {
            return (
                <div className='bg-[#EC6660]/40 py-1  px-4 rounded-lg flex flex-row items-center'>
<p className='text-sm font-medium text-white mr-2' >{word}</p>
<div onClick={() => handleDeleteNegativeKw(word)} className='rounded-3xl p-2 text-xs close-box bg-[#EC6660]/30  text-[#EC6660]'>x</div>
</div>
            )
        })
    }


    </div>

    <h3 className="text-lg  font-bold mr-4 mb-2">Positive SKUs</h3>
    <div className='flex flex-row flex-wrap gap-3 mb-12'>
    {
        positiveSku.map((word:any) => {
            return (
                <div className='bg-[#16A34A]/40 py-1  px-4 rounded-lg flex flex-row items-center'>
<p className='text-sm font-medium text-white mr-2' >{word}</p>
<div onClick={() => handleDeletePositiveSku(word)} className='rounded-3xl p-2 text-xs close-box bg-[#EC6660]/30  text-[#EC6660]'>x</div>
</div>
            )
        })
    }


    </div>

    <h3 className="text-lg  font-bold mr-4 mb-2">Negative SKUs</h3>
    <div className='flex flex-row flex-wrap gap-3 mb-12'>
    {
        negativeSku.map((word:any) => {
            return (
                <div className='bg-[#EC6660]/40 py-1  px-4 rounded-lg flex flex-row items-center'>
<p className='text-sm font-medium text-white mr-2' >{word}</p>
<div onClick={() => handleDeleteNegativeSku(word)} className='rounded-3xl p-2 text-xs close-box bg-[#EC6660]/30  text-[#EC6660]'>x</div>
</div>
            )
        })
    }


    </div>





  </div>
</div></>
  )
}


{/* <div className='bg-[#192729] py-1  px-4 rounded-lg flex flex-row items-center'>
<p className='text-sm font-medium text-white mr-2' >{text}</p>
<div className='rounded-3xl p-2 text-xs close-box bg-[#EC6660]/30  text-[#EC6660]'>x</div>
</div> */}
