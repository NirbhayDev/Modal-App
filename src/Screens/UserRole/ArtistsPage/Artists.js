import './Artists.css'
import { Facebook, Instagram, Twitter, MailOutline, FavoriteBorder, Favorite } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'
import star from '../../../assets/star.png'
import { Link } from 'react-router-dom'

const Artists = (props) => {
  return (
    <>
      <div className='card rounded-xl p-4 black-bg mb-3'>
        <div className='row align-items-center'>
          <div className='col-lg-5 col-12'>
            <div className='modelImg mr-3'>
              <img src={props.modalpic} alt='first pic' />
              <IconButton color='secondary' className='btnLike'>
                <FavoriteBorder />
              </IconButton>
            </div>
          </div>
          <div className='col-lg-2 col-12 '>
            <div className='content'>
              <div className='d-flex pb-3'>
                <h3 className='text-white pr-3'>{props.name}</h3>
                <img src={star} alt='star' className='ms-xl-3 ms-2' style={{ width: '28px', height: '28px' }} />
              </div>
              <div className='py-3'>
                <p className='ModListsubtext'>Location</p>
                <p className='text-white'>Fort Lauderdale, FL, US</p>
              </div>
              <div className='py-3'>
                <p className='ModListsubtext'>Follow me</p>
                <div className='icons'>
                  <Link>
                    <Facebook className='mr-2 text-white' />
                  </Link>
                  <Link>
                    <Instagram className='mr-2 text-white' />
                  </Link>
                  <Link>
                    <Twitter className='mr-2 text-white' />
                  </Link>
                </div>
              </div>
              <div className='py-3'>
                <p className='ModListsubtext'>Get Enquiry</p>
                <Link className='icon'>
                  <MailOutline className='text-white' />
                </Link>
              </div>
            </div>
          </div>

          <div className='col-lg-5 col-sm-6 align-items-start'>
            <div className='d-flex artRightCont'>
              <ul className='list-unstyled m-0'>
                <li className='text-white d-flex'>
                  <p className='ModListsubtext font-1'>Artist Type:</p>
                  <p className='text-white font-1'>Female Model </p>
                </li>
                <li className='text-white d-flex'>
                  <p className='ModListsubtext font-1 '>Stats:</p>
                  <p className='text-white font-1'>22566</p>
                </li>
                <li className='text-white d-flex'>
                  <p className='ModListsubtext font-1 '>Experience:</p>
                  <p className=' text-white font-1'>Some Experience </p>
                </li>
                <li className='text-white d-flex'>
                  <p className='ModListsubtext font-1 '>Shoots Nude:</p>
                  <p className='text-white font-1'>No</p>
                </li>
                <li className='text-white d-flex'>
                  <p className='ModListsubtext font-1 '>Compensation:</p>
                  <p className='text-white font-1'>Depends on Assign</p>
                </li>
                <li className='text-white d-flex'>
                  <p className='ModListsubtext font-1 '>Tattoos/Piercings:</p>
                  <p className=' text-white font-1'>None/None</p>
                </li>
                <li className='text-white d-flex'>
                  <p className='ModListsubtext font-1 '>Genres:</p>
                  <p className='text-white font-1'>
                    Acting, Fashion, Fit Modeling, Fitness Hair/Makeup, Lifestyle, Parts Modeling Performance Artists, Promotional
                  </p>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Artists
