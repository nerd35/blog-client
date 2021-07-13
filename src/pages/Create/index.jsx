import React, { useContext, useState } from "react";
import "./create.css";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import { Context } from "../../context/context";

export default function Create() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefalut();

    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.postPic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="create">
      {file && <img src={URL.createObjectURL(file)} alt="createimg" className="create-image" />}
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="create-form-group">
          <label htmlFor="fileInput">
            <i className="create-icon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" onChange={e =>setFile(e.target.files[0])} style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="create-input"
            autoFocus={true}
            onChange={e =>setTitle(e.target.value)}
          />
        </div>
        <div className="create-form-group">
          <textarea
            placeholder="Tell your story...."
            type="text"
            className="create-input create-text"
            onChange={e =>setDesc(e.target.value)}

          ></textarea>
        </div>
        {/* <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        /> */}
        ;
        <button className="create-submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
