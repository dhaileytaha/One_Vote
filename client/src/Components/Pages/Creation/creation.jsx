import React, {useState, useEffect} from 'react';
import Proptypes from 'prop-types';

import Navigation from '../../HeaderFooter/header.jsx';
import Footer from '../../HeaderFooter/footer.jsx';
import CitizenForm from '../../Forms/citizenForm.jsx';
import OfficeForm from '../../Forms/officeForm.jsx';
import ElectionForm from '../../Forms/electionForm.jsx';
import CandidateForm from '../../Forms/candidateForm.jsx';

import axios from 'axios';
import styled from 'styled-components';

import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Web3 from 'web3';


const Section = styled.section`
    width: 250px;
    max-width: 600px;
    color: black;
    text-align: left;
  `;


function Creation(props) {
  const [showCitizenForm, setShowCitizenForm] = useState(false);
  const handleCloseCitizenForm = () => {
    setShowCitizenForm(oldValue => !oldValue);
  }
  const handleShowCitizenForm = async() => {
    await setShowCitizenForm(oldValue => !oldValue);
    // await props.contract.methods.createCitizen(name, dob, zipCode, stateId).send({from: accounts[0]});
    // const citizenEvent = props.contract.event.CitizenAdded().on('data', function(event){
    //   console.log("Citizen Added: ", event.returnValues);
    // });
  }

  const [showOfficeForm, setShowOfficeForm] = useState(false);
  const handleCloseOfficeForm = () => {
    setShowOfficeForm(oldValue => !oldValue);
  }
  const handleShowOfficeForm = () => {
    setShowOfficeForm(oldValue => !oldValue);
  }

  const [showElectionForm, setShowElectionForm] = useState(false);
  const handleCloseElectionForm = () => {
    setShowElectionForm(oldValue => !oldValue);
  }
  const handleShowElectionForm = () => {
    setShowElectionForm(oldValue => !oldValue);
  }

  const [showCandidateForm, setShowCandidateForm] = useState(false);
  const handleCloseCandidateForm = () => {
    setShowCandidateForm(oldValue => !oldValue);
  }
  const handleShowCandidateForm = () => {
    setShowCandidateForm(oldValue => !oldValue);
  }

  return(
    <div className="App">
      <Navigation />
      <header className="App-header">
        <h1>Creation</h1>

        <Row>
          <CitizenForm
            showCitizenForm={showCitizenForm}
            handleShowCitizenForm={handleShowCitizenForm}
            handleCloseCitizenForm={handleCloseCitizenForm}
          />
          <OfficeForm
            showOfficeForm={showOfficeForm}
            handleShowOfficeForm={handleShowOfficeForm}
            handleCloseOfficeForm={handleCloseOfficeForm}
          />
        </Row>
        <Row>
          <ElectionForm
            showElectionForm={showElectionForm}
            handleShowElectionForm={handleShowElectionForm}
            handleCloseElectionForm={handleCloseElectionForm}
          />
          <CandidateForm
            showCandidateForm={showCandidateForm}
            handleShowCandidateForm={handleShowCandidateForm}
            handleCloseCandidateForm={handleCloseCandidateForm}
          />
        </Row>

      </header>

      <Footer />
    </div>
  );
}


export default Creation;
