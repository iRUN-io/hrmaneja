/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EmailResponse = () => {
    const [inputText, setInputText] = useState('');
    const [generatedResponse, setGeneratedResponse] = useState('');

    const handleInputChange = (text) => {
        setInputText(text);
    };

    const generateEmailResponse = async () => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/engines/davinci/completions',
                {
                    prompt: `Compose an email response:\n${inputText}`,
                    max_tokens: 150,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer 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`,
                    },
                }
            );

            setGeneratedResponse(response.data.choices[0].text);
        } catch (error) {
            console.error('Error generating email response:', error);
        }
    };

    return (

        <div className='container'>
            <h3 style={{marginTop: 50}} className="card-title">Paste received email and generate a response immediately</h3>
            <div className="clearfix" style={{marginTop: 50}}>
            <ReactQuill value={inputText} onChange={handleInputChange} />
            <button className='btn btn-success btn-md' style={{marginTop: 10}} onClick={generateEmailResponse}>Generate Response</button>
            <div>
                <h3 style={{marginTop: 50}} className="card-title">Generated Response:</h3>
                <div dangerouslySetInnerHTML={{ __html: generatedResponse }} />
            </div>
            </div>
        </div>
    )
};


export default EmailResponse