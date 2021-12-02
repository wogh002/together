import React, { useState } from "react";
import { FileDiv } from "./index";
const FileUpload = ({ setUploadFile, uploadFile }) => {
  const [fileName, setFileName] = useState("");
  const FileTypes = {
    PDF: "PDF",
  };
  // 파일 저장
  const saveSelectFile = async (files) => {
    if (files && files[0]) {
      const originalFile = files[0];
      if (originalFile.size > 1024 * 1024 * 2) {
        alert(
          "2MB 이하 파일만 등록할 수 있습니다.\n\n" +
            "현재파일 용량 : " +
            Math.round((originalFile.size / 1024 / 1024) * 100) / 100 +
            "MB"
        );
        return;
      }
      setFileName(originalFile.name);
      setUploadFile(originalFile);
    }
  };
  //파일 확장자 체크.
  const fileTypeCheck = ({ target }) => {
    const filePath = target.value;
    const pathPoint = filePath.lastIndexOf(".");
    const fileExtentionName = filePath
      .substring(pathPoint + 1, filePath.length)
      .toUpperCase();
    if (fileExtentionName === FileTypes.PDF) {
      saveSelectFile(target.files);
    } else {
      alert("PDF 파일만 업로드 가능합니다");
      return;
    }
  };
  // 파일 삭제
  const deleteSelectFile = () => {
    setUploadFile(null);
    setFileName("");
  };
  return (
    <>
      <FileDiv>
        <label htmlFor="input-file">File Upload</label>
        {uploadFile ? (
          <button onClick={() => deleteSelectFile()}>삭제</button>
        ) : (
          <span>파일을 첨부해주세요</span>
        )}
        <input
          type="file"
          id="input-file"
          accept="file/*"
          style={{ display: "none" }}
          onChange={fileTypeCheck}
        />
        {fileName}
      </FileDiv>
    </>
  );
};
export default FileUpload;
