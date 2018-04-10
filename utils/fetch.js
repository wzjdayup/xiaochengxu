
const fetch = (url,data) =>{
  return new Promise((resolve, reject) => {
    wx.request({
      url: `http://locally.uieee.com/${url}`,
      header:{
        'Content-Type':'json'
      },
      data:data,
      success:resolve,
      fail:reject
    })
  })
}

module.exports = fetch