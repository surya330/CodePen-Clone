import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2';

export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props

  function handleChange(editor, data, value) {
    onChange(value)
  }
  const [open, setopen] = useState(true);
  
  function OpenClose(){
    setopen(prevOpen => !prevOpen)
  }
  return (
    <div className={`editor-container ${open ? '' : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button type="button" onClick={OpenClose}>O/C</button>    
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  )
}