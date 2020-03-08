// Import React dependencies.
import React, { useEffect, useMemo, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

const SlateEditor = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ]);

    // Render the Slate context.
    return (
        <Slate editor={editor} value={value} onChange={value => setValue(value)}>
            <Editable />
        </Slate>
    );
};

export default SlateEditor;