import { FC, useState } from 'react'
import useCookies from '../hooks/useCookies'

interface ISetupSectionProps {}

const SetupSection: FC<ISetupSectionProps> = ({}): JSX.Element => {
  const { setCookie } = useCookies()
  const [isSetupCollapsed, setIsSetupCollapsed] = useState<boolean>(false)
  const [accessTokenValue, setAccessTokenValue] = useState<string>('')

  const handleSave = (): void => {
    setCookie('access_token', accessTokenValue)
    setIsSetupCollapsed(true)
  }

  return (
    <div className={`w-full collapse ${isSetupCollapsed ? 'collapse-open border-green-900/50' : 'collapse-close'} collapse-arrow border-2 border-base-100 duration-300 bg-transparent backdrop-blur-2xl rounded-lg`}>
      <div className={`${isSetupCollapsed && 'text-white'} collapse-title text-xl cursor-pointer`} onClick={() => setIsSetupCollapsed(!isSetupCollapsed)}>
        Setup
      </div>
      <div className="collapse-content w-full">
        <div className="form-control">
          <textarea spellCheck="false" className="w-full rounded textarea textarea-bordered bg-transparent outline-none focus:outline-none" placeholder="Enter your access token here" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAccessTokenValue(e.target.value)}></textarea>
        </div>
        <div className="flex w-full mt-5 items-center justify-between">
          <span
            className="label-text-alt cursor-pointer hover:text-blue-500 duration-300"
            onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
              e.preventDefault()
              window.open('https://unite.nike.com/auth/unite_session_cookies/v1', '_blank')
            }}
          >
            Find your token here
          </span>
          <div
            className={`select-none flex rounded items-center overflow-hidden ${
              accessTokenValue.length > 0 ? 'bg-green-600 focus:bg-green-700 focus:outline-none cursor-pointer hover:bg-green-500 duration-300' : 'disabled bg-base-300 cursor-pointer text-white/25'
            } duration-300 text-white justify-between`}
            onClick={() => handleSave()}
          >
            <span className="px-7 py-1">Save</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetupSection
