import { faWeight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const styleH1 = {
  fontSize: 40,
  color: '#4a54f1',
  textAlign: 'center',
  paddingTop: '100px',
  fontWeight: '800'
}
function ItemListContainer(props) {
  return (
    <div><h1 style={styleH1}>{props.greeting}
        </h1></div>
  )
}

export default ItemListContainer