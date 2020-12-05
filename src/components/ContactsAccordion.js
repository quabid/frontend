import React, { useState } from 'react';
import {
  Card,
  Accordion,
  Row,
  Col,
  Form,
  Jumbotron,
  CardImg,
} from 'react-bootstrap';
import NameFormGroup from '../components/NameFormGroup';
import EmailFormGroup from '../components/EmailFormGroup';
import PhoneFormGroup from '../components/PhoneFormGroup';
import AddressFormGroup from '../components/AddressFormGroup';

const ContactsAccordion = ({ contacts }) => {
  const [contactsToUpdate, setContactsToUpdate] = useState([]);

  const updateEntity = obj => {
    if (obj.id) {
      const contact = contactsToUpdate.find(x => x.id === obj.id);
      // If contact is in the list
      if (contact) {
        switch (obj.property) {
          case 'address':
            contact.addresses.push({
              category: obj.category || null,
              address: {
                street: obj.street || null,
                city: obj.city || null,
                zipcode: obj.zipcode || null,
              },
            });
            break;

          case 'email':
            console.log(`${obj.action} ${obj.property}`);
            contact.emails.push({
              category: obj.category || null,
              email: obj.email || null,
            });
            break;

          case 'phone':
            contact.phones.push({
              category: obj.category || null,
              phone: obj.phone || null,
            });
            break;

          case 'name':
            switch (obj.which) {
              case 'fname':
                contact.name.fname = obj.fname;
                break;

              case 'lname':
                contact.name.lname = obj.lname;
                break;

              default:
                contact.name.fname = null;
                contact.name.lname = null;
                break;
            }
            break;

          default:
            console.log(`Nothing to update`);
            break;
        }
      } else {
        // If contact is not in the list add it by ID
        console.log(`${obj.action} ${obj.property}`);

        const contact = {
          id: obj.id,
          action: obj.action,
          emails: [],
          phones: [],
          addresses: [],
          name: { fname: '', lname: '' },
        };
        contactsToUpdate.push(contact);
        switch (obj.property) {
          case 'address':
            contact.addresses.push({
              category: obj.category || null,
              address: {
                street: obj.street || null,
                city: obj.city || null,
                zipcode: obj.zipcode || null,
              },
            });
            break;

          case 'email':
            console.log(`${obj.action} ${obj.property}`);
            contact.emails.push({
              category: obj.category || null,
              email: obj.email || null,
            });
            break;

          case 'phone':
            contact.phones.push({
              category: obj.category || null,
              phone: obj.phone || null,
            });
            break;

          case 'name':
            switch (obj.which) {
              case 'fname':
                contact.name.fname = obj.fname;
                break;

              case 'lname':
                contact.name.lname = obj.lname;
                break;

              default:
                contact.name.fname = null;
                contact.name.lname = null;
                break;
            }
            break;

          default:
            console.log(`Nothing to update`);
            break;
        }
      }
    } else {
      console.log(`\n\n\t\t\tID not provided\n\n`);
      return;
    }
    console.log(`\n\n\t\t\tContacts To Be Updated`);
    console.log(contactsToUpdate);
  };

  const accordion = contacts.map(contact => {
    return (
      <Card
        key={contact._id}
        className="text-white my-1"
        style={{ background: 'transparent', fontSize: '1.9rem' }}
      >
        <Accordion.Toggle as={Card.Header} eventKey={contact._id}>
          <span className="font-weight-bolder text-white">
            {contact.fname.substring(0, 1).toUpperCase()}
            {contact.fname.substring(1)}
          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={contact._id}>
          <Card.Body
            className="text-white border border-white rounded"
            style={{ background: 'transparent', fontSize: '1.9rem' }}
          >
            <Jumbotron
              className="mx-0 my-0 px-1 py-1 text-center text-white"
              style={{ background: 'transparent', fontSize: '1rem' }}
            >
              <Row>
                <Col xs={12}>
                  {contact.image ? (
                    <CardImg alt={contact.fname} src={contact.image} />
                  ) : (
                    <i className="fas fa-user fa-8x fw"></i>
                  )}
                </Col>

                <Col xs={12} style={{ fontSize: '1.2rem' }}>
                  <p className="mx-0 my-1">
                    {contact.fname.substring(0, 1).toUpperCase()}
                    {contact.fname.substring(1)}{' '}
                    {contact.lname.substring(0, 1).toUpperCase()}
                    {contact.lname.substring(1)}
                  </p>
                </Col>

                <Col xs={12} style={{ fontSize: '1.2rem' }}>
                  <Form>
                    <Row className="border border-secondary rounded my-2">
                      <Col className="p-3">
                        <h2 className="h5 text-left font-weight-bolder">
                          Name
                        </h2>
                        <NameFormGroup
                          id={contact._id}
                          firstName={contact.fname}
                          lastName={contact.lname}
                          modifyProperty={updateEntity}
                        />
                      </Col>
                    </Row>
                    <Row className="border border-secondary rounded my-2">
                      <Col className="p-3">
                        <h2 className="h5 text-left font-weight-bolder">
                          Phones
                        </h2>
                        <h2 className="h5 text-right d-inline-block add add-phone">
                          <i className="fas fa-plus fw"></i>
                        </h2>
                        {contact.phones.map((phone, index) => (
                          <PhoneFormGroup
                            key={index + 1}
                            id={contact._id}
                            phone={phone.phone}
                            category={phone.category}
                            modifyProperty={updateEntity}
                            removeProperty={updateEntity}
                          />
                        ))}
                      </Col>
                    </Row>
                    <Row className="border border-secondary rounded my-2">
                      <Col className="p-3">
                        <h2 className="h5 text-left font-weight-bolder">
                          Emails
                        </h2>
                        <h2 className="h5 text-right d-inline-block add add-email">
                          <i className="fas fa-plus fw"></i>
                        </h2>
                        {contact.emails.map((email, index) => (
                          <EmailFormGroup
                            key={index + 1}
                            id={contact._id}
                            email={email.email}
                            category={email.category}
                            modifyProperty={updateEntity}
                            removeProperty={updateEntity}
                          />
                        ))}
                      </Col>
                    </Row>
                    <Row className="border border-secondary rounded my-2">
                      <Col className="p-3">
                        <h2 className="h5 text-left font-weight-bolder">
                          Addresses
                        </h2>
                        <h2 className="h5 text-right d-inline-block add add-address">
                          <i className="fas fa-plus fw"></i>
                        </h2>
                        {contact.addresses.map((address, index) => (
                          <AddressFormGroup
                            key={index + 1}
                            id={contact._id}
                            address={address.address}
                            category={address.category}
                            modifyProperty={updateEntity}
                            removeProperty={updateEntity}
                          />
                        ))}
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Jumbotron>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });
  return <Accordion>{accordion}</Accordion>;
};

export default ContactsAccordion;
