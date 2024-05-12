import React from "react";

const Section = ({ title, children }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

// Styles for the Section component
const styles = {
  container: {
    margin: '20px 0',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    color: 'black',  
  },
  content: {
    fontSize: '16px',
    color: 'black'
  }
};

export default Section;
