import {FC, useEffect} from 'react'
import {useParams, useSearchParams} from "react-router-dom";

const Callback: FC = (): JSX.Element => {
    const [searchParams] = useSearchParams()
    const responseType = searchParams.get('response_type');
    const scope = searchParams.get('scope');
    const code = searchParams.get('code');
    useEffect(() => {
        console.log("in call back component", {
            responseType,
            scope
        })
    }, [])
  return (
    <div className="flex flex-col mb-5 bg-transparent items-center justify-center gap-2 w-full text-sm md:text-md">
      <h1>Code is: {code}</h1>
      <h1>responseType is: {responseType}</h1>
      <h1>scope is: {scope}</h1>
    </div>
  )
}

export default Callback
