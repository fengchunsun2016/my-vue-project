/**
 * Created by feng on 2018/6/25.
 */

import axios from 'axios';


//应该从store中获取token和userId
let {token , userId} = {token:'213121',userId:'654564987987'};
let baseURL = 'https://www.easy-mock.com/mock/5ab9c247fe62cc6badfbd32b/geralt';

let headers = {
  token,
  userId
};


let get = function ({url,params}) {

  return axios.get(baseURL+url,{
    params,
    timeout:2000,
    headers
  })
};


let post = function ({url,data}) {
  return axios.post(baseURL+url,{
    data,
    timeout:2000,
    headers
  })
};


export {
  get,
  post
}





















