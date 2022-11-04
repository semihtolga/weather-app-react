import React from 'react'

const Main = () => {


  return (
    <section className="main">
      <form>
        <input type="text" placeholder='Seaach for a city' autoFocus />
        <button type='submit'>SUBMIT</button>
        <span className='msg'>error</span>
      </form>
      <div>
        <ul className='cities'></ul>
      </div>
    </section>
    
  )
}

export default Main 