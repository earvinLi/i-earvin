// External Dependencies
import { useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { twJoin } from 'tailwind-merge';

// Local Dependencies
import TiptapEditorToolbar from './TiptapEditorToolbar';
import './tiptapEditorStyles.scss';

// Style variables
const inputStateStyles = {
  default: {
    input: 'border-gray-300',
    label: 'text-gray-400',
  },
  error: {
    input: 'border-red-400',
    label: 'text-red-500',
  },
};

type TiptapEditorProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  inputState?: 'default' | 'error';
  helperText?: string;
  toolbarActions?: string[];
};

// Component Definition
export default function TiptapEditor(props: TiptapEditorProps) {
  const {
    label = '',
    value,
    onChange,
    inputState = 'default',
    helperText = '',
    toolbarActions = ['all'],
  } = props;

  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    // Todo: build proper focus and hover styles
    editorProps: {
      attributes: { class: 'h-[180px] overflow-y-scroll focus:outline-none' },
    },
    onUpdate({ editor: currentEditor }) {
      // enable 'React Hook Form' required validation since empty editor will still send `<p></p>`
      const newContent = currentEditor.isEmpty ? '' : currentEditor.getHTML();
      onChange(newContent);
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
      {label && (
        <label className={twJoin('text-base', inputStateStyles[inputState].label)}>{label}</label>
      )}
      <div
        className={twJoin(
          'flex w-full flex-col gap-2 rounded border-2 p-3',
          inputStateStyles[inputState].input,
        )}
      >
        <TiptapEditorToolbar editor={editor} toolbarActions={toolbarActions} />
        <EditorContent editor={editor} />
      </div>
      {inputState === 'error' && helperText && (
        <div className='text-sm text-red-500'>{helperText}</div>
      )}
    </div>
  );
}
