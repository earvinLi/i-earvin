/* eslint-disable newline-per-chained-call */

// External Dependencies
import { Editor as TiptapEditorTypoe } from '@tiptap/react';
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Strikethrough as StrikethroughIcon,
  List as ListIcon,
  ListOrdered as ListOrderedIcon,
  TextQuote as TextQuoteIcon,
  Minus as MinusIcon,
  Code as CodeIcon,
  SquareCode as SquareCodeIcon,
  Undo as UndoIcon,
  Redo as RedoIcon,
} from 'lucide-react';

// Internal Dependencies
import IconButton from "@/components/IconButton";

type TiptapEditorToolbarProps = {
  editor: TiptapEditorTypoe | null;
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
        icon={<BoldIcon color={editor.isActive('bold') ? '#00A3DA' : 'black'} size={18} />}
        // tooltip="Bold"
      />
      <IconButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        icon={<ItalicIcon color={editor.isActive('italic') ? '#00A3DA' : 'black'} size={18} />}
        // tooltip="Italic"
      />
      <IconButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        icon={<StrikethroughIcon color={editor.isActive('strike') ? '#00A3DA' : 'black'} size={18} />}
        // tooltip="Strike"
      />
      <IconButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        icon={<ListIcon color={editor.isActive('bulletList') ? '#00A3DA' : 'black'} size={18} />}
        // tooltip="Bullet list"
      />
      <IconButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        icon={<ListOrderedIcon color={editor.isActive('orderedList') ? '#00A3DA' : 'black'} size={18} />}
        // tooltip="Ordered list"
      />
      <IconButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        icon={<TextQuoteIcon color={editor.isActive('blockquote') ? '#00A3DA' : 'black'} size={18} />}
        // tooltip="Blockquote"
      />
      <IconButton
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        icon={<MinusIcon color="black" size={18} />}
        // tooltip="Horizontal rule"
      />
      <IconButton
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        icon={<CodeIcon color={editor.isActive('code') ? '#00A3DA' : 'black'} size={18} />}
        // tooltip="Code"
      />
      <IconButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        icon={<SquareCodeIcon color={editor.isActive('codeBlock') ? '#00A3DA' : 'black'} size={18} />}
        // tooltip="Code block"
      />
      <IconButton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        icon={<UndoIcon />}
        // tooltip="Undo"
      />
      <IconButton
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        icon={<RedoIcon />}
        // tooltip="Redo"
      />
    </div>
  );
}
