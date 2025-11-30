const key = "e2eeebb1-08ee-4ab6-9094-0ed21e0efa3a";

const submitForm = async (payload) => {
  try {
    // Add the access key to the payload
    const formData = {
      ...payload,
      access_key: key,
    };

    // Create a custom subject if name exists in payload
    if (formData.name) {
      formData.subject = `${formData.name} sent a message from website`;
    }

    // Convert to JSON
    const json = JSON.stringify(formData);

    // Send the request to web3forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();

    if (response.status === 200 && result.success) {
      return {
        success: true,
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
        data: result,
      };
    } else {
      console.error("Form submission failed:", result);
      return {
        success: false,
        message:
          result.message || "Failed to send message. Please try again later.",
        error: result,
      };
    }
  } catch (error) {
    console.error("Error in submitForm:", error);
    return {
      success: false,
      message:
        "Something went wrong! Please check your connection and try again.",
      error: error.message,
    };
  }
};

export default submitForm;
