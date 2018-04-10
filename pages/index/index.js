const fetch = require("../../utils/fetch.js")
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slides: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true,
    categories:[]
  },
  onLoad:function(){
    fetch('slides').then(res =>{
      this.setData({ 'slides': res.data })
    })
    fetch('categories').then(res =>{
      this.setData({'categories':res.data})
    })
  }
})
