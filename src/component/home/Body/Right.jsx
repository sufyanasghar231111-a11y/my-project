import upper from '../../../assets/upper.png'
import collection from '../../../assets/collection.png'
import edit from '../../../assets/edit.png'
// import gsap from 'gsap'

function Right() {
 
  return (
    <div className='max-sm:flex max-sm:flex-col  max-sm:items-center '>
        <div className='pb-6 max-sm:pt-5 max-sm:pb-2  md:pb-3 lg:pb-6'>
            <img className='w-120 md:w-100 max-sm:w-[100vw] lg:w-120 rounded-2xl'  src={upper} alt="" />
        </div>
        <div className='flex  items-center  gap-3  max-sm:gap-2 justify-center'>
            <img className='w-56 md:w-39  lg:w-56 max-sm:w-[43vw] rounded-2xl max-sm:mb-3' src={collection} alt="" />
            <img className='w-56 md:w-39  lg:w-56 max-sm:w-[43vw] rounded-2xl max-sm:mb-3' src={edit} alt="" />
        </div>
    </div>
  )
}

export default Right