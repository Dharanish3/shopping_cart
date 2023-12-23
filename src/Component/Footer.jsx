import React from 'react'

function Footer() {
  const d = new Date();
let year = d.getFullYear();

  return (
    <>
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; All Rights Reserverd {year} </p></div>
        </footer>
    </>
  )
}

export default Footer