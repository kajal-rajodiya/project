import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Course from './components/Course';
import Allcourses from './components/Allcources';
import Addcourse from './components/Addcourse';
import Header from './components/Header';
import Menus from './components/Menus';

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
                <Col md={4}>
                  <Menus/>
                </Col>
                <Col md={8}>
                <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<Addcourse />} exact />
                <Route path="/view-course" element={<Allcourses />} exact />
                  </Routes>
            </Col>
            </Row>
          
        </Container>
      </Router>
    </div>
  );
}

export default App;