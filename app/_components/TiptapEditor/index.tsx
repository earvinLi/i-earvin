// External Dependencies
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// Local Dependencies
import TiptapEditorToolbar from './TiptapEditorToolbar';

type TiptapEditorProps = {
  onChange: (value: string) => void;
  value: string;
}

// Component Definition
export default function TiptapEditor(props: TiptapEditorProps) {
  const { onChange, value } = props;

  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    editorProps: { attributes: { class: 'h-[180px] overflow-y-scroll focus:outline-none' } },
    onUpdate({ editor: currentEditor }) {
      onChange(currentEditor.getHTML());
    },
  });

  return (
    <div className="w-[540px] border-2 border-gray-300 rounded p-3 flex flex-col gap-2">
      <TiptapEditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
