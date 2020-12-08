import React from 'react';
import ReactCardFlip from 'react-card-flip';
import CardItem from '../CardItem'
import '../Button.css'
import './problem.css'
import '../Cards.css'

class ProblemCardItem extends React.Component  {

constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return ( 
  
  <>
  
    <div className='problem_solving'>
      <h1>Problem Solving</h1>
    </div>

    <div className="cards">
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div   >
                 <CardItem src='images/img-9.jpg' text='How to raise the English GCSE attainment of working class boys?'
                label='Shakespeare' />
                <button className='btn btn--primary' onClick={this.handleClick}>Click here for more</button>
              </div>
              <div className='problem_card'>
                <h4 className='cards__item__text'>How to raise the English GCSE attainment of working class boys?</h4>
                <p className='explanation_text' >Solutions</p>
                <li>idea one</li><li>two</li><li>three</li><li>four</li>
                <button className='btn  btn--primary'  onClick={this.handleClick}>Click here for more</button>
              </div>
            </ReactCardFlip>

<ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <CardItem src='images/img-9.jpg' text='Use my recipe finder to create your next great meal'
                label='Cook' />
                <button className='btn btn--primary' onClick={this.handleClick}>Click here for more</button>
              </div>
              <div className='problem_card'>
                <p className='problem_text'>Problem: How to train a dog</p>
                <button className='btn  btn--primary'  onClick={this.handleClick}>Click here for more</button>
              </div>
            </ReactCardFlip>

<ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <CardItem src='images/img-9.jpg' text='Use my recipe finder to create your next great meal'
                label='Cook' />
                <button className='btn btn--primary' onClick={this.handleClick}>Click here for more</button>
              </div>
              <div className='problem_card'>
                <p className='problem_text'>Problem: How to train a dog</p>
                <button className='btn  btn--primary'  onClick={this.handleClick}>Click here for more</button>
              </div>
            </ReactCardFlip>
</ul>
<ul className='cards__items'>

            <ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <CardItem src='images/img-9.jpg' text='Use my recipe finder to create your next great meal'
                label='Cook' />
                <button className='btn btn--primary' onClick={this.handleClick}>Click here for more</button>
              </div>
              <div className='problem_card'>
                <p className='problem_text'>Problem: How to train a dog</p>
                <button className='btn  btn--primary'  onClick={this.handleClick}>Click here for more</button>
              </div>
            </ReactCardFlip>



<ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <CardItem src='images/img-9.jpg' text='Use my recipe finder to create your next great meal'
                label='Cook' />
                <button className='btn btn--primary' onClick={this.handleClick}>Click here for more</button>
              </div>
              <div className='problem_card'>
                <p className='problem_text'>Problem: How to train a dog</p>
                <button className='btn  btn--primary'  onClick={this.handleClick}>Click here for more</button>
              </div>
            </ReactCardFlip>

<ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <CardItem src='images/img-9.jpg' text='Use my recipe finder to create your next great meal'
                label='Cook' />
                <button className='btn btn--primary' onClick={this.handleClick}>Click here for more</button>
              </div>
              <div className='problem_card'>
                <p className='problem_text'>Problem: How to train a dog</p>
                <button className='btn  btn--primary'  onClick={this.handleClick}>Click here for more</button>
              </div>
            </ReactCardFlip>


          </ul>
        </div>
      </div>
    </div>

  </>
    );
  }
}
export default ProblemCardItem