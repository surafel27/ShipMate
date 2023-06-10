import React from 'react';
import './Index.css'
const Subscribe = () => {
    return (
        <div className='container-sub'>
            <div className='content-sub'>
                <form className='form-sub'>
                    <h2>Get In Touch!</h2>
                    <input placeholder='Provide Your Email' type="text"></input>
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    )
}
export default Subscribe;