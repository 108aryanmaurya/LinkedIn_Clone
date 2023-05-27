import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./modal.scss";
const ModalComponent = ({
  modalOpen,
  setModalOpen,
  sendStatus,
  setStatus,
  status,
}) => {
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            key="submit"
            onClick={sendStatus}
            type="primary"
            disabled={status.length > 0 ? false : true}
          >
            Post
          </Button>,
        ]}
      >
        <hr />
        <input
          className="modal-input"
          value={status}
          onChange={(events) => {
            setStatus(events.target.value);
          }}
          type="text"
          placeholder="What do you want to talk about?"
        />
        {/* <button className='post-btn'>Post</button> */}
      </Modal>
    </>
  );
};

export default ModalComponent;
