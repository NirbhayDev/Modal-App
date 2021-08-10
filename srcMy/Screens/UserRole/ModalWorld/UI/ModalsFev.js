import modal4 from '../../../../assets/model4.png'
import modal3 from '../../../../assets/model3.png'
import modal2 from '../../../../assets/model2.png'
import modal1 from '../../../../assets/model1.png'
import rating from '../../../../assets/rating-star.png'

const ModalsFev = () => {
  return (
    <>
      <div className='card rounded-xl p-4 black-bg mb-3'>
        <h5 className='text-white m-0'>Favorites</h5>
        <hr />
        <ul className='list-unstyled mb-0 mt-3'>
          <li className='pb-3 d-flex align-items-center'>
            <img src={modal1} alt='' className='mr-2' />
            <p className='m-0 px-2 text-white'>Model 1</p>
            <img src={rating} alt='' />
          </li>

          <li className='pb-3 d-flex align-items-center'>
            <img src={modal2} alt='' className='mr-2' />
            <p className='m-0 px-2 text-white'>Model 2</p>
            <img src={rating} alt='' />
          </li>

          <li className='pb-3 d-flex align-items-center'>
            <img src={modal3} alt='' className='mr-2' />
            <p className='m-0 px-2 text-white'>Model 3</p>
            <img src={rating} alt='' />
          </li>

          <li className='pb-3 d-flex align-items-center'>
            <img src={modal4} alt='' className='mr-2' />
            <p className='m-0 px-2 text-white'>Model 4</p>
            <img src={rating} alt='' />
          </li>
        </ul>
      </div>
    </>
  )
}
export default ModalsFev
