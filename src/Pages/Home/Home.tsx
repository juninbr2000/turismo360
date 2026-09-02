import Header from './_sections/Header/Header'
import About from './_sections/About/About'
import MainDestinations from './_sections/MainDestinations/MainDestinations'
import Works from './_sections/Works/Works'
import Form from './_sections/Form/Form'
import Reviews from './_sections/Reviews/Reviews'

function Home() {
  return (
    <div>
      <Header />
      <About />
      <MainDestinations />
      <Works />
      <Form />
      <Reviews />
    </div>
  )
}

export default Home