import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {Button, Card, Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import {faDice} from "@fortawesome/free-solid-svg-icons";

interface ApplicationPageProps {

}

class ApplicationPage extends React.Component<ApplicationPageProps> {
  render() {
    return (
      <Container className="mt-3 mb-3">
        <Row>
          <Col sm={12} xl={8} className="mr-auto ml-auto">
            <Card>
              <Card.Header><h1>World of Casus application</h1></Card.Header>
              <ListGroup variant="flush">
                <Form>
                  <ListGroup.Item>
                    <h2>Out of character information</h2>
                    <Form.Group controlId="formMinecraft">
                      <Form.Label>What is your Minecraft username?</Form.Label>
                      <Form.Control type="text" placeholder="Minecraft username" />
                    </Form.Group>
                    <Form.Group controlId="formDiscord">
                      <Form.Label>What is your Discord username? (include the # and 4 numbers)</Form.Label>
                      <Form.Control type="text" placeholder="Discord username" />
                    </Form.Group>
                    <Form.Group controlId="formPronouns">
                      <Form.Label>(If comfortable) Which pronouns do you use?</Form.Label>
                      <Form.Control type="text" placeholder="Pronouns" />
                    </Form.Group>
                    <Form.Group controlId="formBirthday">
                      <Form.Label>When is your birthday?</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group controlId="formRoleplayExperience">
                      <Form.Label>How much roleplay or D&D experience do you have? (It's okay if you don't have any!)</Form.Label>
                      <Form.Control as="textarea" placeholder="Roleplay experience" rows={3} />
                    </Form.Group>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h2>In-character information (tell us about your character!)</h2>
                    <Form.Group controlId="formCharacterName">
                      <Row>
                        <Form.Label column="sm" sm={3}>Name:</Form.Label>
                        <Col sm={7}>
                          <Form.Control type="text" placeholder="Name" />
                        </Col>
                        <Col sm={2}>
                          <Button><FontAwesomeIcon icon={faDice} /></Button>
                        </Col>
                      </Row>
                      <Form.Text>This is your character's name. When picking, try to keep it medieval/fantasy/D&D-based.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formCharacterReference">
                      <Row>
                        <Form.Label column="sm" sm={3}>Character reference:</Form.Label>
                        <Col sm={2}>
                          <Button variant="success">Upload</Button>
                        </Col>
                      </Row>
                      <Form.Text>
                        Not necessary, but you can show us what your character looks like with a picture or Minecraft skin.
                        If you don't have one, feel free to describe them or leave blank.
                        Once you get approved, MPM is highly recommended as most players use it.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formCharacterRace">
                      <Row>
                        <Form.Label column="sm" sm={3}>Race:</Form.Label>
                        <Col sm={9}>
                          <Form.Control as="select">
                            <option>Human</option>
                            <option>Aborian</option>
                            <option>Kobold</option>
                            <option>Warforged</option>
                            <option>Drow</option>
                            <option>High Elf</option>
                            <option>Wood Elf</option>
                            <option>Snow Elf</option>
                            <option>Half Drow</option>
                            <option>Half High Elf</option>
                            <option>Half Wood Elf</option>
                            <option>Half Snow Elf</option>
                            <option>Mountain Dwarf</option>
                            <option>Berserker Ork</option>
                            <option>Juggernaut Ork</option>
                            <option>Darkspawn Tiefling</option>
                            <option>Michaia's Chosen Tiefling</option>
                            <option>Feline Beastfolk</option>
                            <option>Lupine Beastfolk</option>
                            <option>Feathered Beastfolk</option>
                            <option>Hooved Beastfolk</option>
                            <option>Burrower Beastfolk</option>
                            <option>Siren Merfolk</option>
                            <option>Bioluminescent Merfolk</option>
                            <option>Deep-Sea Merfolk</option>
                            <option>Rock Gnome</option>
                            <option>Air Genasi</option>
                            <option>Earth Genasi</option>
                            <option>Fire Genasi</option>
                            <option>Water Genasi</option>
                          </Form.Control>
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group controlId="formCharacterClass">
                      <Row>
                        <Form.Label column="sm" sm={3}>Class</Form.Label>
                        <Col sm={9}>
                          <Form.Control as="select">
                            <option>Bard</option>
                            <option>Fighter</option>
                            <option>Sorcerer</option>
                            <option>Rogue</option>
                            <option>Barbarian</option>
                            <option>Cleric</option>
                            <option>Druid</option>
                            <option>Monk</option>
                            <option>Paladin</option>
                            <option>Ranger</option>
                            <option>Wizard</option>
                            <option>Warlock</option>
                          </Form.Control>
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group controlId="formCharacterBackground">
                      <Row>
                        <Form.Label column="sm" sm={3}>Background:</Form.Label>
                        <Col sm={9}>
                          <Form.Control as="select">
                            <option>Acolyte</option>
                            <option>Charlatan</option>
                            <option>Criminal</option>
                            <option>Entertainer</option>
                            <option>Folk Hero</option>
                            <option>Guild Artisan</option>
                            <option>Hermit</option>
                            <option>Noble</option>
                            <option>Outlander</option>
                            <option>Sage</option>
                            <option>Sailor</option>
                            <option>Soldier</option>
                            <option>Urchin</option>
                          </Form.Control>
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group controlId="formCharacterProfession">
                      <Row>
                        <Form.Label column="sm" sm={3}>Profession:</Form.Label>
                        <Col sm={9}>
                          <Form.Control as="select">
                            <option>Miner</option>
                            <option>Lumberjack</option>
                            <option>Jeweler</option>
                            <option>Herbalist</option>
                            <option>Tailor</option>
                            <option>Hunter</option>
                            <option>Farmer</option>
                          </Form.Control>
                        </Col>
                      </Row>
                      <Form.Text>
                        This is your character's job.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formCharacterLanguages">
                      <Row>
                        <Form.Label column="sm" sm={3}>Languages:</Form.Label>
                        <Col sm={9}>
                          <Form.Control as="select" multiple>
                            <option>Dwarvish</option>
                            <option>Elvish</option>
                            <option>Giant</option>
                            <option>Gnomish</option>
                            <option>Goblin</option>
                            <option>Halfling</option>
                            <option>Orc</option>
                            <option>Abyssal</option>
                            <option>Celestial</option>
                            <option>Deep Speech</option>
                            <option>Draconic</option>
                            <option>Infernal</option>
                            <option>Primordial</option>
                            <option>Aquan</option>
                            <option>Sylvan</option>
                            <option>Undercommon</option>
                          </Form.Control>
                        </Col>
                      </Row>
                      <Form.Text>
                        Your languages are based off of your race, but there are certain other things that give you extra languages such as backgrounds and classes.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formCharacterGender">
                      <Row>
                        <Form.Label column="sm" sm={3}>Gender:</Form.Label>
                        <Col sm={9}>
                          <Form.Control type="text" placeholder="Gender" />
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group controlId="formCharacterAge">
                      <Row>
                        <Form.Label column="sm" sm={3}>Age:</Form.Label>
                        <Col sm={9}>
                          <Form.Control type="number" min={0} max={10000} />
                        </Col>
                      </Row>
                      <Form.Text>
                        Age is based on your character's race.
                        Children until the age of 14 will have no class and are essentially commoners.
                        Teenagers from 14-16 take -2 on all stats.
                        You are not allowed to whitelist with a child character, as that is a special application.
                        The ages listed are based off human ages but scale accordingly to other races.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formCharacterHeight">
                      <Row>
                        <Form.Label column="sm" sm={3}>Height:</Form.Label>
                        <Col sm={9}>
                          <Form.Control type="text" />
                        </Col>
                      </Row>
                      <Form.Text>Also based on your character's race</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formCharacterStats">
                      <Row>
                        <Form.Label column="sm" sm={3}>Stats:</Form.Label>
                        <Col sm={9}>

                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group controlId="formCharacterPersonality">
                      <Row>
                        <Form.Label column="sm" sm={3}>Personality traits:</Form.Label>
                        <Col sm={9}>
                          <Form.Control as="textarea" rows={3} />
                        </Col>
                      </Row>
                      <Form.Text>What's your character like? How do they act? What makes them, them?</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formCharacterBackstory">
                      <Row>
                        <Form.Label column="sm" sm={3}>Character backstory:</Form.Label>
                        <Col sm={9}>
                          <Form.Control as="textarea" rows={3} />
                        </Col>
                      </Row>
                      <Form.Text>
                        Tell us why your character is the way they are, and their journey, what led them to Drivia.
                      </Form.Text>
                    </Form.Group>
                    <Button variant="success">Submit</Button>
                  </ListGroup.Item>
                </Form>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ApplicationPage;