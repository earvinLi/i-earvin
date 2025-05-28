// External Dependencies
import { useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// Local Dependencies
import TiptapEditorToolbar from './TiptapEditorToolbar';
import './tiptapEditorStyles.scss';

type TiptapEditorProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  toolbarActions?: string[];
};

// Component Definition
export default function TiptapEditor(props: TiptapEditorProps) {
  const { label = '', value, onChange, toolbarActions = ['all'] } = props;

  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    // Todo: build proper focus and hover styles
    editorProps: {
      attributes: { class: 'h-[180px] overflow-y-scroll focus:outline-none' },
    },
    onUpdate({ editor: currentEditor }) {
      onChange(currentEditor.getHTML());
    },
    immediatelyRender: false,
  });

  // Sync value with editor for form reset case
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [editor, value]);

  return (
    <div className='flex flex-col gap-2'>
      {label && <div className='text-base text-gray-400'>{label}</div>}
      <div className='flex w-full flex-col gap-2 rounded border-2 border-gray-300 p-3'>
        <TiptapEditorToolbar editor={editor} toolbarActions={toolbarActions} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
