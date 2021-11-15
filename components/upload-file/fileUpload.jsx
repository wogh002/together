import React, { useState } from 'react';
import { FileContainer } from './index';
import imageCompression from 'browser-image-compression';
const FileUpload = ({ setUploadFile }) => {
    const [ selectFile, setSelectFile ] = useState("");
    const FileTypes = {
        PDF: "PDF",
        PPT: "PPT",
        PPTX: "PPTX",
    }

    // 파일 압축
    const compressFile = async (file) => {
        try {
            const options = {
                maxSizeMb: 0.3,
                maxWidthOrHeight: 200,
            }
            return await imageCompression(image, options);
        } catch (e) {
            console.log(e);
        }
    }
    // 파일 저장
    const saveSelectFile = async (files) => {
        if (files && files[0]) {
            const originalFile = files[0];
            console.log(originalFile.size);
            if (originalFile.size > 1024 * 1024 * 2) {
                alert('2MB 이하 파일만 등록할 수 있습니다.\n\n' + '현재파일 용량 : ' + (Math.round(originalFile.size / 1024 / 1024 * 100) / 100) + 'MB');
                return;
            }
            setUploadFile(originalFile);
            setSelectFile(URL.createObjectURL(originalFile));
        }
    };
    //파일 확장자 체크.
    const fileTypeCheck = ({ target }) => {
        const filePath = target.value;
        const pathPoint = filePath.lastIndexOf('.');
        const fileExtentionName = filePath.substring(pathPoint + 1, filePath.length).toUpperCase();
        const { PDF, PPT, PPTX } = FileTypes;
        if (
            fileExtentionName === PDF ||
            fileExtentionName === PPT ||
            fileExtentionName === PPTX 
        ) {
            saveSelectFile(target.files);
        }
        else {
            alert('PDF,PPT,PPTX 파일만 업로드 가능합니다.');
        }
    }
    // 파일 삭제 
    const deleteSelectFile = () => {
        URL.revokeObjectURL(selectFile);
        setSelectFile("");
        setUploadFile(null);
    };
    return (
        <>
            <div>
                {
                    selectFile &&
                    (
                        <FileContainer>
                            <img src={selectFile} alt="user-portfolio" />
                            <button onClick={() => deleteSelectFile()}>
                                삭제
                            </button>
                        </FileContainer>
                    )
                }
                <label htmlFor="input-file">
                    portfolio Upload
                </label>
                <input
                    type="file"
                    id="input-file"
                    accept="file/*"
                    // style={{ display: "none" }}
                    onChange={fileTypeCheck}
                />
            </div>
        </>
    )
}
export default FileUpload;