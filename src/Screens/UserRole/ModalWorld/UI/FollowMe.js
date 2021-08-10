import { Link } from 'react-router-dom'
import tweeter from '../../../../assets/tweeter.png'
import insta from '../../../../assets/insta.png'
import facebook from '../../../../assets/facebook.png'
const FollowMe = () => {
  return (
    <>
      <div className='card rounded-xl p-4 black-bg mb-3'>
        <h5 className='text-white'>Follow me</h5>
        <div className='d-flex mt-3 justify-content-center'>
          <Link>
            <img src={tweeter} alt='tweeter' />
          </Link>
          <Link className='px-4'>
            <img src={facebook} alt='facebook' />
          </Link>
          <Link>
            <img src={insta} alt='insta' />
          </Link>
        </div>
      </div>
    </>
  )
}
export default FollowMe
