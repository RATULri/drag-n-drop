import React from 'react';
import { Sidenav, Nav, Dropdown, Icon} from 'rsuite';
import { Form, FormGroup, InputGroup, FormControl } from 'rsuite';
import { ButtonToolbar, IconButton, ButtonGroup } from 'rsuite';
import { Container, Header, Content, Sidebar, Divider } from 'rsuite';
// import Button from 'react-bootstrap/Button';

import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid>
      <Header style={{background: "#2466D6", color: "#fff"}}>
        <Icon icon="bars" size="lg" className="m-3" />
        DragNDrop
        <text className="float-right m-3">Try DragNDrop Pro</text>
        <img src="" alt=""/>
      </Header>
      
      <Header className="d-flex justify-content-center m-1">
        <ButtonToolbar>
          <ButtonGroup>
            <IconButton size="sm" icon={ <Icon icon="undo"/> }   />
            <IconButton size="sm" icon={ <Icon icon="repeat"/> }  />
          </ButtonGroup>

          <Divider vertical />

          <ButtonGroup>
            <IconButton size="sm" icon={ <Icon icon="search-plus"/> } />
            <IconButton size="sm" icon={ <Icon icon="search-minus"/> } />
          </ButtonGroup>

          <Divider vertical />

          <IconButton size="sm" icon={ <Icon icon="play"/> }>24.03 sec</IconButton>
          
          <Divider vertical />

          <IconButton size="sm" icon={ <Icon icon="download"/> }>Download</IconButton>
          
          <Divider vertical />
          
          <IconButton size="sm" icon={ <Icon icon="ellipsis-h"/> } />
        </ButtonToolbar>
      </Header>

      <Divider horizontal className="m-0" />

      <Container fluid>
        <Content>Content</Content>
        <Sidebar style={{}}>
          <Sidenav activeKey="1">
            <Sidenav.Body>
              <Nav>
                <Dropdown eventKey="1" title="Templates" icon={<Icon icon="frame" />}>
                  <Dropdown.Item eventKey="1-1">
                    <Form>
                      <FormGroup>
                        <InputGroup inside>
                          <FormControl name="search" placeholder="Search"/>
                          <InputGroup.Addon>
                            <Icon icon="search" />
                          </InputGroup.Addon>
                        </InputGroup>
                      </FormGroup>
                    </Form>
                    <ButtonToolbar>
                      <IconButton icon={<Icon icon="filter" />} className="btn btn-outline-dark" circle />
                    </ButtonToolbar>
                  </Dropdown.Item>
                </Dropdown>

                <Dropdown eventKey="2" title="Insert" icon={<Icon icon="expand-o" />}>
                  <Dropdown.Menu eventKey="2-1" title="Text"></Dropdown.Menu>
                  <Dropdown.Menu eventKey="2-2" title="Image"></Dropdown.Menu>
                  <Dropdown.Menu eventKey="2-3" title="Audio"></Dropdown.Menu>
                  <Dropdown.Menu eventKey="2-4" title="Video"></Dropdown.Menu>
                  <Dropdown.Menu eventKey="2-5" title="Elements"></Dropdown.Menu>
                </Dropdown>

                <Dropdown eventKey="3" title="Background" icon={<Icon icon="image" />}>
                </Dropdown>

                <Dropdown eventKey="4" title="Transition" icon={<Icon icon="clone" />}>
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </Sidebar>
      </Container>
    </Container>
  );
}

export default App;