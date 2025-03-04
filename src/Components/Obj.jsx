import React, { useState } from 'react'



const array = [{
    id:1,
    name:'Tushar',
    age:"22"
},
{
    id:2,
    name:"Yash",
    age:"26"
},
{
    id:3,
    name:"Shubham",
    age:"27"
}

]

function Obj() {

 const [age, setAge] = useState(null)

 const ageShow = (id) =>{
    setAge(prev =>(prev === id ? null :id))
 }

  return (
    <div className='border-l-orange-50  text-4xl'>
        {array.map((item) =>(
          <div key={item} onClick={()=>ageShow(item.id)}>
            <h1>{item.name}</h1>
           { age === item.id && <p>{item.age}</p>}

          </div>
        )

        )

        }
      
    </div>
  )
}

export default Obj
