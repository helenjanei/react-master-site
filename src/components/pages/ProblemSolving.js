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
      
       <h1 className='problem_solving_h1'> Problem Solving</h1>
    </div>

    <div className="cards">
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div   >
                <button className='btn btn--primary' onClick={this.handleClick}>Click here for more</button>
                 <ProblemCardItem src='images/img-15.jpg' text='How to raise the English GCSE attainment of disengaged boys?'
                label='Achieve' />
              </div>
              <div>
                <button className='btn  btn--primary'  onClick={this.handleClick}>Click here for more</button>
              <div className='cards__item cards__item__link'>
                <h4 className='cards__item__text__2'>How to raise the English GCSE attainment of disengaged male learners?</h4>
           
                
                <p className='explanation_text'>I identified that the low national raw marks achieved by students on the Shakespeare Exam made any extra raw marks from this element raise the overall exam grade by more than those achieved on any other paper. </p>
                <p className='explanation_text'>I achieved student buy-in to the strategy by using my hard data evidence to show why extra time spent by the students on Shakespeare would pay dividends. </p> 
                <p className='explanation_text'>Developed in-depth resources and writing guides to improve attainment. Employed rigorous testing and improvement, using completion and immediate rewards/feedback to gain buy in from disengaged learners. </p>
                <p className='explanation_text'>Exam results showed a 9% improvement in results for the targeted group, raising their achievement above their peers nationally.</p>
                            </div>
                            </div>
            </ReactCardFlip>

<ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <ProblemCardItem src='images/creative/IMG_7160.JPG' text='How to create a bespoke wallpaper within a tight budget?'
                label='Decorate' />
               
              </div>
             
                <div className='cards__item cards__item__link'>
             
                <h4 className='cards__item__text'>'How to create a bespoke wallpaper within a tight budget?'</h4>
              
                
                <p className='explanation_text'>I researched various techniques and ultimately decided upon creating a patchwork wallpaper using individual pages from second hand books.</p> <p className='explanation_text'> I researched and sourced a variety of texts which represented my personality and interests.</p> <p className='explanation_text'>I used over 500 pages in all, and applied each page with a spirit level to ensure consistincy and a professional finish.</p>
                <p className='explanation_text'> The result is epic and makes me happy on a daily basis</p>
                            </div>
      
            </ReactCardFlip>

<ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <ProblemCardItem src='images/NHS.jpg' text='How to get access to NHS services when the waiting list is 18 months long?'
                label='Help' />
               
              </div>

               <div className='cards__item cards__item__link'>
             
                <h4 className='cards__item__text'>How to get access to NHS services when the waiting list is 18 months long?</h4>
           
                
                <p className='explanation_text'>When a family member was faced with an 18 month waiting list to access adult psychiatric services, I determined to find them a quicker way to services</p> <p className='explanation_text'> Following research into options, I became aware of the NHS 'patient's right to chose', which states patients should have a choice over where they are referred to for further treatment. My relative had only been offered the local clinic with the 18 month waiting list.</p> <p className='explanation_text'> I encouraged my relative to raise this with their GP, who did not know of the right to chose and could offer no further choices for the referral.               
                  
              </p>
                <p className='explanation_text'>Faced with this road block I began further research. I discovered that patients can be referred to any NHS clinic or Private Clinic - so long as they have been commissioned by the NHS to carry out the work and are charging NHS prices</p><p className='explanation_text' >I was able to provide my relative with the contact details for a private clinic which met the correct criteria and even had an explanation on their website of how to get your GP to refer to the clinic as an NHS patient</p>
                  <p className='explanation_text' >My relative was seen by the clinic within a week, as opposed to the original 18 month wait.</p>

                            </div>
              
            </ReactCardFlip>
</ul>
<ul className='cards__items'>

            <ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <ProblemCardItem src='images/img-19.jpg' text='Why would a footpath go to nowhere?'
                label='Wonder' />
             
              </div>
                <div className='cards__item cards__item__link'>
             
                <h4 className='cards__item__text'>Why would a footpath go to nowhere?</h4>
            
                
                <p className='explanation_text'>When out for a local walk I noticed a footpath that seemed to go to nowhere. To my mind, its existence raised a question about the path, why was it there? Who used to use it? Why was it so pointless?</p> <p className='explanation_text'> I began by looking at old maps, and established that in 1840 the footpath was in existence, and connected a small cluster of houses with the local 'big hall' garden gate (since closed in)</p> <p className='explanation_text'> Once I had this clue, I began to research the big hall (now a private residence not viewable from the road), then the houses the staff must have come from to use the footpath. I discovered a rich local history of early Yorkshire woolen manufacture, the names and lives of those involved and how they walked the 'pointless' footpath to work and sell to the big house.                  
              </p>
                <p className='explanation_text'>I've since become a member of the local history society and joined the Ramblers campaign to save lost footpaths. </p><p className='explanation_text' >When I walk on a footpath now I'm always wondering why it is there, who used it 100, 200, 500 years ago? Footpaths are living history and they fascinate me.</p>
           

                            </div>
            </ReactCardFlip>

<ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <ProblemCardItem src='images/img-20.jpg' text='How could we make it through year 11 alive?'
                label='Learn' />
               
              </div>
                 <div className='cards__item cards__item__link'>
             
                <h4 className='cards__item__text'>How could we ensure a group of vulnerable learners completed year 11?</h4>
           
                
                <p className='explanation_text'>Every year group is different, unique. This year group were...difficult. Ultimately there were 12 students out of 160 for whom regular school was just not working. They all had high indicators that they were not going to make another year in school without a permanent exclusion or them just refusing to come anymore.</p> <p className='explanation_text'> After extensive research around the legalities of compulsory education, and individual case work with students to exhaust further options, two of us came up with a radical plan.</p> <p className='explanation_text'> For a year those twelve students came and did school from 4-7pm every day. Once the other students had gone home they came in. They didn't have to wear a uniform, we set up a cozy base in the Library; Comfy chairs, computers, separate work spaces, kitchen stocked with tea and coffee and treats. 
                                </p>
                <p className='explanation_text'>The two of us who came up with the plan, and two more colleagues, committed to getting them through year eleven like this. We costed it, we were able to be paid for the overtime as tutors, we phoned most of them up at 3 to get them out of bed. One girl started the year pregnant so we finished as a group of 13, another boy got a court ordered ankle tag for breaking his ASBO. We had to phone his youth offending officer and get permission for him and his tag to be at school after his curfew. We also developed a technique for sticking plasters around his ankle to stop the tag from rubbing.</p><p className='explanation_text' >It was exhausting. Without the padding of other students all 12 got louder. They annoyed each other. They had minimal social skills and all lacked any kind of self regulation. By the end of the year I felt ready to become a hostage negotiator. Nothing could exasperate me now, I had a shield of steel from which I could hide any reaction to their provocations. We got work done. We tracked it and celebrated it, we had birthday teas and got the school nurse in for the single most illuminating sex education lesson I have ever witnessed (she gave us all glow in the dark sperm key rings - it was great) </p>
                  <p className='explanation_text' >Ultimatley they all got 5 GCSEs. They all went on to further learning, even if they didn't last there (no trained hostage negotiators on staff). The money I earned paid for the cleaner I imagined every time they annoyed me. 148 other year 11s got a year without them causing disruption to their GCSE learning. The head teacher took us to a posh west end restaurant as a thankyou after results day. I imagine one day my colleagues and I reuniting and reminiscing about our time in the trenches like old soldiers..."Do you remember that time you had to chase Danny Smith across the playing fields because hed broken into Drama and stolen a wedding dress? And he was wearing the wedding dress whilst you chased him? AH...those were the days..."</p>

                            </div>

            </ReactCardFlip>

<ReactCardFlip isFlipped={this.state.isFlipped}flipSpeedBackToFront={2}
              flipSpeedFrontToBack={2} >
              <div>
                 <ProblemCardItem src='images/img-28.jpg' text='How to prevent a new dress from riding up?'
                label='Fix' />
               
              </div>
                <div className='cards__item cards__item__link'>
             
                <h4 className='cards__item__text'>How to prevent a new dress from riding up?</h4>
           
                
                <p className='explanation_text'>I bought a new dress from eBay. I know. Impulse buy. When it arrived it didn't look anything like the picture, but it was cute. There was only one problem, despite being plenty long and big enough it just. kept. riding. up. </p> <p className='explanation_text'>I was annoyed. I liked the dress, it should be so cute but...so I worried on it for a while. Considered cutting this and sewing that, changing it here...util inspiration.</p> <p className='explanation_text'>I sewed a line of curtain weights into the hem. It doesn't ride up anymore, it remains perfectly weighted around my knees. And I'm ready at a moment's notice for any sudden loss of gravity.
                                </p>
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