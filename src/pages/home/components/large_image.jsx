export default function LargeImage() {
  return (
    <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-">
      <img
        src="/images/img_landscape.jpg"
        alt=""
        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
      />
    </div>
  );
}
