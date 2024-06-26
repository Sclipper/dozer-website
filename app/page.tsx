import DozzerNomics from './components/DozzerNomics'
import Footer from './components/Footer'
import Header from './components/Header'
import HowToBuy from './components/HowToBuy'
import Intro from './components/Intro'
import Message from './components/Message'
import Roadmap from './components/Roadmap'

export default function Home() {
  return (
    <div
      className="lg:px-20 px-4 md:py-8 py-4"
      style={{
        maxWidth: '1920px',
        margin: '0 auto',
        backgroundColor: '#131621',
      }}
    >
      <div className="flex flex-col gap-20">
        <Header />
        <div id="what-is-dozzer">
          <Intro />
        </div>
        <div id="message">
          <Message />
        </div>
        <div id="how-to-buy">
          <HowToBuy />
        </div>
        <div id="tokenomics">
          <DozzerNomics />
        </div>
        <div id="roadmap">
          <Roadmap />
        </div>
        <div id="airdrop">{/* Airdrop section content here */}</div>
        <Footer />
      </div>
    </div>
  )
}
