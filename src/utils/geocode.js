const request=require('request')

const geocode=(address,callback)=>{
  const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibW9udTE5a3IiLCJhIjoiY2s2OWJ0YnRvMGU5cjNucWplaWllY3pmZyJ9.Z9qgvyonwu8A7oJ-ICTp-Q&limit=1'
  request({url,json:true},(error,{body}={})=>{
    if (error){
      callback('Unable to Connect to location service',undefined)
    } else if(body.features.length===0){
      callback('unable to find location. Try another Search',undefined)
    }else{
      const{features}=body
      callback(undefined,{
        longitude:features[0].center[0],
        latitude:features[0].center[1],
        location:features[0].place_name
      })
    }
  })
}

module.exports=geocode