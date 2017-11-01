import React from "react"
import {Link} from "react-router"

class Form extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      image: '',
      ratings: '',
      reviews: ''

    };
    this.reset = this.state;
    
  }

  onSubmit(e){
    e.preventDefault();
    console.log("name",this.state.name);
    console.log("lcoation",this.state.location);
    console.log("image",this.state.image);
    console.log("review",this.state.reviews);
    console.log("raing",this.state.ratings);
    helpers.saveApple({
    "name":this.state.name,
    "location":this.state.location,
    "image":this.state.image,
    "review":this.state.reviews,
    "ratings":this.state.ratings
    }).then(function(response){
      console.log("DATA: ",response);
    })
  
    this.setState(this.reset)
  } 

   
  render(){
    return(
      <div className="addcontainer">
      <div className="row">
              <div className="col l1"></div>
              <div className="col l10">
                    <h1>Add Yourself and Find out What People think of YOu</h1>
                       <label>Add Yourself with</label>
                      <ul className="social">

                      <li><div className="btn">facebook</div></li>
                      <li><div className="btn">instagram</div></li>
                      <li><div className="btn">linkedin</div></li>
                      <Link to={"/manual"}><li><div className="btn">add manually</div></li></Link>
                      </ul>

                      </div>
            <div className="col l10"></div>
      </div>
    <div className="form">
             <div className="col l6 font title">Search Apples before you add them. They might already exist!</div>

       <form className='column' onSubmit={this.handleSubmit}>
       <div className="row">

       <div className="col l3"></div>
        <input className="col l6"
          id='name'
          placeholder='Enter First and Last Name of Potato'
          type='text'
          value={this.state.name}
          autoComplete='off'
          onChange={e => this.setState({ name: e.target.value})}
        />
        <div className="col l3"></div>
        </div>
        
        
        <div className="row">
        <div className="col l3"></div>
        <input id="imageUpload" className="col l6"
          placeholder='Enter image link of Potato'
          type='text'
          value={this.state.image}
          autoComplete='off'
          onChange={e => this.setState({ image: e.target.value})}
        />
        <div className="col l3"></div>
        </div>
        <div className="row">
        <div className="col l3"></div>
        <select className="col l6 browser-default"
        id='location'
          placeholder='Enter Location of Potato'
          type='text'
          value={this.state.location}
          autoComplete='off'
          onChange={e => this.setState({ location: e.target.value})}>
  <option value="">Choose Potato Location</option>
  <option value="AL">Alabama</option>
  <option value="AK">Alaska</option>
  <option value="AZ">Arizona</option>
  <option value="AR">Arkansas</option>
  <option value="CA">California</option>
  <option value="CO">Colorado</option>
  <option value="CT">Connecticut</option>
  <option value="DE">Delaware</option>
  <option value="DC">District Of Columbia</option>
  <option value="FL">Florida</option>
  <option value="GA">Georgia</option>
  <option value="HI">Hawaii</option>
  <option value="ID">Idaho</option>
  <option value="IL">Illinois</option>
  <option value="IN">Indiana</option>
  <option value="IA">Iowa</option>
  <option value="KS">Kansas</option>
  <option value="KY">Kentucky</option>
  <option value="LA">Louisiana</option>
  <option value="ME">Maine</option>
  <option value="MD">Maryland</option>
  <option value="MA">Massachusetts</option>
  <option value="MI">Michigan</option>
  <option value="MN">Minnesota</option>
  <option value="MS">Mississippi</option>
  <option value="MO">Missouri</option>
  <option value="MT">Montana</option>
  <option value="NE">Nebraska</option>
  <option value="NV">Nevada</option>
  <option value="NH">New Hampshire</option>
  <option value="NJ">New Jersey</option>
  <option value="NM">New Mexico</option>
  <option value="NY">New York</option>
  <option value="NC">North Carolina</option>
  <option value="ND">North Dakota</option>
  <option value="OH">Ohio</option>
  <option value="OK">Oklahoma</option>
  <option value="OR">Oregon</option>
  <option value="PA">Pennsylvania</option>
  <option value="RI">Rhode Island</option>
  <option value="SC">South Carolina</option>
  <option value="SD">South Dakota</option>
  <option value="TN">Tennessee</option>
  <option value="TX">Texas</option>
  <option value="UT">Utah</option>
  <option value="VT">Vermont</option>
  <option value="VA">Virginia</option>
  <option value="WA">Washington</option>
  <option value="WV">West Virginia</option>
  <option value="WI">Wisconsin</option>
  <option value="WY">Wyoming</option>
      </select>
      <div className="col l3"></div>
        </div>
        <div className="row">
        <div className="col l3"></div>
         <p className="range-field col l6">
         <label>Rate this Potato</label>
        <input 
        value={this.state.rating}
        onChange={e => this.setState({ ratings: e.target.value})}

        placeholder="Rate this Potato" type="range" id="test5" min="0" max="100" />
         </p>
         <div className="col l3"></div>
        </div>
        <div className="row">
        <div className="col l3"></div>
        <textarea
          className="materialize-textarea col l6"
          id='review'
          placeholder='Give this Apple their first review!'
          type='text'
          value={this.state.reviews}
          autoComplete='off'
          onChange={e => this.setState({ reviews: e.target.value})}
        />
        <div className="col l3"></div>
        
         </div>
        <div className="row">
        <div className="col l1"></div>
              <div className="col l10">
        <button
          className='btn'
          type='submit'
          onClick={e => this.onSubmit(e)}>
            Add Apple
        </button>
        </div>
        <div className="col l1"></div>
        </div>
       

          </form>
      </div>
  </div>
    )
  }
}
  

export default Form;