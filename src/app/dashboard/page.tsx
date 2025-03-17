import React from 'react'
import { notFound } from 'next/navigation'

export default function page() {
  notFound()
  return (
    <div className='bg-red-500'>
      dashboard page
    </div>
  )
}
