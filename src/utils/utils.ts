const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const getCookie = (cookieName: string) => {
  var name = cookieName + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export const addToFavorite = async (country: any, productID: string) => {
  let fetch = window.fetch.bind(window),
    authentification = getCookie('authorization'),
    wishlistID = null

  const URL = `https://api.nike.com/buy/lists/v1?filter=isDefault(true)&filter=country(${country})`

  const headers = {
    'content-type': 'application/json; charset=UTF-8',
    'authorization': `Bearer ${authentification}`,
  }

  let response = await fetch(URL, { headers })
  let data = await response.json()

  try {
    wishlistID = data.objects[0]['id']
  } catch (error) {
    window.location.replace('/api/setup')
  }

  const randID = uuidv4()

  const atcURL = 'https://api.nike.com/buy/list_items/v1/' + randID
  const payload = {
    country: country,
    productId: productID,
    wishlistId: wishlistID,
  }

  response = await fetch(atcURL, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(payload),
  })
  data = await response.text()

  window.location.replace('https://www.nike.com/' + country + '/cart')
}
