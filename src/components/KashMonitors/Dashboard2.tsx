import { FC } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import SetupSection from '../SetupSection'
import StoreList from '../StoreList'

const App: FC = (): JSX.Element => (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#131C1E] select-none">
      <div className="absolute -left-20 -top-20 w-1/4 h-1/3 blur-[25vw] bg-[#63FF69]/75 rounded-full opacity-20 mix-blend-normal"></div>
      <div className="absolute left-20 top-20 w-1/4 h-1/3 blur-[25vw] bg-[#638DFF]/75 rounded-full opacity-30 mix-blend-normal"></div>

      <div className="absolute right-0 bottom-0 w-1/4 h-1/3 blur-[25vw] bg-[#63FF69]/75 rounded-full opacity-20 mix-blend-normal"></div>
      <div className="absolute right-40 bottom-40 w-1/4 h-1/3 blur-[25vw] bg-[#638DFF]/75 rounded-full opacity-30 mix-blend-normal"></div>
      <div className="flex flex-col z-10 gap-20 w-full px-10 md:px-0 md:w-1/3 h-screen justify-center overflow-scroll md:overflow-auto">
        <div className="flex flex-col w-full h-full items-center justify-center gap-32">
          {/*<div className="flex flex-col w-full gap-16">*/}
          {/*  <Header />*/}
          {/*  <StoreList />*/}
          {/*</div>*/}
          {/*<SetupSection />*/}
        </div>
        <Footer />
      </div>
    </div>
)

export default App
