const Mock  =require('mockjs');
const Data =[];
for(let i = 0;i<10;i++){
  Data.push({
    title:Mock.Random.ctitle(4),
    count:0,
    mone:15,
    img:Mock.Random.image('100x100',Mock.Random.color()),
    conent:Mock.Random.title(),
  })
}
module.exports={
  Data
}