"use client";

import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Undo2,
  Redo2,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({
  value,
  onChange,
}: RichTextEditorProps) {
  const applyCommand = (
    command: string,
    commandValue?: string
  ) => {
    document.execCommand(command, false, commandValue);
  };

  const formatBlock = (tag: string) => {
    document.execCommand("formatBlock", false, tag);
  };

  const addLink = () => {
    const url = window.prompt("Enter the URL:");

    if (!url) {
      return;
    }

    document.execCommand("createLink", false, url);
  };

  const handleInput = (
    event: React.FormEvent<HTMLDivElement>
  ) => {
    onChange(event.currentTarget.innerHTML);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-300 bg-white focus-within:border-[#c89b57] focus-within:ring-2 focus-within:ring-[#c89b57]/10">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 p-2">
        {/* Headings */}
        <button
          type="button"
          onClick={() => formatBlock("h1")}
          className="rounded-lg px-3 py-2 text-sm font-bold text-[#0B1F3A] transition hover:bg-white hover:text-[#c89b57]"
          title="Heading 1"
        >
          H1
        </button>

        <button
          type="button"
          onClick={() => formatBlock("h2")}
          className="rounded-lg px-3 py-2 text-sm font-bold text-[#0B1F3A] transition hover:bg-white hover:text-[#c89b57]"
          title="Heading 2"
        >
          H2
        </button>

        <button
          type="button"
          onClick={() => formatBlock("h3")}
          className="rounded-lg px-3 py-2 text-sm font-bold text-[#0B1F3A] transition hover:bg-white hover:text-[#c89b57]"
          title="Heading 3"
        >
          H3
        </button>

        <div className="mx-1 h-6 w-px bg-slate-300" />

        {/* Text formatting */}
        <button
          type="button"
          onClick={() => applyCommand("bold")}
          className="rounded-lg p-2 text-[#0B1F3A] transition hover:bg-white hover:text-[#c89b57]"
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => applyCommand("italic")}
          className="rounded-lg p-2 text-[#0B1F3A] transition hover:bg-white hover:text-[#c89b57]"
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => applyCommand("underline")}
          className="rounded-lg p-2 text-[#0B1F3A] transition hover:bg-white hover:text-[#c89b57]"
          title="Underline"
        >
          <Underline className="h-4 w-4" />
        </button>

        <div className="mx-1 h-6 w-px bg-slate-300" />

        {/* Lists */}
        <button
          type="button"
          onClick={() =>
            applyCommand("insertUnorderedList")
          }
          className="rounded-lg p-2 text-[#0B1F3A] transition hover:bg-white hover:text-[#c89b57]"
          title="Bullet list"
        >
          <List className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() =>
            applyCommand("insertOrderedList")
          }
          className="rounded-lg p-2 text-[#0B1F3A] transition hover:bg-white hover:text-[#c89b57]"
          title="Numbered list"
        >
          <ListOrdered className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => formatBlock("blockquote")}
          className="rounded-lg p-2 text-[#0B1F3A] transition hover:bg-white hover:text-[#c89b57]"
          title="Blockquote"
        >
          <Quote className="h-4 w-4" />
        </button>

        <div className="mx-1 h-6 w-px bg-slate-300" />

        {/* Link */}
        <button
          type="button"
          onClick={addLink}
          className="rounded-lg p-2 text-[#0B1F3A] transition hover:bg-white hover:text-[#c89b57]"
          title="Add link"
        >
          <LinkIcon className="h-4 w-4" />
        </button>

        <div className="mx-1 h-6 w-px bg-slate-300" />

        {/* Undo / Redo */}
        <button
          type="button"
          onClick={() => applyCommand("undo")}
          className="rounded-lg p-2 text-[#0B1F3A] transition hover:bg-white hover:text-[#c89b57]"
          title="Undo"
        >
          <Undo2 className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => applyCommand("redo")}
          className="rounded-lg p-2 text-[#0B1F3A] transition hover:bg-white hover:text-[#c89b57]"
          title="Redo"
        >
          <Redo2 className="h-4 w-4" />
        </button>
      </div>

      {/* Editor */}
      <div
        contentEditable
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={handleInput}
        className="min-h-[1420px] w-full px-5 py-5 text-sm leading-7 text-slate-700 outline-none [&_h1]:mb-4 [&_h1]:mt-6 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-[#0B1F3A] [&_h2]:mb-3 [&_h2]:mt-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#0B1F3A] [&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#0B1F3A] [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_blockquote]:my-5 [&_blockquote]:border-l-4 [&_blockquote]:border-[#c89b57] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-slate-500 [&_a]:text-[#c89b57] [&_a]:underline"
      />
    </div>
  );
}