const ModalsDetails = (props) => {
  return (
    <>
      <div className='card rounded-xl p-sm-5 p-3 black-bg mb-3'>
        <h4 className='text-white mb-4'>
          <b>Details</b>
        </h4>
        <ul className='list-unstyled mb-0'>
          {Object.entries(props.detail).map(([key, value]) => {
            return (<li className='mb-0 text-white d-flex d-flex'>
              <h5 className='w-25'>{key.toString()}:</h5>
              <h5 className='ms-3'>{value}</h5>
            </li>)
          })}
        </ul>
      </div>

    </>
  )
}
export default ModalsDetails
