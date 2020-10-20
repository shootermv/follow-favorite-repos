import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ name }) => (
  <Fragment>
    <b>
      <Link to={"/guys"}> Guys </Link>
    </b>
    &#47; <b>{name}</b>
  </Fragment>
)

export default Breadcrumb
