import React, { useState } from 'react';

const CollapsiblePanels = () => {
  const [panels, setPanels] = useState({
    panel1: false,
    panel2: false,
    panel3: false,
    // Add more panels as needed
  });

  const togglePanel = (panelName) => {
    setPanels({ ...panels, [panelName]: !panels[panelName] });
  };

  return (
    <div>
      <div className="panel">
        <button onClick={() => togglePanel('panel1')}>
          {panels.panel1 ? 'Collapse Panel 1' : 'Expand Panel 1'}
        </button>
        {panels.panel1 && (
          <div className="panel-content">
            Content for Panel 1
          </div>
        )}
      </div>

      <div className="panel">
        <button onClick={() => togglePanel('panel2')}>
          {panels.panel2 ? 'Collapse Panel 2' : 'Expand Panel 2'}
        </button>
        {panels.panel2 && (
          <div className="panel-content">
            Content for Panel 2
          </div>
        )}
      </div>

      <div className="panel">
        <button onClick={() => togglePanel('panel3')}>
          {panels.panel3 ? 'Collapse Panel 3' : 'Expand Panel 3'}
        </button>
        {panels.panel3 && (
          <div className="panel-content">
            Content for Panel 3
          </div>
        )}
      </div>
      {/* Add more panels as needed */}
    </div>
  );
};

export default CollapsiblePanels;
