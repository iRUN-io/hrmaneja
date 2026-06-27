import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { updateInventoryItem } from '../../../services/inventory';
import { createActivity } from '../../../services/activities';
import { getUser } from '../../../config/common';
import { toast } from 'material-react-toastify';

function UpdateQuantityModal(props) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  console.log('props', props)
  console.log('quantity', quantity)

  useEffect(() => {
    setQuantity(props.initialQuantity);
  }, [props.initialQuantity]);

  
  const handleUpdate = async() => {
    // Implement your update quantity logic here and pass the new quantity to your API
    console.log('Updating quantity:', quantity);
    // Close the modal
    console.log('Updating quantity for item ID', props.itemId, 'to', quantity);

    const user = await getUser();

    const body = {
        quantity
    };

    const response = await updateInventoryItem(body, props.itemId);

    if (response.message === 'Inventory was updated successfully.') {

        await createActivity(
            {
              name: 'Update Inventory',
              employee_id: user.employee_id,
              activity: `${user.name} updated an inventory with name; ${body.name} and quantity from ${props.initialQuantity} to ${quantity} `,
              activity_name: 'Creation',
              user: user.name,
              company_id: user.company_id
            }
          )
        
        toast.success("Inventory item updated successfully");
    } else {
        toast.info(response.message);
    }
    props.onClose();
  };

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Quantity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="text"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateQuantityModal;