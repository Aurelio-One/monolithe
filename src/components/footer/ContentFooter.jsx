import React from 'react'
import { dsnCN } from '../../hooks/helper'

function ContentFooter({ className, ...restProps }) {
  return (
    <div
      className={dsnCN('col-menu', className)}
      {...restProps}
    >
      <p>+33 618294420</p>
      <p className='mt-2'>
        <a href='0#'> contact@agence-monolithe.com</a>
      </p>
    </div>
  )
}

export default ContentFooter
