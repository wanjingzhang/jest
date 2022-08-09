export default class NewBaoJian{
  gongzhu(number){
    this.user = number == 1?'大脚':'Celine'
  }

  anjiao(){
    this.fuwu = this.user + '走进房间为你足疗'
  }

  anmo(){
    this.fuwu = this.user + '走进房间为你按摩'
  }

  taishi(){
    this.fuwu = this.user + '走进房间为你_泰式按摩'
  }

  gongting(){
    this.fuwu = this.user + '走进房间为你_宫廷按摩'
  }

}