import { Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { General } from '../pages/general';
export const Concepts = (props) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
    return (
      <div id='concept' className='text-center'>
        <div className='container'>
          <div className='col-md-10 col-md-offset-1 section-title'>
            <h2>Game Concepts</h2>
          </div>
          <div className='row'>
               
               <div className='col-xs-6 col-md-3'> 
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                   {isOpen && <General
                      content={<>
                      <b className="bold">General</b><br/>
                      <ul float-left>
                         <li>1. These Magic rules apply to any Magic game with two or more players, including two-player games and multiplayer games.</li><br/>
                         <li> 2. To play, each player needs their own deck of traditional Magic cards, small items to represent any tokens and counters, and some way to clearly track life totals.</li><br/>
                         <li> 3. Some casual variants require additional items, such as specially designated cards, nontraditional Magic cards, and dice. See section 9, “Casual Variants.”</li><br/>
                         <li> 4. If a deck must contain at least a certain number of cards, that number is referred to as a minimum deck size. There is no maximum deck size for non-Commander decks.</li><br/>
                         <li> 5. Most Magic tournaments (organized play activities where players compete against other players to win prizes) have additional rules covered in the Magic: The Gathering Tournament Rules (found at WPN.Wizards.com/en/resources/rules-documents). These rules may limit the use of some cards, including barring all cards from some older sets.</li><br/>
                         <li>  6. Certain promotional cards and cards in the Unglued, Unhinged, and Unstable sets are printed with a silver border. These cards are intended for casual play and may have features and text that aren’t covered by these rules.</li><br/>
                         <li> 7. To play, each player needs their own deck of traditional Magic cards, small items to represent any tokens and counters, and some way to clearly track life totals.</li><br/>
                         <li> 8. To play, each player needs their own deck of traditional Magic cards, small items to represent any tokens and counters, and some way to clearly track life totals.</li><br/>
                         <li> 9. To play, each player needs their own deck of traditional Magic cards, small items to represent any tokens and counters, and some way to clearly track life totals.</li>
                        </ul> 
                      </>}
                       handleClose={togglePopup}
                      />}
                     
                      <span>
                      <button className='more' onClick={togglePopup} >
                      general
                      </button></span>{' '}
                     <div className='hover-text1'>
                        <h4>general</h4>
                      </div>
                    {' '}
                  </div>
                </div>
              </div>

              <div className='col-xs-6 col-md-3'> 
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                   {isOpen && <General
                      content={<>
                      <b className="bold">The Magic Golden Rules</b><br/>
                      <ul float-left>
                         <li>1. Whenever a card’s text directly contradicts these rules, the card takes precedence. The card overrides only the rule that applies to that specific situation. The only exception is that a player can concede the game at any time (see rule 104.3a).</li><br/>
                         <li>2. When a rule or effect allows or directs something to happen, and another effect states that it can’t happen, the “can’t” effect takes precedence.
                             Example: If one effect reads “You may play an additional land this turn” and another reads “You can’t play lands this turn,” the effect that precludes you from playing lands wins.</li><br/>
                         <li>.3. Any part of an instruction that’s impossible to perform is ignored. (In many cases the card will specify consequences for this; if it doesn’t, there’s no effect.)</li><br/>
                         <li> 4. If multiple players would make choices and/or take actions at the same time, the active player (the player whose turn it is) makes any choices required, then the next player in turn order (usually the player seated to the active player’s left) makes any choices required, followed by the remaining nonactive players in turn order. Then the actions happen simultaneously. This rule is often referred to as the “Active Player, Nonactive Player (APNAP) order” rule.
                            Example: A card reads “Each player sacrifices a creature.” First, the active player chooses a creature they control. Then each of the nonactive players, in turn order, chooses a creature they control. Then all creatures chosen this way are sacrificed simultaneously.</li><br/>
                        </ul> 
                      </>}
                       handleClose={togglePopup}
                      />}
                     
                      <span>
                      <button className='more' onClick={togglePopup} >
                       The Magic Golden Rules
                      </button></span>{' '}
                     <div className='hover-text1'>
                        <h4>The Magic Golden Rules</h4>
                      </div>
                    {' '}
                  </div>
                </div>
              </div>


              <div className='col-xs-6 col-md-3'> 
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                   {isOpen && <General
                      content={<>
                      <b className="bold">Players</b><br/>
                      <ul float-left>
                         <li>.1. A player is one of the people in the game. The active player is the player whose turn it is. The other players are nonactive players.</li><br/>
                         <li>2. In a two-player game, a player’s opponent is the other player.</li><br/>
                         <li>3. In a multiplayer game between teams, a player’s teammates are the other players on their team, and the player’s opponents are all players not on their team.</li><br/>
                         <li> 4. A spell or ability may use the term “your team” as shorthand for “you and/or your teammates.” In a game that isn’t a multiplayer game between teams, “your team” means the same thing as “you.”</li><br/>
                         
                        </ul> 
                      </>}
                       handleClose={togglePopup}
                      />}
                     
                      <span>
                      <button className='more' onClick={togglePopup} >
                      Players
                      </button></span>{' '}
                     <div className='hover-text1'>
                        <h4>Players</h4>
                      </div>
                    {' '}
                  </div>
                </div>
              </div>


              <div className='col-xs-6 col-md-3'> 
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                   {isOpen && <General
                      content={<>
                      <b className="bold">Starting the Game</b><br/>
                      <ul float-left>
                         <li>1. At the start of a game, the players determine which one of them will choose who takes the first turn. In the first game of a match (including a single-game match), the players may use any mutually agreeable method (flipping a coin, rolling dice, etc.) to do so. In a match of several games, the loser of the previous game chooses who takes the first turn. If the previous game was a draw, the player who made the choice in that game makes the choice in this game. The player chosen to take the first turn is the starting player. The game’s default turn order begins with the starting player and proceeds clockwise.</li><br/>
                         <li>2. After the starting player has been determined, each player shuffles their deck so that the cards are in a random order. Each player may then shuffle or cut their opponents’ decks. The players’ decks become their libraries.</li><br/>
                         <li>.3. Each player begins the game with a starting life total of 20. Some variant games have different starting life totals.</li><br/>
                         <li>4. Each player draws a number of cards equal to their starting hand size, which is normally seven. (Some effects can modify a player’s starting hand size.) A player who is dissatisfied with their initial hand may take a mulligan. First, the starting player declares whether they will take a mulligan. Then each other player in turn order does the same. Once each player has made a declaration, all players who decided to take mulligans do so at the same time. To take a mulligan, a player shuffles the cards in their hand back into their library, draws a new hand of cards equal to their starting hand size, then puts a number of those cards equal to the number of times that player has taken a mulligan on the bottom of their library in any order. Once a player chooses not to take a mulligan, the remaining cards become that player’s opening hand, and that player may not take any further mulligans. This process is then repeated until no player takes a mulligan. A player can take mulligans until their opening hand would be zero cards, after which they may not take further mulligans.</li><br/>
                         <li>5. Some cards allow a player to take actions with them from their opening hand. Once the mulligan process (see rule 103.4) is complete, the starting player may take any such actions in any order. Then each other player in turn order may do the same.</li><br/>
                         <li>6. In a Planechase game, the starting player moves the top card of their planar deck off that planar deck and turns it face up. If it’s a phenomenon card, the player puts that card on the bottom of their planar deck and repeats this process until a plane card is turned face up. The face-up plane card becomes the starting plane. (See rule 901, “Planechase.”)</li><br/>
                         <li>7. The starting player takes their first turn.</li><br/>
                         <li> 9. To play, each player needs their own deck of traditional Magic cards, small items to represent any tokens and counters, and some way to clearly track life totals.</li>
                        </ul> 
                      </>}
                       handleClose={togglePopup}
                      />}
                     
                      <span>
                      <button className='more' onClick={togglePopup} >
                      Starting the Game
                      </button></span>{' '}
                     <div className='hover-text1'>
                        <h4>Starting the Game</h4>
                      </div>
                    {' '}
                  </div>
                </div>
              </div>

              <div className='col-xs-6 col-md-3'> 
                <div className='portfolio-item'>
                  <div className='hover-bg'>
                    {' '}
                   {isOpen && <General
                      content={<>
                      <b className="bold">Ending the Game</b><br/>
                      <ul float-left>
                         <li>104.1. A game ends immediately when a player wins, when the game is a draw, or when the game is restarted.</li><br/>
                         <li>104.2.  There are several ways to win the game.</li><br/>
                           <ul>
                            <li>104.2a A player still in the game wins the game if that player’s opponents have all left the game. This happens immediately and overrides all effects that would preclude that player from winning the game.</li><br/>
                            <li>104.2b An effect may state that a player wins the game.</li>
                            <li>104.2c In a multiplayer game between teams, a team with at least one player still in the game wins the game if all other teams have left the game. Each player on the winning team wins the game, even if one or more of those players had previously lost that game.</li>
                            <li>104.2d In an Emperor game, a team wins the game if its emperor wins the game. (See rule 809.5.)</li>
                           </ul>
                         <li>104.3. There are several ways to lose the game.</li><br/>
                            <ul>
                            <li>104.3a A player can concede the game at any time. A player who concedes leaves the game immediately. That player loses the game.</li><br/>
                            <li>104.3b If a player’s life total is 0 or less, that player loses the game the next time a player would receive priority. (This is a state-based action. See rule 704.)</li>
                            <li>104.3c If a player is required to draw more cards than are left in their library, they draw the remaining cards and then lose the game the next time a player would receive priority. (This is a state-based action. See rule 704.)</li>
                            <li>104.3d If a player has ten or more poison counters, that player loses the game the next time a player would receive priority. (This is a state-based action. See rule 704.)</li>
                            <li>104.3e An effect may state that a player loses the game.</li>
                            <li>104.3f If a player would both win and lose the game simultaneously, that player loses the game.</li>
                            <li>104.3g In a multiplayer game between teams, a team loses the game if all players on that team have lost the game.</li>
                            <li>104.3h In a multiplayer game using the limited range of influence option (see rule 801), an effect that states that a player wins the game instead causes all of that player’s opponents within the player’s range of influence to lose the game. This may not cause the game to end.</li>
                            <li>104.3i In an Emperor game, a team loses the game if its emperor loses the game. (See rule 809.5.)</li>
                            <li>104.3j In a Commander game, a player that’s been dealt 21 or more combat damage by the same commander over the course of the game loses the game. (This is a state-based action. See rule 704. See also rule 903.10.)</li>
                            <li>104.3k In a tournament, a player may lose the game as a result of a penalty given by a judge. See rule 100.6.</li>
                            </ul>
                         <li>104.4. There are several ways for the game to be a draw.</li><br/>
                         <ul>
                            <li>104.4a If all the players remaining in a game lose simultaneously, the game is a draw.</li><br/>
                            <li>104.4b If a game that’s not using the limited range of influence option (including a two-player game) somehow enters a “loop” of mandatory actions, repeating a sequence of events with no way to stop, the game is a draw. Loops that contain an optional action don’t result in a draw.</li>
                            <li>104.4c An effect may state that the game is a draw.</li>
                            <li>104.4d In a multiplayer game between teams, the game is a draw if all remaining teams lose simultaneously.</li>
                            <li>104.4e In a multiplayer game using the limited range of influence option, the effect of a spell or ability that states that the game is a draw causes the game to be a draw for that spell or ability’s controller and all players within their range of influence. Only those players leave the game; the game continues for all other players.</li>
                            <li>104.4f In a multiplayer game using the limited range of influence option, if the game somehow enters a “loop” of mandatory actions, repeating a sequence of events with no way to stop, the game is a draw for each player who controls an object that’s involved in that loop, as well as for each player within the range of influence of any of those players. Only those players leave the game; the game continues for all other players.</li>
                            <li>104.4g In a multiplayer game between teams, the game is a draw for a team if the game is a draw for all remaining players on that team.</li>
                            <li>104.4h In the Emperor variant, the game is a draw for a team if the game is a draw for its emperor. (See rule 809.5.)</li>
                            <li>104.4i In a tournament, all players in the game may agree to an intentional draw. See rule 100.6.</li>
                            </ul>
                         <li>104.5. If a player loses the game, that player leaves the game. If the game is a draw for a player, that player leaves the game. The multiplayer rules handle what happens when a player leaves the game; see rule 800.4.</li><br/>
                         <li>104.6. One card (Karn Liberated) restarts the game. All players still in the game when it restarts then immediately begin a new game. See rule 719, “Restarting the Game.”</li><br/>
                        </ul> 
                      </>}
                       handleClose={togglePopup}
                      />}
                     
                      <span>
                      <button className='more' onClick={togglePopup} >
                      Ending the Game
                      </button></span>{' '}
                     <div className='hover-text1'>
                        <h4>Ending the Game</h4>
                      </div>
                    {' '}
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
    
    )
  }