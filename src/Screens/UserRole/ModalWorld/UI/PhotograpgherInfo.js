import call from '../../../../assets/call.png';
import location from '../../../../assets/location.png';
import mail from '../../../../assets/mail.png';
import photoa from '../../../../assets/photoa.png';
import single from '../../../../assets/single.png';
import star from '../../../../assets/star.png';
const PhotograpgherInfo = (props) => {
  return (
    <>
      <div className='card rounded-xl p-4 black-bg mb-3'>
        <div className='d-flex mb-2'>
          <h3 className='text-white mr-3'>
            <b>{props.user_name}</b>
          </h3>
          <img src={star} alt='star' className='ms-xl-3 mr-2' height='30px' />
        </div>
        <h5 className='text-white-50'>@alexthegreat</h5>
        <ul className='list-unstyled mt-4 mb-0'>
          <li className='d-flex align-items-center pb-3'>
            <img src={location} className='' alt='' />
            <h5 className='ml-3'>{props.location}</h5>
          </li>
          <li className='d-flex align-items-center pb-3'>
            <img src={single} className='img-fluid' alt='' />
            <h5 className='ml-3'>{props.status}</h5>
          </li>
          <li className='d-flex align-items-center pb-3'>
            <img src={photoa} className='img-fluid' alt='' />
            <h5 className='ml-3'>{props.photosCount}</h5>
          </li>
          <li className='d-flex align-items-center pb-3'>
            <img src={call} className='img-fluid' alt='' />
            <h5 className='ml-3'>{props.phone}</h5>
          </li>
          <li className='d-flex align-items-center'>
            <img src={mail} className='img-fluid' alt='' />
            <h5 className='ml-3 '>{props.email}</h5>
          </li>
        </ul>
      </div>
    </>
  )
};
export default PhotograpgherInfo
