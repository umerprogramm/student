import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Dashboard() {
  return (
    <div>
      <h1>dashboard</h1>
      <ul>
        <li>order</li>
        <li>delvery</li>
        <Link to="/addproduct">
        <li>add product</li>
        </Link>
      </ul>
    </div>
  )
}
