// External Dependencies
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

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
    editorProps: { attributes: { class: 'h-[240px]' } },
    onUpdate({ editor: currentEditor }) {
      onChange(currentEditor.getHTML());
    },
  });

  return (
    <div className="w-[540px]">
      <EditorContent editor={editor} />
    </div>
  );
}
