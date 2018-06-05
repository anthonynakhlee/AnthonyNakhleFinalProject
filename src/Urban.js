import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem, Button } from 'react-bootstrap';
import "./index.css";



class Urban extends React.Component{
  render() {
    return (
      <div>

        <title>Urban Legends</title>

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


        
        
        <h1>1. The Creepy Clown</h1>
        <p className="text-justify">A few years ago a mother and a father decided they needed a break, so they wanted to head out for a night on the town. So they called their most trusted babysitter. When the babysitter arrived the two children were already fast asleep in bed. So the babysitter just got to sit around and make sure everything was okay with the children.
          Later in the night, the babysitter got bored and so she wanted to watch tv but she couldn't watch it downstairs because they didn't have cable downstairs (the parents didn't want their children watching too much garbage) so she called them and asked them if she could watch cable tv in the parents room. Of course the parents said it was ok, but the babysitter had one final request. She asked if she could cover up the large clown statue in their bedroom with a blanket or cloth, because it made her nervous. The phone line was silent for a moment, and the father (who was talking to the babysitter at the time) said...take the children and get out of the house...we'll call the police...we don't have a clown statue...the children and the babysitter got murdered by the clown. it turned out 2 be that the clown was a killer that escaped from jail.</p>
      
        <img src="images/download4.jpeg" className="img-fluid" alt="Responsive image" />
        
        
        
        <hr />
        
        
        
        <h1>2. The Watchful Paintings</h1>
        <p className="text-justify">One night there was a man walking alone in the woods. He noticed that it was getting dark outside and he needed to find a place to sleep. Eventually he came across a cabin and decided it would suffice. When he went in, he noticed that the walls were covered with paintings of people and their eyes seemed to be following him. It freaked him out a little, but since it was late he decided to ignore it and go to sleep. When he woke up in the morning, he noticed that the paintings were gone and there were only windows...</p>
      
        <img src="images/download5.jpeg" className="img-fluid" alt="Responsive image" />
        
        
        <hr />
        

        
        <h1>3. Lights out</h1>
        <p className="text-justify">There’s the one where the girl comes back to her college dorm late at night, and she doesn’t turn the lights on because she doesn’t want to wake her roommate. When she wakes up in the morning, she sees her roommate dead in a pool of blood on her bed, and written in blood on the wall is, 'Aren’t you glad you didn’t turn on the lights?'</p>
      
        <img src="images/download6.jpeg" className="img-fluid" alt="Responsive image" />
        
        
        <hr />
        
        
        <h1>4. The Bunny Man Bridge</h1>
        <p className="text-justify">My friends told me this story in fifth grade. It's about a patient from an asylum that escaped into the woods one night and murdered four people. He then skinned rabbits to make a bunny suit. In that suit, he would kill young lovers walking in the woods and eat them. He was one day pursued by the police, but before they could catch them he hung himself on a bridge. He's said to haunt the bridge and kill anyone who walks under it.</p>
       
        <img src="images/download7.jpeg" className="img-fluid" alt="Responsive image" />
        
        
        <hr />


        <h1>5. The Hotel Room</h1>
        <p className="text-justify">There was this man who stayed at a hotel for a business trip. He was given a keycard for his room and went up to his floor. On the way to his room, he noticed one of the doors still had a keyhole and had not been converted to a card reader. 'Interesting,' he thought and headed to his room.
          He couldn’t stop thinking of that one door all night and wondered why it hadn’t been changed. The next morning, curiosity got the best of him and he peeked in the keyhole on his way out. He saw a lady with long white hair standing in the corner, facing away from him. He shrugged and went about his day.
          He returned to the hotel later that night, exhausted and eager to get back to his room, but he saw the door again. He figured it wouldn’t hurt to look and when he did, it had been blocked. Something bright red seemed to have been put in front of the keyhole.
          'They must have noticed me looking in earlier,' he thought, embarrassed. He went on his way to bed. The next morning he asked the hotel employee checking him out about the room. The lady said, 'Oh, last time someone stayed in that room, it was a bride waiting for her wedding to start. Her groom never showed up, and she suddenly passed away in that very room the next night. Nobody has touched it since. She’s very hard to forget. She had long white hair and bright red eyes.'</p>
        
        <img src="images/images9.jpeg" className="img-fluid" alt="Responsive image" />
        
      
        <div>
     
     <Button id="NextCat" href="/paranormal" bsStyle="primary"> Go To Paranormal Stories</Button>
     
     <Button id="BackCat" href="/creepy" bsStyle="success">Back To Creepypasta</Button>

     </div>

      </div>
    );
  }
};


export default Urban;