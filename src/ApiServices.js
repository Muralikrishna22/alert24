const url = "http://64.227.188.129:8080"



export const healthCheck = () => {
  return fetch(`${url}/ruok`)
  .then(res => res.text())
  .then(res => console.log('res', res))
  .catch(err => console.error(err))
}

export const verifyToken = (token) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json")
  const raw = JSON.stringify({idToken: token})
  const requestOptions = {
    method: "POST",
    headers,
    body: raw
  };

 return fetch(`${url}/auth/verify-token`, requestOptions)
  .then((response) => response.json())
  .then((userResponse) => {
    console.log('userResponse', JSON.stringify(userResponse))
    window.localStorage.setItem("phoneNumber", userResponse.phone_number);
    window.localStorage.setItem("uid", userResponse.uid);
    window.localStorage.setItem("token", userResponse.token);
    // window.localStorage.getItem(key);
  })
}

export const addAddress = (data) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json")
  headers.append("Authorization", `Bearer ${window.localStorage.getItem('token')}`)
  const raw = JSON.stringify({...data})

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow"
  };

  return fetch(`${url}/address/`, requestOptions)
  .then((response) => response.json())
  .catch(err => console.error('err', err))

}

export const addUser = (data) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json")
  headers.append("Authorization", `Bearer ${window.localStorage.getItem('token')}`)
  const firstName = data.firstName
  const lastName = data.lastName
  const email = data.email
  const raw = JSON.stringify({firstName, lastName, email})

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow"
  };

  return fetch(`${url}/user`, requestOptions)
  .then((response) => response.json())
  .catch(err => console.error('err', err))

}

export const getUser = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json")
  headers.append("Authorization", `Bearer ${window.localStorage.getItem('token')}`)

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow"
  };

  return fetch(`${url}/user`, requestOptions)
  .then((response) => response.json())
  .catch(err => console.error('err', err))

}

export const getCurrentAddress = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json")
  headers.append("Authorization", `Bearer ${window.localStorage.getItem('token')}`)

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow"
  };

  return fetch(`${url}/address/`, requestOptions)
  .then((response) => response.json())
  .catch(err => console.error('err', err))

}

export const addUsers = (data) => {
//   [
//     {
//         "fullName": "Megha K Sabu",
//         "phoneNumber": "+917293820216",
//         "relation": "wife"
//     }
// ]
// as an array of objects
const headers = new Headers();
  headers.append("Content-Type", "application/json")
  headers.append("Authorization", `Bearer ${window.localStorage.getItem('token')}`)
  const raw = JSON.stringify({...data})

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow"
  };

  return fetch(`${url}/user/add-users`, requestOptions)
  .then((response) => response.json())
  .catch(err => console.error('err', err))
}

export const listUsers = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json")
  headers.append("Authorization", `Bearer ${window.localStorage.getItem('token')}`)

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow"
  };

  return fetch(`${url}/user/list-users/`, requestOptions)
  .then((response) => response.json())
  .catch(err => console.error('err', err))

}