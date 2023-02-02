import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useApi from '../hooks/useApi'
import useCookies from '../hooks/useCookies'
import { IStoreList } from '../types/storelist'

interface IStoreListProps {}

const storeList: IStoreList[] = [
  {
    name: 'Webstore',
  },
  {
    name: 'NikeApp',
  },
  {
    name: 'SNKRS',
  },
  {
    name: 'ATC',
    favorite: true,
  },
  {
    name: 'GOAT',
    secondary: true,
  },
  {
    name: 'StockX',
    secondary: true,
  },
]

const StoreList: FC<IStoreListProps> = ({}): JSX.Element => {
  const params = useParams()
  const { getCookie } = useCookies()
  const { call, rawResponse } = useApi({
    method: 'POST',
  })

  const handleClick = async (store: IStoreList) => {
    const response = await call({
      url: `/id/${ params.id}`,
      params: {
        type: store.name.toLowerCase(),
      },
      data: {
        type: store.name.toLowerCase(),
      },
    })
    processResponse(response, store)
  }

  useEffect(() => {
    if (rawResponse) {
      console.log(rawResponse)
      if(rawResponse && rawResponse.data.message){
        console.log('location', `${rawResponse.data.message}`);
        // @ts-ignore
        window.location = `${rawResponse.data.message}`
      }
    }
  }, [rawResponse])

  const processResponse = (response: any, store: IStoreList) => {
    console.log(rawResponse, store)
  }


  return (
      <div className="grid gap-4 grid-cols-2 grid-rows-2 md:grid-cols-2 md:grid-rows-2 md:mb-10">
        {storeList.map((store: IStoreList, index: number) => {
          return !store.secondary ? (
              <div key={index} onClick={() => handleClick(store)} className="flex items-center overflow-hidden rounded bg-green-600 focus:bg-green-700 focus:outline-none cursor-pointer hover:bg-green-500 duration-300 text-white justify-between">
                <span className="px-5 py-3 text-center w-full">{store.name} ⇛</span>
              </div>
          ) : (
              <div key={index} onClick={() => handleClick(store)} className="flex items-center overflow-hidden rounded bg-green-600 bg-opacity-50 focus:bg-green-900 focus:outline-none cursor-pointer hover:bg-green-700 duration-300 text-white justify-between">
                <span className="px-5 py-3 text-center w-full">{store.name} ⇛</span>
              </div>
          )
        })}
      </div>
  )
}

export default StoreList
