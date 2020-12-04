import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const NameFormGroup = ({ id, firstName, lastName, modifyProperty }) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [bu_fname, setBuFname] = useState('');
  const [bu_lname, setBuLname] = useState('');
  const [changeOccured, setChangeOccured] = useState(false);

  useEffect(() => {
    setFname(firstName);
    setLname(lastName);
    setBuFname(firstName);
    setBuLname(lastName);
  }, [firstName, lastName]);

  const resetName = () => {
    setFname(bu_fname);
    setLname(bu_lname);
    setChangeOccured(false);
  };

  const onFnameChangeHandler = e => {
    setFname(e.target.value.trim());
  };

  const onLnameChangeHandler = e => {
    setLname(e.target.value.trim());
  };

  const onFnameKeyupHandler = () =>
    setChangeOccured(fname.trim() !== bu_fname.trim() ? true : false);

  const onLnameKeyupHandler = () =>
    setChangeOccured(lname.trim() !== bu_lname.trim() ? true : false);

  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <Form.Control
            className="my-2 mx-auto"
            style={{ background: 'transparent', color: '#fff' }}
            size="lg"
            as="input"
            type="text"
            value={fname}
            onChange={onFnameChangeHandler}
            onKeyUp={onFnameKeyupHandler}
            // updateContact
          />
        </Col>
        <Col xs={12} md={6}>
          <Form.Control
            className="my-2 mx-auto"
            style={{ background: 'transparent', color: '#fff' }}
            size="lg"
            as="input"
            type="text"
            // updateContact
            value={lname}
            onChange={onLnameChangeHandler}
            onKeyUp={onLnameKeyupHandler}
          />
        </Col>
      </Row>
      <Row>
        <Col className="my-3" xs={12} md={6}>
          <span
            /* onClick={modifyProperty({
              id: id,
              type: 'name',
              fname: fname,
              lname: lname,
            })} */
            onClick={() => console.log(`${id} modified name`)}
            className="btn btn-outline-primary d-inline-block border border-primary rounded font-weight-bold"
          >
            <i className="fas fa-pencil-alt fw"></i> Save
          </span>
        </Col>
        <Col className="my-3" xs={12} md={6}>
          <span
            onClick={resetName}
            className={
              changeOccured
                ? 'btn btn-outline-success d-inline-block border border-success rounded font-weight-bold'
                : 'btn btn-outline-light d-inline-block border border-light rounded font-weight-normal'
            }
          >
            <i className="fas fa-stop fw"></i> Cancel
          </span>
        </Col>
      </Row>
    </>
  );
};

export default NameFormGroup;
