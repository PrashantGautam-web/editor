import React, { useEffect, useRef, useState } from 'react';
import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';
// import data from './test'; // Assuming 'test' is a valid JSON file
import { useLocation, useParams } from 'react-router-dom';
import { templatesData } from './TemplatesData';

const EmailEditorData = ({ onChange }) => {
    const urlParams = useLocation().search;
    const id = new URLSearchParams(urlParams).get("id");
    const [data, setData] = useState(null)
    const emailEditorRef = useRef(null);
    const unlayer = emailEditorRef.current?.editor;

    useEffect(() => {
        console.log(id)
        if (id) {
            console.log(templatesData[id])
            setData(templatesData[id]?.content)
        }
    }, [id])

    const loadDesign = async (unlayer) => {
        if (emailEditorRef.current) {
            try {
                // Check if 'data' is a string containing a URL
                if (typeof data === 'string' && data.startsWith('http')) {
                    const response = await fetch(data);
                    const emailData = await response.json();
                    unlayer.loadDesign(emailData);
                } else {
                    // Assuming 'data' is a local JSON object
                    emailEditorRef.current.editor.loadDesign(JSON.parse(unlayer));
                }
            } catch (error) {
                console.error('Error loading design:', error);
                // Handle error gracefully (e.g., display a message to the user)
                emailEditorRef.current.editor.loadBlank({ backgroundColor: '#fff' }); // Load a blank template as fallback
            }
        }
    };

    const editorConfig = {
        appearance: {
            showPoweredBy: true,
        },
    };

    const onLoad = () => {
        console.log('Email editor has loaded');
    };

    const exportHtml = async () => {
        const unlayer = emailEditorRef.current?.editor;
        if (unlayer) {
            await unlayer.exportHtml((data) => {
                const { design, html } = data;
                console.log('exportHtml', JSON.stringify(design), html);
                // You can use the design and html data here, e.g., send it to your backend
            });
        } else {
            console.error('Email editor not found');
            // Handle the case where the editor is not available
        }
    };

    const onReady = (unlayer) => {
        // editor is ready
        if (unlayer) {
            loadDesign(data, unlayer); // Call loadDesign here after editor is ready
        } else {
            console.error('Email editor not ready');
        }
    };

    return (
        <>
            <h1>{id ? "Edit Template" : "Add Template"}</h1>
            <div>
                <div>
                    <button onClick={exportHtml}>Export HTML</button>
                </div>
                <EmailEditor
                    ref={emailEditorRef}
                    // onReady={onLoad}
                    onReady={onReady}
                    minHeight={800}
                    options={editorConfig}
                />
            </div>
        </>
    );
};

export default EmailEditorData;
