import React, { Component } from 'react'

export default class FooterComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {
    return (
      //   <div>
      // <footer className='footer'>
      //     <span className='text-muted'>All Rights Reserved @2022 APG's-Kitchen</span>
      // </footer>
      // </div>

      <div>

        <section class="">
          <footer class="text-center text-white" style={{backgroundColor:"#35322d"}}> 

            <div class="container p-4 pb-0">

              <section class="">
                <p class="d-flex justify-content-center align-items-center">
                  <span class="me-3">APGs-Kitchen Admin Home</span>
                </p>
              </section>

            </div>



            <div class="text-center p-3" style={{backgroundColor:"#35322d"}} >
            All Rights Reserved @2022 APG's-Kitchen
            </div>

          </footer>

        </section>

      </div>
    )
  }
}
