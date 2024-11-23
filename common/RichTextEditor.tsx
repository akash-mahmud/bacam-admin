import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function RichTextEditor({ state, setSate }: any) {
	return (
		<Editor
			toolbar={
				{
					// inline: { inDropdown: true },
					// list: { inDropdown: true },
					// code: { inDropdown: true },
					// textAlign: { inDropdown: true },
					// link: { inDropdown: true },
					// history: { inDropdown: true },
					// image: {
					//   previewImage: true,
					//   uploadCallback: (file) => uploadImageCallBack(file),
					//   alt: { present: true, mandatory: true },
					// },
				}
			}
			editorState={state}
			wrapperClassName='demo-wrapper'
			editorClassName='demo-editor'
			onEditorStateChange={setSate}
		/>
	);
}
