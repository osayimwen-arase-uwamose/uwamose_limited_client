import { useState } from "react";
import MaterialIcon from "../ui/MaterialIcon.jsx";

export default function NotificationSignup() {
  const [contact, setContact] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Frontend-only by request: no API call and no false success state.
    // Wire this form to a backend only when a contract is provided.
  }

  return (
    <form className="notification-form" onSubmit={handleSubmit}>
      <label className="field-label" htmlFor="notification-contact">
        Be the First to Know When Pre-Orders Open:
      </label>
      <div className="notification-form-row">
        <input
          id="notification-contact"
          name="contact"
          type="text"
          autoComplete="email"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          placeholder="Enter your email or WhatsApp number..."
          required
        />
        <button className="button-base button-primary focus-ring" type="submit">
          <MaterialIcon name="notifications_active" size={20} />
          Notify Me
        </button>
      </div>
    </form>
  );
}
