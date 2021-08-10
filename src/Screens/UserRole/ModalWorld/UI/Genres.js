import { Link } from 'react-router-dom'

const Genres = (props) => {
  return (
    <>
      <div className='card rounded-xl p-4 black-bg mb-3 d-flex flex-row'>
        <h5 className='text-white'>Genres :</h5>
        <ul className='list-unstyled mb-0 ml-3'>
          {props.generes && props.generes.length > 0 && props.generes.map((item) => {
            return (<li className='pb-1'>
              {item}
            </li>)
          })}
        </ul>
      </div>
    </>
  )
}
export default Genres
