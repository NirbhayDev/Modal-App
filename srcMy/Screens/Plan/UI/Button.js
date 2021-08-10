import './Button.css'
const Button = (props) => {
  const service_data = [
    {
      id: 1,
      title: 'Monthly '
    },
    {
      id: 2,
      title: 'Quaterly'
    },
    {
      id: 3,
      title: 'Half Yearly'
    },
    {
      id: 3,
      title: 'Yearly'
    }
  ]

  console.log('clicked', props)

  return <>
    <div className='d-flex justify-content-center align-items-center pb-4'>
      <div className='mb-3'>
        <div className='row m-text-center'>
          <div className='col-lg-3 col-sm-6 pb-3 '>
            <button className='btn btn-outline service-button'>
              {service_data[0].title}
            </button>
          </div>
          <div className='col-lg-3 col-sm-6 pb-3 '>
            <button
              className='btn btn-outline service-button-outline'
              onClick={props.onQuaterly}
            >
              {service_data[1].title}
            </button>
          </div>
          <div className='col-lg-3 col-sm-6 pb-3 '>
            <button
              className='btn btn-outline service-button-outline '
              onClick={props.onHalfYearly}
            >
              {service_data[2].title}
            </button>
          </div>
          <div className='col-lg-3 col-sm-6 pb-3 '>
            <button
              className='btn btn-outline service-button-outline '
              onClick={props.onYearly}
            >
              {service_data[3].title}
            </button>
          </div>
        </div>
      </div>
    </div>

         </>
}
export default Button
