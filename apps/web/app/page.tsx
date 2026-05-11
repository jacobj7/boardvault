export default function Home() {
  return (
    <main style={{
      fontFamily: "system-ui, sans-serif",
      maxWidth: 720,
      margin: "0 auto",
      padding: "4rem 1.5rem",
      lineHeight: 1.5,
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Boardvault</h1>
      <p style={{ fontSize: "1.15rem", color: "#444" }}>
        Compliance and document tracking for HOA and condo boards.
        Insurance renewals, reserve studies, vendor certificates of insurance —
        all in one place, with renewal reminders that never miss a date.
      </p>
      <p style={{ marginTop: "2rem", color: "#888" }}>
        We&apos;re onboarding our first boards now.{" "}
        <a href="mailto:hello@getboardvault.com" style={{ color: "#0070f3" }}>
          hello@getboardvault.com
        </a>
      </p>
    </main>
  );
}
