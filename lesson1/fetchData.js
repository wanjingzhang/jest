import axios from 'axios'

export const fetchData = (fn)=>{
  axios.get('https://crm.11rem.com/newdashboard/Api/DashboardApi.ashx?method=UserInfo&territoryId=327').then((reponse) =>{
    fn(reponse.data)
  })
}

export const fetchData2 = ()=>{
  // return 或 await
  return axios.get('https://crm.11rem.com/newdashboard/Api/DashboardApi.ashx?method=UserInfo&territoryId=238')
}
 
// catch异常如何捕获测试用例
export const fetchData3 = ()=>{
  return axios.get('https://crm.11rem.com/newdashboard/Api/DashboardApi_Error.ashx?method=UserInfo&territoryId=238')
}

export const fetchData4 = ()=>{
  return axios.get('https://crm.11rem.com/newdashboard/Api/DashboardApi.ashx?method=UserInfo&territoryId=32227')
}

