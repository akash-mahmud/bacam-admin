



import { Upload } from 'antd'
import { RcFile,  UploadFile } from 'antd/es/upload'
import React, { memo } from 'react'
interface IPropType{
  beforeUpload: (args: RcFile )=> Promise<void>
    uploadButton: JSX.Element
    filelist: UploadFile<any>[]
    handlePreview?: ((file: UploadFile<any>) => void) | undefined
handleRemove: ((file: UploadFile<any>) => boolean | void | Promise<boolean | void>) | undefined
accept?:string
}
function UploadMultipleFiles({beforeUpload , uploadButton ,filelist, handlePreview , handleRemove , accept=undefined}:IPropType) {
  return (

                     <Upload multiple={false} accept={accept}
                     beforeUpload={(args) => beforeUpload(args)}
                     onRemove={handleRemove}
                       listType="picture-card"
                       fileList={filelist}
                       onPreview={handlePreview}
                     >
                       {uploadButton}
                     </Upload>
  )
}

export default memo(UploadMultipleFiles)