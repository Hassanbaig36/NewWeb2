import React, { Component } from 'react'

export default class Text extends Component {
  render() {
    return (
      <div className='text'>
        <h4 className='h4'>Are you seeking a digital agency with the best web design and development portfolio?</h4>
        <p className='p'>We have been lucky enough to have incredibly talented companies choose us to devise and cement their digital presence within the industry. Through a lot <br/>of trial and error and quality assurance, we have built projects that yield profitable results.</p>
        <style jsx>{`
        .text {
            text-align: center;
          margin: 50px;
      
    
        }
        .h4{
            background: -webkit-linear-gradient(360deg, var(--bg-color-1) 38%, var(--bg-color-2) 100%, var(--bg-color-1)100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: var(--heading-font);
        }
        .p{
          color:#000!important;
        }
        
      `}</style>
      </div>
    )
  }
}
