import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem, Button } from 'react-bootstrap';
import "./index.css";



class Paranormal extends React.Component{
    render() {
      return (
        <div>
          <title>Paranormal Stories</title>
          <div className="container">
          </div>

          <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">Home</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
                  <NavDropdown eventKey={3} title="Stories" id="basic-nav-dropdown">
                <MenuItem href = "/creepy" eventKey={3.1}> Creepypasta </MenuItem>
                <MenuItem href = "/urban" eventKey={3.2}>Urban Legends</MenuItem>
                <MenuItem href = "/paranormal" eventKey={3.3}>Paranormal Stories</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="/add">
                Add A Story
              </NavItem>
              <NavItem eventKey={1} href="/contact">
                Contact Us
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
          
          
          <h1>1. The Cell Phone</h1>
          <p className="text-justify">A couple of months ago, my friend’s cousin (a single mother) bought a new cell phone. After a long day of work, she came home, placed her phone on the counter, and went watch to TV; her son came to her and asked if he could play with her new phone. She told him not to call anyone or mess with text messages, and he agreed.
            At around 11:20, she was drowsy, so she decided to tuck her son in and go to bed. She walked to his room and saw that he wasn’t there. She then ran over to her room to find him sleeping on her bed with the phone in his hand.
            Relieved, she picked her phone back up from his hand to inspect it. Browsing through it, she noticed only minor changes such as a new background, banner, etc., but then she opened up her saved pictures. She began deleting the pictures he had taken, until only one new picture remained.
            When she first saw it, she was in disbelief. It was her son sleeping on her bed, but the picture was taken by someone else above him... and it showed the left half of an elderly woman’s face.</p>
         
          <img src="images/images11.jpg" className="img-fluid" alt="Responsive image" />
          
          
          
          <hr />
          
          
          
          <h1>2. Ghost Bro</h1>
          <p className="text-justify">My house was built in 1904. It is a single family home, wood frame setting on a concrete block foundation. I have been living here for about 12 years. Of all the weird things that my siblings and me have seen or heard in this house this one event is my favorite. This happened to my brother. About ten years ago my brother and his best friends had started a garage band playing mostly “Spanish rock,” alternative music but in Spanish. His friends could only get together on Sunday afternoons. They would practice into the early evening, and they would usually call it quits by 8 pm. This was the time I usually showed up and went to bed, cause I worked the graveyard shift.
            This happened in late fall, so the days were getting shorter, they had just finished a long session when the decision to head to someone else house came about. My brother handed his car keys to his buddy so they could load up the equipment. Everyone had filed out of the basement, but the tricky part was that they needed to walk all the way to the back of the basement, up the back stairs, through the kitchen doorway, down the hall into the living room and out into the front porch. Everyone was outside sitting in my brother’s truck waiting for him. My brother was walking up the back stairs when he remembered that he had left his pancakes in a to go container sitting on a speaker in the basement. He made the decision to go back. Now the basement is not clean, with full sight lines, there had been partitions made, and the boiler and main heating unit are right smack in the middle. So after my brother walks back, he is about to retrieve his food container, when out of the corner of his eye he sees it.
            It is a shadowy figure, right at his peripheral vision, this feeling of dread and uneasiness washed over my brother. We had been taught that if you are in the presence of a spirit or ghost and you felt a bad vibe, to say quick prayer or to cuss at it. My brother chose the latter, he basically just told it “hey fuck you, I don’t have time for this shit”.
            My brother started to walk to the back of the basement and briskly up the stairs, closing doors and turning off lights as he was walking out. The last light switch is on the opposite side of the front door...luckily the door was open and the light from the street lamp was flooding the living room with its amber light. My brother said he felt something at his back, but at no point did he turn around. As he flicked the last switch the living room went dark, as did rest of the house. As he stepped out he pulled on the door closing it behind him, still holding his food container in one hand he jogged down the few porch steps. He walked towards the front gate...our house resides far from the main street, essentially having a large front yard but no rear garage. As he closed the gap between himself and his friend-laden truck he kind of smiled and thought things over in his head, mad at himself for spooking out when there was no reason.
            He climbed into the drivers side of the truck, putting on his seat belt and getting ready to pull out of the parking spot directly in front of the house, when one of his friends asked “ Hey wait what about your brother, isn’t he coming with us?” My brother answered, “What do you mean? He went to work early tonight, he is already gone, do you see his car anywhere?”
            The next question they asked “So then who was walking behind you when you were leaving the house?</p>
         
          <img src="images/index3.jpg" className="img-fluid" alt="Responsive image" />
          
          
          <hr />
        
          <h1>3.The Rocking Horse</h1>
          <p className="text-justify">One night, when I was maybe 10-12, I had trouble falling asleep. My bedroom was the entire top floor of our house with my bed and such being on the left side and storage closets and a play area being on the right. I was lying in bed when I heard a noise from the other side of the room and see a rocking horse begin to rock. It was sitting just outside one of the storage closet doors. It proceeded to rock its way halfway across the room and stopped dead under the ceiling light. At this point I was freaking out and just buried my head under my blankets and never peeked out again until morning.
            It was all confirmed to not be a dream as the rocking horse was still in the middle of my room when I woke up. Furthermore, I got a stern reprimand from my parents for being up out of bed playing with my toys well past my bedtime. Their bedroom was directly below the storage closet/play area and had heard the creaking of the rocking horse shuffling across the room.</p>
          
          <img src="images/images12.jpg" className="img-fluid" alt="Responsive image" />


          <hr />

          <h1>4.The Following</h1>
          <p className="text-justify">My older sister has a ghost that’s followed her around for years.
              I lived with her once for about 3 months, and so much weird stuff happened in that time. All my sister would say to me when I mentioned it was that her ghost “didn’t like me being there.”
              Things like going to bed with everything locked up and switched off and waking up in the morning with the back door open, lights on and the kettle switched on. One night my sister and I were getting ready to go out and I’d asked to borrow her liquid foundation. I used it and put it back where she kept her makeup. Ten minutes later she’s asking me for it and it was nowhere to be seen. She accused me of taking it and made me buy her a new one and refused to listen to my side of the story. About a year or so later when she was packing to move to a new house, she found the makeup in a shoebox with some old letters. The shoebox was in a zipped up suitcase that was underneath her bed.
              But probably the most scared I ever felt was one afternoon when I was the only one in the house (which never happened as four other people lived there). I’d arrived home from work and headed straight to the bathroom. All the doors/windows etc were closed. I was standing in the bathroom and started squeezing a pimple on my chin when a female voice in the hall said “stop picking your zits!” It was loud enough and sounded real enough and at the time I thought it was my sister. So I laughed, told her to “fuck off” and asked what she was doing for dinner. No answer. I stuck my head out into the hall. No one there. I searched the house top to bottom and there was no one home. I sat out on the front porch until someone else got home because I didn’t want to be in there alone.</p>


              <img src="images/index.jpg" className="img-fluid" alt="Responsive image" />

          <hr />

          <h1>5.The Whispers</h1>
          <p className="text-justify">This is a story I do not often tell. I promise, sincerely, that this has scarred me for life and although I have looked into psychological explanations for what I heard and natural explanations for what occurred, they remain unsatisfactory.
When I was a child, I was scared of the dark. I swore to my mother I heard voices in it. They were not evil, but they were not familiar and so they scared me. It was not uncommon in the middle of the night for me to wake up and hear “whispers” as I would call them when asking my mom. She figured they were just “bumps in the night” and typical kids nightmare material. I tried often to explain to her that it was more than that; that they sounded different from one another the way people’s voices do. On some nights I would get so scared from these “whispers” that I would sleep in my mom’s bed with her. It was an added bonus that the bathroom was directly outside of her bedroom door for my late-night tinkles.
I should add at this point that when walking out into the hall to go to the bathroom, you looked directly down the stairs that would lead you into my living room on the first floor (as my mom’s bedroom was on the second floor). On one such night, around Christmas, I awoke and felt the need to relieve myself. I walked out from the door and distinctly heard the phrase “Look!” and to my astonishment, a red light, almost like a spotlight, was cast upon the wall at the very bottom of the stairs. The light had no other source, it was by itself, and I was transfixed by it.
Being a little kid, and it only being a few days from Christmas, I KNEW what this light was. IT WAS SANTA!!! How else could he get into my house to know I was being a good boy? I was so excited I began walking down the stairs to greet him, picking up my pace after the second step as it began to creep off the wall and fade into the darkness in my living room.
That’s when I heard him. A very strong, masculine voice. Different from the first. Not at all like my father’s (not to say he isn’t masculine, it was just distinctly different). It said, “Stop! Right now. Go back up those stairs.” I listened, turned around, and what happened next I am not sure I would believe if someone had told me this same story. After reaching the top of the stairs, I heard a very loud CRASH that sent me running back to my mother’s bed where I jumped straight under the covers and stayed there the whole night.
When we awoke the next morning, the poinsettia lights (little Christmas flower lights that glowed red) my mother had put on the railing down the stairs were pulled straight down to the bottom of the stairs, some broken from what seemed like a forceful tear, laying in a single pile. The dry sink in my living room had fallen from the wall. My mother could not explain it! My father was worried we had been the victims of a home invasion. My sister was crying. There was nothing missing, nobody had broken in, there did not seem to be any reason this had happened. And then I saw it, and I kept quiet about it because I was so afraid that I could not force words out of my mouth.
There, on the edge of the wooden dry sink which had been facing up, were three indentations where the finish on the wood had been worn, almost as if in a forceful grip. Something down there had GRABBED IT AND THREW IT DOWN. That was what the bang was.
I was mortified. After that day I never heard a single voice again. I do not like to imagine what was waiting downstairs for me that night, if it was anything at all, but I can tell you that the reality was that something had physically acted upon two things in my house near the bottom of that stairwell.
After this, I had never heard another whisper again. Which is sad, because in some ways I would have liked to thank the man (masculine energy?) that had stopped me from going down those stairs. This happened when I was 7. I am 20 years old now, and because of this incident I am still afraid of the dark. ESPECIALLY shadowy stairwells.</p>


          <img src="images/index1.jpg" className="img-fluid" alt="Responsive image" />


          <div>
     
     <Button id="NextCat" href="/contact" bsStyle="primary"> Go To Contact Us </Button>
     
     <Button id="BackCat" href="/urban" bsStyle="success">Back To Urban Legends</Button>

     </div>
        
        </div>
      );
    }
  };


  export default Paranormal;