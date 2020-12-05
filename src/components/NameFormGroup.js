import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const NameFormGroup = ({ id, firstName, lastName, modifyProperty }) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [bu_fname, setBuFname] = useState('');
  const [bu_lname, setBuLname] = useState('');
  const [fnameChangeOccured, setFnameChangeOccured] = useState(false);
  const [lnameChangeOccured, setLnameChangeOccured] = useState(false);
  const [fnameChangesSaved, setFnameChangesSaved] = useState(false);
  const [lnameChangesSaved, setLnameChangesSaved] = useState(false);
  const [fnameChangesApplied, setFnameChangesApplied] = useState(false);
  const [lnameChangesApplied, setLnameChangesApplied] = useState(false);
  const [changes, setChanges] = useState(null);

  useEffect(() => {
    setFname(firstName);
    setLname(lastName);
    setBuFname(firstName);
    setBuLname(lastName);
  }, [firstName, lastName]);

  const resetFname = () => setFname(bu_fname);

  const resetLname = () => setLname(bu_lname);

  const resetName = () => {
    resetFname();
    setFnameChangeOccured(false);
    setFnameChangesSaved(false);
    setFnameChangesApplied(false);
    resetLname();
    setLnameChangeOccured(false);
    setLnameChangesSaved(false);
    setLnameChangesApplied(false);
  };

  const onFnameChangeHandler = (e) => {
    setFname(e.target.value.trim());
  };

  const onFnameKeyupHandler = () =>
    setFnameChangeOccured(fname.trim() !== bu_fname.trim() ? true : false);

  const onLnameChangeHandler = (e) => {
    setLname(e.target.value.trim());
  };

  const onLnameKeyupHandler = () =>
    setLnameChangeOccured(lname.trim() !== bu_lname.trim() ? true : false);

  const applyChanges = () => {
    console.log(`Changes applied`);
  };

  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <Form.Control
            className='my-2 mx-auto'
            style={{ background: 'transparent', color: '#fff' }}
            size='lg'
            as='input'
            type='text'
            value={fname}
            onChange={onFnameChangeHandler}
            onKeyUp={onFnameKeyupHandler}
          />
          {fnameChangeOccured ? (
            <Row>
              {!fnameChangesSaved ? (
                <Col className='my-3' xs={12} md={6}>
                  <span
                    onClick={() => console.log(`${id} modified name`)}
                    className='btn btn-outline-primary d-inline-block border border-primary rounded font-weight-bold'
                  >
                    <i className='fas fa-pencil-alt fw'></i> Save
                  </span>
                </Col>
              ) : null}

              {!fnameChangesApplied ? (
                <Col className='my-3' xs={12} md={3}>
                  <span
                    onClick={() => {
                      applyChanges();
                      changes &&
                        changes.action === 'update' &&
                        modifyProperty(changes);
                    }}
                    className='btn btn-outline-success d-inline-block border border-success rounded font-weight-bold'
                  >
                    <i className='fas fa-go fw'></i> Apply
                  </span>
                </Col>
              ) : null}

              <Col className='my-3' xs={12} md={6}>
                <span
                  onClick={resetFname}
                  className={
                    fnameChangeOccured
                      ? 'btn btn-outline-success d-inline-block border border-success rounded font-weight-bold'
                      : 'btn btn-outline-light d-inline-block border border-light rounded font-weight-normal'
                  }
                >
                  <i className='fas fa-stop fw'></i> Cancel
                </span>
              </Col>
            </Row>
          ) : null}
        </Col>
        <Col xs={12} md={6}>
          <Form.Control
            className='my-2 mx-auto'
            style={{ background: 'transparent', color: '#fff' }}
            size='lg'
            as='input'
            type='text'
            // updateContact
            value={lname}
            onChange={onLnameChangeHandler}
            onKeyUp={onLnameKeyupHandler}
          />
          {lnameChangeOccured ? (
            <Row>
              {!lnameChangesSaved ? (
                <Col className='my-3' xs={12} md={6}>
                  <span
                    onClick={() => console.log(`${id} modified name`)}
                    className='btn btn-outline-primary d-inline-block border border-primary rounded font-weight-bold'
                  >
                    <i className='fas fa-pencil-alt fw'></i> Save
                  </span>
                </Col>
              ) : null}
              <Col className='my-3' xs={12} md={6}>
                <span
                  onClick={resetLname}
                  className={
                    lnameChangeOccured
                      ? 'btn btn-outline-success d-inline-block border border-success rounded font-weight-bold'
                      : 'btn btn-outline-light d-inline-block border border-light rounded font-weight-normal'
                  }
                >
                  <i className='fas fa-stop fw'></i> Cancel
                </span>
              </Col>
            </Row>
          ) : null}
        </Col>
      </Row>
      <Row></Row>
    </>
  );
};

export default NameFormGroup;
