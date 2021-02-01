const BACK_AVAILABLE = ( process.env.REACT_APP_BACK_AVAILABLE === 'true' ? true : false )
const SESSION_TOKEN = process.env.REACT_APP_BACK_SESSION_TOKEN
const BACK_HOST_NAME = process.env.REACT_APP_BACK_API_HOST_NAME
              
const doFetch = async (queryString,methodValue,params) => {
  if (!BACK_AVAILABLE) {
    return {
      status:false, msg:'Backend not Available.', data:{}
    }
  }
  return fetch(BACK_HOST_NAME+queryString, {
    method: methodValue,
    headers: {
      'Authorization':`Token token=${SESSION_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: (params ? JSON.stringify(params) : null)
  }).then((response) => {
      if (response.status !== 200) {
        return false
      } else {
        return response.json()
      }
  }).then((responseData) => {
    if (!responseData) {
      return {}
    } else {
      return responseData
    }
  })
}

/* Mails */
export const sendJoinEmail = async (mailParams) => {
  const queryString = `join_mail`
  const methodValue = 'POST'
  const params = mailParams
  return await doFetch(queryString, methodValue, params)
}
