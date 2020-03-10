// Import React dependencies.
import React, { useEffect, useMemo, useState, useCallback } from "react";
// Import the Slate editor factory.
import { createEditor } from 'slate';
import { Transforms, Editor } from 'slate';
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

// Define a React component renderer for our code blocks.
const CodeElement = props => {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    );
};
const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>;
};



const SlateEditor = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ]);
    const renderElement = useCallback(props => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />;
            default:
                return <DefaultElement {...props} />;
        }
    }, []);
    // Render the Slate context.
    return (
        <Slate editor={editor} value={value} onChange={value => setValue(value)}>
            <Editable
                renderElement={renderElement}
                onKeyDown={event => {
                    if (event.key === '`' && event.ctrlKey) {
                        // Prevent the "`" from being inserted by default.
                        event.preventDefault();
                        // Otherwise, set the currently selected blocks type to "code".
                        Transforms.setNodes(
                            editor,
                            { type: 'code' },
                            { match: n => Editor.isBlock(editor, n) }
                        );
                    }
                }}
            />
        </Slate>
    );
};

export default SlateEditor;