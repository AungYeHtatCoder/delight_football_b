import React from 'react'

export default function SmallSpinner() {
  return (
    <>
        <div className="spinner-border spinner-border-sm me-2" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </>
  )
}
