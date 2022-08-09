function baojian1(amount){
  return amount>300?"至尊服务":"普通服务"
}

function baojian2(amount){
  return amount>2000?"双人服务":"单人服务"
}

module.exports = {
  baojian1,
  baojian2
}