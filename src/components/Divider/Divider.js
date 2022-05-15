import React from 'react'

export default function Divider(props) {
  const height = props.height;
  return (
    <div data-scroll-section style={{height: `${height}px`}}></div>
  )
}
