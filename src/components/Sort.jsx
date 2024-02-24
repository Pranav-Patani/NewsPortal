import { Dropdown } from "react-bootstrap";

// Dropdown component for sorting
const SortDropdown = () => {
  return (
    <>
      {/* Toggle button for the dropdown with a primary variant and custom styling */}
      <Dropdown.Toggle variant="primary" className="sort-btn" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>

      {/* Dropdown menu containing sorting options */}
      <Dropdown.Menu>
        {/* Action 1 */}
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>

        {/* Action 2 */}
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>

        {/* Action 3 */}
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </>
  );
};

// Exporting the SortDropdown component
export default SortDropdown;
