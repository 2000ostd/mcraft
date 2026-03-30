import "./style.css";

// --- Download URLs ---
// Replace these placeholder URLs with your actual direct download links.
const DOWNLOAD_LINKS = {
  windows: "YOUR_WINDOWS_DOWNLOAD_URL_HERE",
  mac: "YOUR_MAC_DOWNLOAD_URL_HERE",
  linux: "YOUR_LINUX_DOWNLOAD_URL_HERE",
};

/**
 * Triggers a native file download programmatically.
 * This is the standard TS/JS approach for downloads.
 */
function downloadFile(url: string) {
  // Simple check to prevent errors with the placeholders
  if (!url || url.includes("YOUR_")) {
    console.warn("Please enter a valid download URL in src/main.ts");
    alert("لینک دانلود به زودی افزوده می شود."); // "Download link is not set yet!"
    return;
  }

  // Create an invisible anchor tag to trigger the browser's download behavior
  const link = document.createElement("a");
  link.href = url;
  link.download = ""; // Hint to the browser to download the file rather than navigating

  // Appending to the body is required in some browsers (e.g. Firefox)
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Attach event listeners to the existing buttons using their classes
document
  .querySelector(".btn-windows")
  ?.addEventListener("click", () => downloadFile(DOWNLOAD_LINKS.windows));
document
  .querySelector(".btn-mac")
  ?.addEventListener("click", () => downloadFile(DOWNLOAD_LINKS.mac));
document
  .querySelector(".btn-linux")
  ?.addEventListener("click", () => downloadFile(DOWNLOAD_LINKS.linux));
