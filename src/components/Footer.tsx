import { FC } from 'react'

const Footer: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col mb-5 bg-transparent items-center justify-center gap-2 w-full text-white/25 text-sm md:text-md">
      <div className="flex flex-row w-full items-center justify-center gap-3">
        <div className="hover:text-white duration-300 cursor-pointer">Privacy Policy</div>
        <span>&</span>
        <div className="hover:text-white duration-300 cursor-pointer">Terms of Service</div>
      </div>
      <span className="text-white/10 text-center">Copyright © {new Date().getFullYear()} KASH Monitors.</span>
      <span className="text-white/10 text-center">All rights reserved.</span>
    </div>
  )
}

export default Footer
