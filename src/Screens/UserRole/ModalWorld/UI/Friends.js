import { Link } from 'react-router-dom'
import kate from '../../../../assets/kate.png'
const Friends = () => {
  return (
    <>
      <div className='card rounded-xl p-4 black-bg mb-3'>
        <h5 className='text-white'>Friends (226)</h5>
        <div className='d-flex mt-3 justify-content-xl-between'>
          <div>
            <img src={kate} alt='' />
            <p className='font-12 m-0 text-white'>Kate upton</p>
          </div>
          <div className='mx-3 mx-md-2'>
            <img src={kate} className='img-fluid' alt='' />
            <p className='font-12 m-0 text-white'>Kate upton</p>
          </div>
          <div>
            <img src={kate} className='img-fluid' alt='' />
            <p className='font-12 m-0 text-white'>Kate upton</p>
          </div>
        </div>
        <hr />
        <Link className='m-0 text-white text-decoration-none text-center'>See All Friends (226)</Link>
      </div>
    </>
  )
}
export default Friends
