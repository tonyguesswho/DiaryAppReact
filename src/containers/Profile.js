import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signout }from '../actions/authAction';


 class Profile extends Component {
    logout = () => {
        signout()

      }
  render() {
   return(
    <div class="bg body">
    <header class="header2">

        <nav>
            <ul class="nav nav2">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="#" id="logout">Sign Out</a>
                </li>

            </ul>

        </nav>

    </header>
    <section class="profile">
        <div class="bigbox">
            <div class="box card span21 span2-center">
                <h2 id="username">Hello Anthony</h2>
                <h4>Total Number of Entries</h4>
                <p id="totalEntry"></p>


                <a href="add_entry.html" class="ebtn ebtn-filled">Add Entry</a>
                <a href="entries.html" class="ebtn ebtn-transparent">My Diary</a>
            </div>
            </div>
    </section>
</div>
   )
  }
}
export default connect(
    null,
    { signout }
  )(Profile);
