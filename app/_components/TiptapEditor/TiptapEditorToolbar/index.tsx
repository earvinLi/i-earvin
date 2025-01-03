// External Dependencies
import { Bold as BoldIcon } from 'lucide-react';

// Internal Dependencies
import IconButton from "@/components/IconButton";

type TiptapEditorToolbarProps = {
  editor: any;
};

// Component Definition
export default function TiptapEditorToolbar(props: TiptapEditorToolbarProps) {
  const { editor } = props;

  if (!editor) return null;

  return (
    <div className="flex flex-row">
      <IconButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        icon={<BoldIcon color="black" size={18} />}
        // tooltip="Bold"
        // className={editor.isActive('bold') ? 'is-active' : ''}
      />
    </div>
  );
}
