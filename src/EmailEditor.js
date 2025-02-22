import React, { useEffect, useRef, useState } from 'react';
import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';
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
        fonts: {
            showDefaultFonts: true,
            customFonts: [
                {
                    label: "Comic Sans",
                    value: "'Comic Sans MS', cursive, sans-serif"
                },
                {
                    label: "Lobster Two",
                    value: "'Lobster Two', cursive",
                    url: "https://fonts.googleapis.com/css?family=Lobster+Two:400,700"
                },
                {
                    label: "Open Sans",
                    value: "'Open Sans', sans-serif",
                    url: "https://fonts.googleapis.com/css?family=Open+Sans"
                },
                {
                    label: "League Spartan",
                    value: "'League Spartan', sans-serif",
                    url: "https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap"
                },
                {
                    label: "Glacial Indifference",
                    value: "'Glacial Indifference', sans-serif",
                    url: "https://fonts.googleapis.com/css2?family=Glacial+Indifference&display=swap"
                },
                {
                    label: "Libre Baskerville",
                    value: "'Libre Baskerville', serif",
                    url: "https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700"
                }
            ],
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
                console.log('exportHtml', design, html);
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
                {console.log("hello")}
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
