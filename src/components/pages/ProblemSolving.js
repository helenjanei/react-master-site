import React from 'react';
import ReactCardFlip from 'react-card-flip';
import ProblemCardItem from './ProblemCardItem'
import '../Button.css'
import './problem.css'
import '../Cards.css'

class ProblemSolving extends React.Component  {

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
      
       <h1> Problem Solving</h1>
    </div>

    <div className="cards">
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div   >
                <button className='btn btn--primary' onClick={this.handleClick}>Click here for more</button>
                 <ProblemCardItem src='images/img-15.jpg' text='How to raise the English GCSE attainment of working class boys?'
                label='Shakespeare' />
              </div>
              <div>
                <button className='btn  btn--primary'  onClick={this.handleClick}>Click here for more</button>
              <div className='cards__item cards__item__link'>
                <h4 className='cards__item__text'>How to raise the English GCSE attainment of disengaged male learners?</h4>
                <p className='explanation_text' >Solution</p>
                
                <p className='explanation_text'>Identified that the low national raw marks achieved by students on the Shakespeare Exam made any extra raw marks from this element raise the overall exam grade by more than those achived on any other paper. I achieved student buy-in to the strategy by using my hard data evidence to show why extra time spent by the students on Shakespeare would pay dividends. Developed in-depth resources and writing guides to improve attainment. Employed rigorous testing and improvement, using completion and immediate rewards/feedback to gain buy in from disengaged learners. Exam results showed a 9% improvement in results for the targeted group, raising their achievement above their peers nationally.</p>
                            </div>
                            </div>
            </ReactCardFlip>

<ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <ProblemCardItem src='images/img-9.jpg' text='Use my recipe finder to create your next great meal'
                label='Cook' />
               
              </div>
             
                <div className='cards__item cards__item__link'>
             
                <h4 className='cards__item__text'>How to raise the English GCSE attainment of disengaged male learners?</h4>
                <p className='explanation_text' >Solution</p>
                
                <p className='explanation_text'>Identified that the low national raw marks achieved by students on the Shakespeare Exam made any extra raw marks from this element raise the overall exam grade by more than those achived on any other paper. I achieved student buy-in to the strategy by using my hard data evidence to show why extra time spent by the students on Shakespeare would pay dividends. Developed in-depth resources and writing guides to improve attainment. Employed rigorous testing and improvement, using completion and immediate rewards/feedback to gain buy in from disengaged learners. Exam results showed a 9% improvement in results for the targeted group, raising their achievement above their peers nationally.</p>
                            </div>
      
            </ReactCardFlip>

<ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <ProblemCardItem src='images/img-9.jpg' text='Use my recipe finder to create your next great meal'
                label='Cook' />
               
              </div>
              <div className='problem_card'>
                <p className='problem_text'>Problem: How to train a dog</p>
              
              </div>
            </ReactCardFlip>
</ul>
<ul className='cards__items'>

            <ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <ProblemCardItem src='images/img-9.jpg' text='Use my recipe finder to create your next great meal'
                label='Cook' />
             
              </div>
              <div className='problem_card'>
                <p className='problem_text'>Problem: How to train a dog</p>
               
              </div>
            </ReactCardFlip>

<ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <ProblemCardItem src='images/img-9.jpg' text='Use my recipe finder to create your next great meal'
                label='Cook' />
               
              </div>
              <div className='problem_card'>
                <p className='problem_text'>Problem: How to train a dog</p>
               
              </div>
            </ReactCardFlip>

<ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <ProblemCardItem src='images/img-9.jpg' text='Use my recipe finder to create your next great meal'
                label='Cook' />
               
              </div>
              <div className='problem_card'>
                <p className='problem_text'>Problem: How to train a dog</p>
                
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
export default ProblemSolving