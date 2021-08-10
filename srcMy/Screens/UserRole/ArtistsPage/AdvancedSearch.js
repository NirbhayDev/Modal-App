
import './AdvancedSearch.css'
const AdvancedSearch = () => {
  return (
    <>
      <div className='container-fluid black-bg py-5 '>
        <h3 className='text-white text-center '>Advanced Search</h3>
        <div className=' container d-flex justify-content-sm-center align-items-sm-center py-5'>
          <div className='row m-input-center'>
            <div className='col-lg-4 col-12 px-4'>
              <label className='advSeLabel'>Artist</label>
              <div className='select-box'>
                <select>
                  <option>Select1</option>
                  <option>select2</option>
                  <option>select3 </option>
                </select>
              </div>
            </div>

            <div className=' col-lg-4 col-12 px-4'>
              <label className='advSeLabel'>Gender</label>
              <div className='select-box'>
                <select>
                  <option>Female</option>
                  <option>select2</option>
                  <option>select3 </option>
                </select>
              </div>
            </div>

            <div className=' col-lg-4 col-12 px-4'>
              <label className='advSeLabel'>Location</label>
              <div className='select-box'>
                <select>
                  <option>USA</option>
                  <option>select2</option>
                  <option>select3 </option>
                </select>
              </div>
            </div>

          </div>
        </div>

        <div className='text-center py-4'>
          <button type='submit' className=' btn login-button text-center'>Search</button>
        </div>

      </div>

    </>
  )
}
export default AdvancedSearch
