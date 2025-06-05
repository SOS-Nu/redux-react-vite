import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { deleteUser, resetDelete } from "../../redux/user/user.slide";
import { toast } from "react-toastify";

const UserDeleteModal = (props: any) => {
  const { dataUser, isOpenDeleteModal, setIsOpenDeleteModal } = props;
  const [id, setId] = useState<number>();

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();
  const isDeleteSuccess = useAppSelector((state) => state.user.isDeleteSuccess);

  useEffect(() => {
    if (isDeleteSuccess === true) {
      toast("🦄  edit user success");
      setId(undefined);
      setEmail("");
      setName("");
      dispatch(resetDelete());
      setIsOpenDeleteModal(false);
    }
  }, [isDeleteSuccess]);

  useEffect(() => {
    if (dataUser?.id) {
      setId(dataUser?.id);
      setEmail(dataUser?.email);
      setName(dataUser?.name);
    }
  }, [dataUser]);

  const handleSubmit = () => {
    console.log(">>> check delete: ", { id: dataUser?.id ?? "" });

    if (!id) {
      return;
    } else {
      dispatch(deleteUser({ id, email, name }));
    }
  };

  return (
    <Modal
      show={isOpenDeleteModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop={false}
      onHide={() => setIsOpenDeleteModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete A User</Modal.Title>
      </Modal.Header>
      <Modal.Body>Delete the user: {dataUser?.email ?? ""}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="warning"
          onClick={() => setIsOpenDeleteModal(false)}
          className="mr-2"
        >
          Cancel
        </Button>
        <Button onClick={() => handleSubmit()}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserDeleteModal;
