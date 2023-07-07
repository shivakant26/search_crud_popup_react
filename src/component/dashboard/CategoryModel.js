import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CategoryModel = ({showCatModel,setShowCatModel}) =>{
  const handleClose = () => setShowCatModel(false);

  return (
    <>
      <Modal show={showCatModel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type='text' id="category" placeholder='Enter Category'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CategoryModel;