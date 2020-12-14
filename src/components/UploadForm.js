import React, { useState } from 'react';
import { ProgressBar } from 'components';

const FileTypesMap = ['image/png', 'image/jpeg'];

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const changeHandler = e => {
        const selected = e.target.files[0];

        if (selected && FileTypesMap.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    };

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
};

export default UploadForm;
