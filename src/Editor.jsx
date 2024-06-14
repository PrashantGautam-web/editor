import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
const Editor = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [show, setShow] = useState(false)
    const getEditor = () => {
        return (
            <>
                <div style={{ margin: "50px" }}>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        // config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={newContent => { }}
                    />
                </div>
                {/* <button onClick={() => { setShow(true) }}>View HTML</button> */}
                {/* {show &&
                    <div style={{ marginTop: "10px", padding: "20px" }}>
                        <span style={{ width: "100%", backgroundColor: "black", color: "white", padding: "20px" }}>{content}</span>
                    </div>
                } */}
            </>
        )
    }
    return getEditor()
}
export default Editor;