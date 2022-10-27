import React from "react";

export const LimitedTextarea = ({ rows, cols, limit }) => {
    const [content, setContent] = React.useState('');
    const [error, setError] = React.useState('');
  
    const setFormattedContent = React.useCallback(

      text => {
        setContent(text.slice(0, limit, error));
      },
      [limit, setContent, setError]
    );
  
    return (
      <>
      <h1>Textarea</h1>
         <textarea rows={rows} cols={cols} onChange={event => setFormattedContent(event.target.value)} value={content}/>
         <br>
         </br>
         <label>Votre message ({content.length}/{limit})</label>
        <p>
          {error ? <p style={{ color: 'red' }}>{error}</p> : null}
        </p>
      </>
    );
  };