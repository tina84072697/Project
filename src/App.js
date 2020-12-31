import logo from './logo.svg'
import './index.scss'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import MemberContent from './components/Member/MemberContent'
import MemberCard from './components/Member/MemberCard'
import MemberNavlist from './components/Member/MemberNavlist'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <body>
          <header>
            <MyNavbar />
          </header>
          <main className="container">
            <aside className="d-flex justify-content-between">
              <div>
                <MemberCard />
                <br />
                <MemberNavlist />
              </div>

              <article className="">
                <MemberContent />
              </article>
            </aside>
          </main>
          <br />

          <Footer />
        </body>
      </Router>
    </>
  )
}

export default App
