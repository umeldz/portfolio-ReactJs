import React,{Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from "./assets/profile.jpg"

class App extends Component {
    
    state = {displayBio: false};
    
  
    /*constructor(){
        super();
        this.state = {displayBio:false}
        console.log('this constructor', this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }*/

    toggleDisplayBio= () =>{
        this.setState({displayBio:!this.state.displayBio});   // setState re-calls render method!
    }

    render(){
      
        return(
            <div> 
                <img src={profile} alt='Uriel Melendez' className='profile'/>
                <h1>Hello</h1>
                <p>My name is Uriel, I'm a software engineer</p>
                <p>I'm always going forward in any project I work!</p>
                { 
                 this.state.displayBio ? (
                    <div>
                        <p>I live in Guadalajara</p>
                        <p>My favorite programming lenguage is Java</p>
                        <p>Besides coding, I love playing soccer</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                      </div>
                ) : (
                   <div>
                       <button onClick={this.toggleDisplayBio}>Read more</button>
                   </div>
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}

export default App;