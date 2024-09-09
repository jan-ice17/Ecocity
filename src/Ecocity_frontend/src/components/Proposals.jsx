import React, { useEffect, useState } from "react";

const Proposal = () => {
  const [image, setImage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");

  const africanCountries = [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Eswatini",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Ivory Coast",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "Sao Tome and Principe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe",
  ];

  useEffect(() => {
    // Add Google Font for Space Grotesk
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const formStyle = {
    fontFamily: "Space Grotesk, sans-serif",
    fontWeight: "300",
    color: "white",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "20px 20px 0 20px",
    border: "1px solid #333",
    backgroundColor: "#0c0f19",
    color: "white",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const inputFocusStyle = {
    border: "1px solid #50a7f7",
  };

  const containerStyle = {
    backgroundColor: "#0c0f19",
    padding: "40px",
    borderRadius: "10px",
    maxWidth: "1100px",
    margin: "auto",
    marginTop: "50px",
    border: "1px solid #2374f0",
    boxShadow: "0 0 20px #2374f0",
    marginBottom: "50px",
  };

  const buttonStyle = {
    padding: "10px 30px",
    background: "linear-gradient(90deg, #2374f0, #50a7f7)",
    color: "white",
    border: "none",
    borderRadius: "20px 20px 0 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    display: "inline-block",
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ ...formStyle, fontSize: "32px", textAlign: "center" }}>
        Submit Your Proposal
      </h1>

      <form style={{ marginTop: "20px" }}>
        {/* Country Dropdown */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ ...formStyle, marginBottom: "5px", display: "block" }}>
            Country
          </label>
          <select
            style={inputStyle}
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            onFocus={(e) => (e.target.style.border = inputFocusStyle.border)}
            onBlur={(e) => (e.target.style.border = inputStyle.border)}
          >
            <option value="">Select a country</option>
            {africanCountries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ ...formStyle, marginBottom: "5px", display: "block" }}>
            Location
          </label>
          <input
            type="text"
            placeholder="Enter your location"
            style={inputStyle}
            onFocus={(e) => (e.target.style.border = inputFocusStyle.border)}
            onBlur={(e) => (e.target.style.border = inputStyle.border)}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ ...formStyle, marginBottom: "5px", display: "block" }}>
            Proposal Title
          </label>
          <input
            type="text"
            placeholder="Enter your proposal title"
            style={inputStyle}
            onFocus={(e) => (e.target.style.border = inputFocusStyle.border)}
            onBlur={(e) => (e.target.style.border = inputStyle.border)}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ ...formStyle, marginBottom: "5px", display: "block" }}>
            Proposal Details
          </label>
          <textarea
            placeholder="Describe your proposal"
            style={{
              ...inputStyle,
              height: "100px",
            }}
            onFocus={(e) => (e.target.style.border = inputFocusStyle.border)}
            onBlur={(e) => (e.target.style.border = inputStyle.border)}
          ></textarea>
        </div>

        {/* Upload Image Section */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ ...formStyle, marginBottom: "5px", display: "block" }}>
            Upload Your Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="upload-image"
          />
          <label
            htmlFor="upload-image"
            style={{
              ...inputStyle,
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {image ? <img src={image} alt="Image Preview" style={{ maxHeight: "100%" }} /> : "Upload Image"}
          </label>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.background = "#50a7f7")}
            onMouseLeave={(e) => (e.target.style.background = "linear-gradient(90deg, #2374f0, #50a7f7)")}
          >
            Submit Proposal
          </button>
        </div>
      </form>
    </div>
  );
};

export default Proposal;
