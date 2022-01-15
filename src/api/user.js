import request from '@/utils/request'

/////////////////////////////////////////////////////////////////////
export function loginPromise(data) {
  return new Promise(function(resolve){
      resolve({code: 20000, data: {token: 'admin-token'}});
    })
}

export function getInfoPromise(token) {
  return new Promise(function(resolve) {
    setTimeout(function () {
      resolve({
        code: 20000,
        data: {
          roles: ["admin"],
          introduction: "I am a super administrator",
          avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          name: "Super Admin"
        }
      });
    }, 1000)
  })
}


export function logoutPromise() {
  return new Promise(function(resolve){
    resolve({code: 20000, data: 'success'});
  })
}


//////////////////////////////////////////////////////
export function login(data) {
  return request({
    url: '/api/login',
    method: 'get',
    data
  })
}

export function getInfo() {
  return request({
    url: '/api/user/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/api/logout',
    method: 'get',
  })
}
