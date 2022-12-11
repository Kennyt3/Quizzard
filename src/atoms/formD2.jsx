import PrevBtn from './prevBtn'

function FormD2({ getPrevQuestion }) {
  return (
    <>
      <h1 className='uppercase font-bold text-thirSix  text-center'>
        Ready to submit your answers?
      </h1>
      <div className=' flex xxsm:w-screen  justify-around   sm:w-full  mt-10'>
        <PrevBtn getPrevQuestion={getPrevQuestion} />
        <button className='bg-pr text-white font-bold text-xl uppercase xxsm:px-4 xxsm2:px-6 xsm:mx-6  xsm:px-10 py-3 rounded-xl'>
          SUBMIT
        </button>
      </div>
    </>
  )
}

export default FormD2
