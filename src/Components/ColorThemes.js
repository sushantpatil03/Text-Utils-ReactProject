import React from 'react'

export default function ColorThemes() {
    const handleTheme = (color)=>{
        console.log(color)
    }
    const handleOnClear = ()=>{
        console.log("hello")
    }
  return (
    <>
    {/* <div className="btn-group mx-3" role="group" aria-label="Basic mixed styles example">
        <button type="button" onClick={handleTheme("danger")} className="btn btn-danger px-4 py-3"></button>
        <button type="button" onClick={handleTheme("primavcdfvxcry")} className="btn btn-primary px-4 py-3"></button>
        <button type="button" onClick={handleTheme("success")} className="btn btn-success px-4 py-3"></button>
    </div> */}
    <div>
    <button type="button" onClick={handleTheme("danger")} className="btn btn-danger px-4 py-3">gfdhjkjf</button>
    <button type="button" onClick={handleTheme("primavcdfvxcry")} className="btn btn-primary px-4 py-3">rs</button>
    <button type="button" onClick={handleTheme("success")} className="btn btn-success px-4 py-3">fscx</button>
    <button type="button" className={`btn btn-primary mx-3`} onClick={handleOnClear}>Clear All</button>
    </div>
    </>
  )
}
