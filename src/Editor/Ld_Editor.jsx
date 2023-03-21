import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import './editor.css'


const Ld_Editor = () => {
    const [value, setValue] = useState("**Hello world!!!**");

    const handleSelect = () => {
        const textarea = document.querySelector('.w-md-editor-text-input');
        const selection = textarea.value.substring( 
            textarea.selectionStart - 1,
            textarea.selectionEnd
        );
        console.log(selection);
    };

    return (
        <div>
            <div className="container">
                <MDEditor
                    className="test"
                    value={value}
                    onChange={setValue}
                    onClick={handleSelect}
                    onMouseUp={handleSelect}
                />
                <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
            </div>
        </div>
    );
}

export default Ld_Editor;
