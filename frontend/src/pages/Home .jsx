export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mb-10">
        <h1>Home</h1>
        <p>Welcome to the Home Page</p>
      </div>

      <div className="flex justify-center gap-4">
        <div className="flex flex-col items-center border-2 p-5">
          <h1>Image1</h1>
          <img src="" alt="image1" />
        </div>
        <div className="flex flex-col items-center border-2 p-5">
          <h1>Image2</h1>
          <img src="" alt="image2" />
        </div>
        <div className="flex flex-col items-center border-2 p-5">
          <h1>Image3</h1>
          <img src="" alt="image3" />
        </div>
      </div>
    </div>
  );
}
