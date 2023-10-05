import React from 'react'

const Image = () => {
  return (
    <>
    <form action="/upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="image" multiple/>
        <button type="submit">Upload Images</button>
    </form>
    </>
  )
}

export default Image
