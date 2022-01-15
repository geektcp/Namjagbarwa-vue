import request from '@/utils/request'

export function searchUser(name) {
    return request({
        url: '/api/search/user',
        method: 'get',
        params: {name}
    })
}

export function transactionList(query) {
  return request({
    url: '/api/transaction/list',
    method: 'get',
    params: query
  })
}


// export function transactionList(query) {
//     console.log(query)
//     return new Promise(function (resolve) {
//
//         resolve({
//             code: 20000, data: {
//                 total: 20,
//                 items: [{
//                     order_no: "dBDb1ecB-aD3e-D3EF-465D-Ce3b29AF1518",
//                     timestamp: 1603239145173,
//                     username: "Gary Lewis",
//                     price: 10981,
//                     status: "success"
//                 }, {
//                     order_no: "6cfAb6AE-dBE1-77cF-9f6b-EfFB9D15D3af",
//                     timestamp: 1603239145173,
//                     username: "Joseph Walker",
//                     price: 8651,
//                     status: "success"
//                 }, {
//                     order_no: "F1b1b9cF-270e-BbD1-fEC6-CcA0dC34fDFe",
//                     timestamp: 1603239145173,
//                     username: "James Robinson",
//                     price: 3244.68,
//                     status: "pending"
//                 }, {
//                     order_no: "0EbAc14B-8953-C101-b9Ce-Fc09B49abb1E",
//                     timestamp: 1603239145173,
//                     username: "Jessica Williams",
//                     price: 14830,
//                     status: "pending"
//                 }, {
//                     order_no: "547e0cd1-3932-e96b-866D-C8fbfCEfdCe7",
//                     timestamp: 1603239145173,
//                     username: "John Perez",
//                     price: 10782.7,
//                     status: "pending"
//                 }, {
//                     order_no: "5BAeec9f-8E3f-5bF4-767c-4780c42e6cCE",
//                     timestamp: 1603239145173,
//                     username: "Joseph Johnson",
//                     price: 9793.4,
//                     status: "success"
//                 }, {
//                     order_no: "fBA0bc22-FcA1-409B-9F78-Ec955ef8dAd9",
//                     timestamp: 1603239145173,
//                     username: "William Garcia",
//                     price: 12079.5,
//                     status: "success"
//                 }, {
//                     order_no: "14fAeCb4-FdE4-f69e-2fFa-Eae4EdA58fCF",
//                     timestamp: 1603239145173,
//                     username: "Daniel Thomas",
//                     price: 4201.5,
//                     status: "success"
//                 }, {
//                     order_no: "0151d2aC-49D1-cE2B-2F1d-6dCb1df0ccCd",
//                     timestamp: 1603239145173,
//                     username: "Jennifer White",
//                     price: 10729.58,
//                     status: "pending"
//                 }, {
//                     order_no: "BbB36c16-6BaB-346f-741e-F0043e9DC8ec",
//                     timestamp: 1603239145173,
//                     username: "James Jackson",
//                     price: 2938.6,
//                     status: "success"
//                 }, {
//                     order_no: "4bBCcaCd-abbF-Cc85-c9CC-5569738Da3FD",
//                     timestamp: 1603239145173,
//                     username: "Christopher Lee",
//                     price: 12425.9,
//                     status: "success"
//                 }, {
//                     order_no: "b1c8B7A1-53A1-1ce7-2bea-64AD5bE4eeC6",
//                     timestamp: 1603239145173,
//                     username: "Matthew Johnson",
//                     price: 10084.9,
//                     status: "success"
//                 }, {
//                     order_no: "bDD8b4Ce-5AF2-EDEE-1d6B-4d753AE42fA8",
//                     timestamp: 1603239145173,
//                     username: "Angela Lee",
//                     price: 10760.1,
//                     status: "pending"
//                 }, {
//                     order_no: "81AbcC2b-FDF4-2130-F8Df-Ffe6a2dD8254",
//                     timestamp: 1603239145173,
//                     username: "George Lewis",
//                     price: 2622.3,
//                     status: "success"
//                 }, {
//                     order_no: "c22fDf31-F4Fc-ef8d-8f9d-8DcBcBEffC21",
//                     timestamp: 1603239145173,
//                     username: "Donald Thompson",
//                     price: 1465,
//                     status: "success"
//                 }, {
//                     order_no: "D7686203-A4c3-e936-1Cd9-AE95eDb06CcE",
//                     timestamp: 1603239145173,
//                     username: "Scott Rodriguez",
//                     price: 1398,
//                     status: "success"
//                 }, {
//                     order_no: "dfcAbA7A-eB23-Bcb3-E42E-6D85dd491A40",
//                     timestamp: 1603239145173,
//                     username: "Carol Hall",
//                     price: 2747.88,
//                     status: "pending"
//                 }, {
//                     order_no: "fc6E84ed-404a-46fc-D3bc-F9575c9E364A",
//                     timestamp: 1603239145173,
//                     username: "Ronald Davis",
//                     price: 7768,
//                     status: "pending"
//                 }, {
//                     order_no: "C2Ae214d-b7ae-4Bcd-2dAE-1ba1377aeEEE",
//                     timestamp: 1603239145173,
//                     username: "Linda Hernandez",
//                     price: 6027,
//                     status: "pending"
//                 }, {
//                     order_no: "f8b7BE36-3d9f-21e7-847A-Ad849F826Fe1",
//                     timestamp: 1603239145173,
//                     username: "Laura Young",
//                     price: 5406.8,
//                     status: "pending"
//                 }]
//             }
//         });
//     })
// }

