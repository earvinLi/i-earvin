// External Dependencies
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// Local Dependencies
import TiptapEditorToolbar from './TiptapEditorToolbar';

type TiptapEditorProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

// Component Definition
export default function TiptapEditor(props: TiptapEditorProps) {
  const { label, value, onChange } = props;

  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    // Todo: build proper focus and hover styles
    editorProps: { attributes: { class: 'h-[180px] overflow-y-scroll focus:outline-none' } },
    onUpdate({ editor: currentEditor }) {
      onChange(currentEditor.getHTML());
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="text-gray-400 text-sm">{label}</div>
      <div className="w-full border-2 border-gray-300 rounded p-3 flex flex-col gap-2">
        <TiptapEditorToolbar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
