import React, { Component } from 'react'

class HeaderComponent extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    render() {

    return (
        <div>
         <header>
             <nav class="navbar navbar-dark bg-dark " >
                 <div class='navbar-brand'>
                    Admin
                 </div>
             </nav>
         </header>
        </div>
    )
  }
}

export default HeaderComponent
