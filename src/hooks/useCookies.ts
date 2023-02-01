import Cookies from 'js-cookie'

const useCookies = () => {
  const setCookie = (key: string, value: string) => {
    Cookies.set(key, value)
  }

  const getCookie = (key: string) => {
    return Cookies.get(key)
  }

  const removeCookie = (key: string) => {
    Cookies.remove(key)
  }

  return {
    setCookie,
    getCookie,
    removeCookie,
  }
}

export default useCookies
