<<<<<<< HEAD
import React from 'react'
import '../../index.scss'
=======
import '../../index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
import EventAlbum from '../../components/Event/EventAlbum'

function Album() {
  return (
<<<<<<< HEAD
    <>
      <EventAlbum />
    </>
=======
    <Router>
      <>
        {/* <MyNavbar /> */}
        <EventAlbum />
        {/* <Footer /> */}
      </>
    </Router>
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
  )
}
export default Album
