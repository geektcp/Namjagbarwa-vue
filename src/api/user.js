import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: '/vue-element-admin/user/info.json',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-element-admin/user/logout',
//     method: 'post'
//   })
// }

/////////////////////////////////////////////////////////////////////
// export function login(data) {
//   console.log(data)
//   return new Promise(function(resolve){
//       resolve({code: 20000, data: {token: 'admin-token'}});
//     })
// }

// export function getInfo(token) {
//   console.log(token)
//   return new Promise(function(resolve) {
//     setTimeout(function () {
//       resolve({
//         code: 20000,
//         data: {
//           roles: ["admin"],
//           introduction: "I am a super administrator",
//           avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
//           name: "Super Admin"
//         }
//       });
//     }, 1000)
//   })
// }


// export function logout() {
//   return new Promise(function(resolve){
//     resolve({code: 20000, data: 'success'});
//   })
// }


//////////////////////////////////////////////////////
export function login(data) {
  console.log(BASE_URL)
  return request({
    url: '/api/login.json',
    method: 'get',
    data
  })
}

export function getInfo() {
  return request({
    url: '/api/user/info.json',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/api/logout.json',
    method: 'get',
  })
}
