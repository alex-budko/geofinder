import axios from "axios";

export const entrance_email = async (email) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    email,
  });
  try {
    await axios
      .post(`http://127.0.0.1:8000/api/e/entrance/`, body, config)
      .then((res) => {
        return res;
      });

    return { success: "email sent successfully" };
  } catch (err) {
    return { error: err };
  }
};
