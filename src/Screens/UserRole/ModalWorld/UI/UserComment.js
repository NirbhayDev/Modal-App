
import leena from '../../../../assets/leena.png'
const UserComment = () => {
  return (
    <>
      <div className='py-2'>
        <div className='d-flex pb-4 align-items-center'>
          <img src={leena} alt='' className=' mr-3' />
          <div className='text-white mr-3'>
            <p className='m-0'>LEENA</p>
            <p className='m-0 font-9 fw-lighter sm-line-height text-white-50'>
                Yesterday 12:11 pm
            </p>
          </div>
        </div>
        <p className='m-0'>
  t Maecenas molestie eget tortor, imperdiet tortor sed.
  Eros, et maecenas nunc, accumsan netus etiam nulla.
  Lorem auctor facilisis sagittis, leo pharetra pretium
  tortor sed vivamus. Faucibus porttitor proin ultrices
  integer. Euismod purus augue integer nibh tempus
  posuere.
        </p>
      </div>
      <hr />
    </>
  )
}
export default UserComment
