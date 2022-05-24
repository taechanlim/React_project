import React, { useState } from "react";

function ImageUploadExample() {
    //파일 미리볼 url을 저장해줄 state
    const [fileImage, setFileImage] = useState("");
  
    // 파일 저장
    const saveFileImage = (e) => {
      setFileImage(URL.createObjectURL(e.target.files[0]));
    };
  
    // 파일 삭제
    const deleteFileImage = () => {
      URL.revokeObjectURL(fileImage);
      setFileImage("");
    };
  
    return (
      <>
        <h3 style={{fontWeight:'bold'}}>이미지 미리보기</h3>
        <table>
          <tbody>
            <tr>
              <th>이미지</th>
              <td>
                <div>
                  {fileImage && (
                    <img
                      alt="sample"
                      src={fileImage}
                      style={{ width:"600px",maxHeight:"500px"}}
                    />
                  )}
                  <div
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      name="imgUpload"
                      type="file"
                      accept="image/*"
                      onChange={saveFileImage}
                    />
  
                    <button
                      style={{background:'#FFFFFF', border:'1.5px solid lightgray',width:'200px',height:'32px'}}
                      onClick={() => deleteFileImage()}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
  
  export default ImageUploadExample;