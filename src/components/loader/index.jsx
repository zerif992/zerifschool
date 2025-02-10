import "./index.css";

export default function Loader({ width, height }) {
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      style={{ height: `${height * 2}px` || "100px" }}>
      <span className="loader"></span>
    </div>
  );
}
