import ModelViewerComponent from "./Components/ModelViewerComponent";
import "./App.css";

function App() {
  return (
    <div className='infobox__content-wrapper wrapper'>
      Appointment waiting list to apply for a visa for family reunion or
      marriage (for stays exceeding 90 days) Continue Appointment waiting list
      to apply for a work visa (for stays exceeding 90 days) Continue
      Appointment waiting list to apply for a work visa - Only for applicants
      with pre-approval as per §81a Residence Act Residence Act Continue
      Appointment waiting list for Schengen visa Continue Study
      <select id='appointment_newAppointmentForm_fields_3__content'>
        {/* add options */}
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='4'>winter</option>
      </select>
    </div>
  );
}

export default App;
