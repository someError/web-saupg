import React from 'react'
import classnames from 'classnames'

import './styles.css'

const AccordionTable = (props) => {
  const { className, children } = props

  return (
    <table className={classnames('c-accordion-table', className)}>
      <tbody>
        { children }
      </tbody>
    </table>
  )
}

export default AccordionTable
