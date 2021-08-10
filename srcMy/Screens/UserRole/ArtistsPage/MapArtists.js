import Navbar from '../../../Components/Navbar/Navbar'
import Artists from './Artists'
import ArtistSearch from './ArtistSearch'

const ModalInfo = [
  {
    id: 1,
    name: 'Nechita',
    imgs: './Images/first.png'
  },
  {
    id: 2,
    name: 'Kate',
    imgs: './Images/second.png'
  },
  {
    id: 3,
    name: 'paulla',
    imgs: './Images/third.png'
  },
  {
    id: 4,
    name: 'Raushell',
    imgs: './Images/fourth.png'
  },
  {
    id: 5,
    name: 'Serena',
    imgs: './Images/fifth.png'
  },
  {
    id: 5,
    name: 'Mariya',
    imgs: './Images/sixth.png'
  },
  {
    id: 5,
    name: 'Monika',
    imgs: './Images/seventh.png'
  }
]

const MapArtists = () => {
  return (
    <>
      <Navbar />
      <ArtistSearch />
      <div className='container'>
        <h3 className='py-5 text-white  heading1'>
          Search Result: Female Models in United States
        </h3>

        {ModalInfo.map((items) => {
          return <Artists name={items.name} modalpic={items.imgs} />
        })}
      </div>
    </>
  )
}
export default MapArtists
