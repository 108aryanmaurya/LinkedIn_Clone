import React from "react";
import "./index2.scss";
import { Modal, Button, Progress, Space } from "antd";
const FioleuploadModal = ({
  modal2Open,
  setModal2Open,
  getImage,
  uploadImage,
  currentImage,
  progress,
}) => {
  return (
    <div>
      <Modal
        // height="1200px"
        title="Add a profile Image"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={[
          <Button
            disabled={currentImage[0]?.name ? false : true}
            key="submit"
            type="primary"
            onClick={uploadImage}
          >
            Upload Profile Picture
          </Button>,
        ]}
      >
        <div className="upload-image-main">
          <p>{currentImage[0]?.name}</p>
          <label className="upload-btn" htmlFor="image-upload">
            Add a image
          </label>
          <div className="progress-bar">
            <Progress size={70} type="circle" percent={progress} />
          </div>
          <input hidden id="image-upload" onChange={getImage} type={"file"} />
        </div>
      </Modal>
    </div>
  );
};

export default FioleuploadModal;
