import React from 'react'

const Contact = () => {
    return <div className="contact">

    <main>
        <h1>Contact us</h1>
        <form >

            <div>
                <label >Name</label>
                <input type="text" required placeholder='your name'/>
            </div>
            <div>
                <label >Email</label>
                <input type="email" required placeholder='yourmail@gmail.com'/>
            </div>
            <div>
                <label >Message</label>
                <input type="text" required placeholder='Give your description'/>
            </div>

            <button type='submit' >Submit</button>

        </form>
    </main>

    </div>
}

export default Contact