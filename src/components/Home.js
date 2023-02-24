import React from 'react'
import ItemList from './ItemList'
function Home({data}) {
  return (
    <div>
      {data.map((item,index)=>(
        <div key={index}>
          <ItemList item={item} id={index}/>
        </div>
      ))}
    </div>
  )
}

export default Home