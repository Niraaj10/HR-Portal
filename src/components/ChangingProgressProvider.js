import React, { useState, useEffect } from 'react';

const ChangingProgressProvider = ({ values, children }) => {
  const [valueIndex, setValueIndex] = useState(0);

  useEffect(() => {
    if (valueIndex < values.length - 1) {
      const timeout = setTimeout(() => {
        setValueIndex(valueIndex + 1);
      }, 1000); // Adjust the duration as needed

      return () => clearTimeout(timeout);
    }
  }, [valueIndex, values]);

  return children(values[valueIndex]);
};

export default ChangingProgressProvider;