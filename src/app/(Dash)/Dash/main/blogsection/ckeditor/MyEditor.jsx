"use client";
import React, { useEffect, useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { mainUrl } from "../../../../../../../config";

class UploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("image", file);
          console.log(formData, "formData");
          fetch(`${mainUrl}/api/team`, {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((result) => {
              if (result.imageUrl) {
                resolve({ default: result.imageUrl });
              } else {
                reject("Upload failed");
              }
            })
            .catch(() => reject("Upload failed"));
        })
    );
  }

  abort() {}
}

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new UploadAdapter(loader);
  };
}

const MyEditor = ({
  value,
  onChange,
  onBlur,
  name,
  placeholder,
  className,
}) => {
  const [editorData, setEditorData] = useState(value);

  useEffect(() => {
    setEditorData(value);
  }, [value]);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
    if (onChange) {
      onChange({
        target: { name, value: data },
      });
    }
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      data={editorData}
      onChange={handleEditorChange}
      onBlur={onBlur}
      config={{
        placeholder,
        extraPlugins: [MyCustomUploadAdapterPlugin],
        contentStyles: ["img {max-width: 50%; height: auto;}"],
        mediaEmbed: {
          previewsInData: true,
        },
      }}
    />
  );
};

export default MyEditor;
