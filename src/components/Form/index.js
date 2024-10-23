import {Component} from 'react'
import './index.css'

class Form extends Component{
    state={
        name:"",
        email:"",
        message:"",
        successMessage:""
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        })
      }

      handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
          successMessage: 'Form submitted successfully!',
          name: '',
          email: '',
          message: '',
        });
      };


    render(){
        const{name,email,message,successMessage}=this.state
        return(
          <div className="form-container">
            <h2>Fill the Form</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
    
            {this.state.successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </div>
        )
    }
}
export default Form