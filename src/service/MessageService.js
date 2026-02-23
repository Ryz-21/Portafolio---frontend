const API_URL = "https://site--portafolio-backend--yyjmjvs7r7bs.code.run/api/send-email";

export const sendMessage = async (message) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
    });
    return response.json();
};