import React,{useState}from 'react';
import { ImageSection, ImageContainer } from './index';
import imageCompression from 'browser-image-compression';
const ImageUpload = () => {
    const FileTypes = {
        JPG: "JPG",
        PNG: "PNG",
        JPEG: "JPEG",
        BMP: "BMP",
    }
    const [fileImage, setFileImage] = useState("");
    // 파일 압축
    const compressImage = async (image) => {
        try {
            const options = {
                maxSizeMb: 1,
                maxWidthOrHeight: 250,
            }
            return await imageCompression(image, options);
        } catch (e) {
            console.log(e);
        }
    }
    // 파일 저장
    const saveFileImage = async (files) => {
        if (files && files[0]) {
            const formData = new FormData();
            const originalImage = files[0];
            const compressedImage = await compressImage(originalImage);
            formData.append('file', compressedImage);
            console.log(compressedImage);
            // 서버 요청시  formData 줘야함.
            setFileImage(URL.createObjectURL(compressedImage));
        }
    };
    //파일 확장자 체크.
    const fileTypeCheck = ({ target }) => {
        const filePath = target.value;
        const pathPoint = filePath.lastIndexOf('.');
        const fileExtentionName = filePath.substring(pathPoint + 1, filePath.length).toUpperCase();
        const { JPG, PNG, JPEG, BMP } = FileTypes;
        if (
            fileExtentionName === JPG ||
            fileExtentionName === PNG ||
            fileExtentionName === JPEG ||
            fileExtentionName === BMP
        ) {
            saveFileImage(target.files);
        }
        else {
            alert('이미지 파일만 업로드 가능합니다.');
        }
    }
    // 파일 삭제 
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage("");
    };
    return (
        <ImageSection>
            <div>
                {
                    fileImage &&
                    (
                        <ImageContainer>
                            <img src={fileImage} alt="user-profile" />
                            <button onClick={() => deleteFileImage()}>
                                삭제
                            </button>
                        </ImageContainer>
                    )
                }
                <label htmlFor="input-file">
                    Face Upload 😎
                </label>
                <input
                    type="file"
                    id="input-file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={fileTypeCheck}
                />
            </div>
        </ImageSection>
    )
}
export default ImageUpload;