import request from 'superagent'

export function sendMessage (data) {

  request
    .post('http://localhost:4000/messages')
    .send(data)
    .then()

  return { type: 'MESSAGE_SENT' }
}

export function sendUser (data) {

  request
    .post('http://localhost:4000/users')
    .send(data)
    .then()

  return { type: 'USER_SENT' }
}


const baseUrl = 'http://localhost:4000'

const loginSuccess = jwt => ({
    type: 'LOGIN_SUCCESS',
    jwt
})

export const login = (email, password) => dispatch => {
    request
        .post(`${baseUrl}/logins`)
        .send({ email, password })
        .then(response => {
            dispatch(loginSuccess(response.body.jwt))
        })
        .catch(console.error)
}
