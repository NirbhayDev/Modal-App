import './ArtistSearch.css'
import { IconButton } from '@material-ui/core'
import { Search, Tune } from '@material-ui/icons'
import AdvancedSearch from './AdvancedSearch'
import { useState } from 'react'

const ArtistSearch = () => {
  const [isAdvanceSearch, setAdvanceSearch] = useState(false)

  return (
    <>
      <div className='container'>
        <h3 className='text-white text-center py-5 font-2'>Artist Search</h3>
        <div className='d-flex justify-content-center align-items-center'>
          <div class='input-group my-5 pb-5 '>
            <input
              type='text'
              class='form-control searchField'
              placeholder='Type Name, Modal, Photographer'
              aria-label=' username'
              aria-describedby='basic-addon2'
            />
            <button class='btnSearch' id='basic-addon2'>
              <Search />
            </button>
            <p className='m-0 pl-3 d-flex align-items-center'>
              <IconButton size='large' className='btnAdvSearch' onClick={() => setAdvanceSearch(!isAdvanceSearch)}>
                <Tune style={{ color: isAdvanceSearch ? '#ff196e':'#fff' }} />
              </IconButton>
            </p>
          </div>
        </div>
      </div>
      {isAdvanceSearch ? <AdvancedSearch /> : null}
    </>
  )
}
export default ArtistSearch
