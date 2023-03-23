import React from 'react'

function Header({number,arttir,data, azalt}) {
    console.log("Header Component re-rendering")
  return (
    <>
        <div>Header - {number}</div>
        <code>{JSON.stringify(data)}</code>
        <button onClick={arttir}>Number +1</button>
        <button onClick={azalt}>Number -1</button>
    </>
    
  )
}

export default React.memo(Header)