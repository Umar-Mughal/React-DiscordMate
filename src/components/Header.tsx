import { FC } from 'react'

const Header: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full justify-center items-center text-center text-white/75 text-3xl">
      <h1 className="font-black">KASH MONITORS</h1>
      <h1 className="text-white/50 text-xl">PRODUCT PORTAL</h1>
    </div>
  )
}

export default Header
