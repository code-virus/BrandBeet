import React from 'react'

import ScrollingElements from '../components/ScrollingElements'
import Page2OverLay from '../components/Page2OverLay'
import Page3 from '../components/Page3'
import Page4 from '../components/Page4'
import Page5 from '../components/Page5'
import Page7 from '../components/Page7'
import Laodar from '../components/Laodar'
import Footer from '../components/Footer'

function App() {
  return (
    <><div className='w-full overflow-hidden h-[210vh] relative z-0'>
      <Laodar />
    <ScrollingElements />
    </div>

  <Page2OverLay />
  <Page3 />
 
  <Page5 />
  <Page7 />
  <Footer />
    </>
  )
}

export default App