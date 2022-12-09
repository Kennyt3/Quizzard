import { quizImages } from '../assets'

function Image() {
  return (
    <div className=' ml-5 flex items-center '>
      <img src={quizImages.mark} alt='' className='w- w-14 h-14' />
    </div>
  )
}

export default Image
