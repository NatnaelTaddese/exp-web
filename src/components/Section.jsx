export default function Section({
  children,
  background,
  customStyles,
  id,
  className,
}) {
  const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundAttachment: "fixed", // Optional: creates parallax effect
    ...customStyles,
  };

  return (
    <section id={id} style={sectionStyle} className={`relative ${className}`}>
      {children}
    </section>
  );
}
