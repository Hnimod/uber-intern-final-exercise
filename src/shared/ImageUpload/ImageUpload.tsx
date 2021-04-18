import { useRef, useState, useEffect, ChangeEvent } from 'react';

import styles from './ImageUpload.module.scss';

interface Props {
  defaultImage: string;
  onImageChange: (file: File) => void;
}

const ImageUpload = ({ onImageChange, defaultImage }: Props) => {
  const filePickerRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<any>(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file as any);
    } else {
      setPreviewUrl(null);
    }
    onImageChange(file as File);
  }, [file, isValid, onImageChange]);

  const pickImageHandler = () => {
    filePickerRef.current?.click();
  };

  const pickedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length === 1) {
      setFile(event.target.files[0]);
      setIsValid(true);
    } else {
      setFile(undefined);
      setIsValid(false);
    }
  };

  return (
    <div>
      <input
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div onClick={pickImageHandler} className={styles.preview}>
        {!!previewUrl ? (
          <img src={previewUrl} alt="preview" className={styles.previewImg} />
        ) : (
          <img src={defaultImage} alt="default" className={styles.defaultImg} />
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
