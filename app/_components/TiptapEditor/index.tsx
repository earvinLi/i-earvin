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
}

// Component Definition
export default function TiptapEditor(props: TiptapEditorProps) {
  const { label = '', value, onChange } = props;

  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    // Todo: build proper focus and hover styles
    editorProps: { attributes: { class: 'h-[180px] overflow-y-scroll focus:outline-none' } },
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
    <div className="flex flex-col gap-2">
      {label && <div className="text-gray-400 text-base">{label}</div>}
      <div className="w-full border-2 border-gray-300 rounded p-3 flex flex-col gap-2">
        <TiptapEditorToolbar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
