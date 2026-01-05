const Heja = () => {
  const colors = [
    "#C62828", "#EF6C00", "#F9A825", "#2E7D32", "#00838F",
    "#1565C0", "#6A1B9A", "#AD1457", "#E64A19", "#009688",
    "#283593", "#880E4F", "#689F38", "#D84315", "#00796B"
  ];

  // Shuffle colors array
  const shuffledColors = [...colors].sort(() => Math.random() - 0.5);

  const text = "Välkommen!";

  return (
    <div className="md:text-xl text-lg text-black pb-2 font-semibold">
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{ color: shuffledColors[index % shuffledColors.length] }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default Heja;
