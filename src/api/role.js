import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/api/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/api/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/api/role',
    method: 'get',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/api/role/${id}`,
    method: 'get',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/api/role/${id}`,
    method: 'get'
  })
}
